/**
 * 该脚本的主要作用，将 source 目录下的所有文件，包括子文件，文件内容中包含 "android-transfer.techidaily.com"字符串 替换为 "world"， 然后重新保存
 * 
 * 
 */

const fs = require('fs');
const path = require('path');

// 子域名，克隆后，可以修改为自己的子域名
const subDomainName = 'android-transfer'; 

function replaceFileContent(filePath) {
  const ext = path.extname(filePath);
  const excludeList = ['.jpg', '.jpeg', '.png'];
  if (excludeList.includes(ext)) {
    return;
  }


  const content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content.replaceAll(`android-transfer.techidaily.com`, `${subDomainName}.techidaily.com`);
  newContent = newContent.replaceAll(`site-android-transfer.git`, `site-${subDomainName}.git`);

  fs.writeFileSync(filePath, newContent);
}

function replaceFile(filePath) {
  const stat = fs.statSync(filePath)
  if (stat.isDirectory()) {
    const files = fs.readdirSync(filePath);
    files.forEach(file => {
      replaceFile(path.join(filePath, file));
    });
  } else {
    replaceFileContent(filePath);
  }
}

// replace some files
replaceFile(path.join(__dirname, 'source'));
replaceFile(path.join(__dirname, '_config.yml'));
replaceFile(path.join(__dirname, '_config.redefine.yml'));