/**
 * 使用 https://www.bing.com/indexnow#implementation，提交URL到Bing
 * 使用https://www.bing.com/webmasters/url-submission-api#APIs，批量提交url
 *
 */

const fs = require("fs")
const path = require("path")
const https = require("https")
const { HttpsProxyAgent } = require('https-proxy-agent');

// Step1: 从sitemap.txt中获取url列表
const sitemap = fs.readFileSync(
  path.join(__dirname, ".deploy_git", "sitemap.txt"),
  "utf-8"
)
const urls = sitemap.split("\n").filter(Boolean)

console.log("发现的urls数量:%d", urls.length)

const proxy = 'http://127.0.0.1:7890'; // 替换为你的代理服务器地址
const agent = new HttpsProxyAgent(proxy);

function ping(url) {
    const options = {
        hostname: 'google.com',
        port: 443,
        path: `/ping?sitemap=${url}`,
        method: 'GET',
        agent: agent
    };

    const req = https.request(options, (res) => {
        // 处理响应
        let data = ""

        // A chunk of data has been received.
        res.on("data", (chunk) => {
            data += chunk
        })

        // The whole response has been received. Print out the result.
        res.on("end", () => {
            console.log(data)
        })        
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.end();
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function processQueue(queue) {
  for (const item of queue) {
    await sleep(5000)
    ping(item)
  }
}

processQueue(urls)
