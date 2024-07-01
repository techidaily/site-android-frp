/**
 * Theme Redefine
 * welcome.js
 */
const { version } = require("../../package.json");
const https = require("https");

hexo.on("ready", async () => {
  const timeout = 3000;

  async function fetchRedefineInfo() {
    return new Promise((resolve, reject) => {
      https
        .get(
          `https://redefine-version.ohevan.com/api/info`,
          { timeout: timeout },
          (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
              return reject(
                new Error(
                  `Failed to load page, status code: ${response.statusCode}`,
                ),
              );
            }
            let data = "";
            response.on("data", (chunk) => {
              data += chunk;
            });
            response.on("end", () => {
              try {
                const jsonData = JSON.parse(data);
                logInfo(jsonData);
                checkVersionAndCDNAvailability(jsonData);
                resolve();
              } catch (error) {
                logFailedInfo();
                reject(new Error(`JSON parse failed: ${error.message}`));
              }
            });
          },
        )
        .on("error", (error) => {
          reject(error);
        });
    });
  }

  try {
    await fetchRedefineInfo();
  } catch (error) {
    hexo.log.warn(`Check latest version failed: ${error}`);
    hexo.locals.set(`cdnTestStatus_bootcdn`, 404);
    hexo.locals.set(`cdnTestStatus_staticfile`, 404);
  }
});

function logInfo(data) {

}

function logFailedInfo() {

}

function checkVersionAndCDNAvailability(data) {
  if (data.npmVersion > version) {
    hexo.log.warn(
      `\x1b[33m%s\x1b[0m`,
      `Redefine v${version} is outdated, please update to v${data.npmVersion}!`,
    );
  }

  if (data.staticfileCDN) {
    hexo.log.info(`\x1b[32m%s\x1b[0m`, `CDN available: StaticfileCDN`);
    hexo.locals.set(`cdnTestStatus_staticfile`, 200);
  } else {
    hexo.log.warn(`\x1b[31m%s\x1b[0m`, `StaticfileCDN is unavailable yet.`);
    hexo.locals.set(`cdnTestStatus_staticfile`, 404);
  }

  if (data.bootCDN) {
    hexo.log.info(`\x1b[32m%s\x1b[0m`, `CDN available: BootCDN`);
    hexo.locals.set(`cdnTestStatus_bootcdn`, 200);
  } else {
    hexo.log.warn(`\x1b[31m%s\x1b[0m`, `BootCDN CDN is unavailable yet.`);
    hexo.locals.set(`cdnTestStatus_bootcdn`, 404);
  }
}
