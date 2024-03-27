const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const replaceList = [
    // Android
    ... [
      ['https://drfone.wondershare.com/android-data-eraser.html', 'https://tools.techidaily.com/wondershare/drfone/android-data-eraser/'],
      ['https://drfone.wondershare.com/unlock-android-screen.html', 'https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/'],
      ['https://drfone.wondershare.com/android-repair.html', 'https://tools.techidaily.com/wondershare/drfone/android-repair/'],
      ['https://drfone.wondershare.com/backup/full-backup-android.html', 'https://tools.techidaily.com/wondershare/drfone/android-backup-and-restore/'],
      ['https://drfone.wondershare.com/backup/android-backup-to-pc.html', 'https://tools.techidaily.com/wondershare/drfone/android-backup-and-restore/'],
      ['https://drfone.wondershare.com/samsung/how-to-wipe-samsung.html', 'https://tools.techidaily.com/wondershare/drfone/android-backup-and-restore/'],
      ['https://drfone.wondershare.com/android-backup-and-restore.html', 'https://tools.techidaily.com/wondershare/drfone/android-backup-and-restore/'],
      ['https://drfone.wondershare.com/guide/android-data-backup-and-restore.html', 'https://tools.techidaily.com/wondershare/drfone/android-backup-and-restore/'],
      ['https://drfone.wondershare.com/reset-android/soft-reset-android.html', 'https://tools.techidaily.com/wondershare/drfone/android-backup-and-restore/'],
    ],
  
    // iOS
    ... [
      ['https://drfone.wondershare.com/whatsapp-transfer.html', 'https://tools.techidaily.com/wondershare/drfone/whatsapp-transfer/'],
      ['https://drfone.wondershare.com/phone-switch.html', 'https://tools.techidaily.com/wondershare/drfone/phone-switch/'],
      ['https://drfone.wondershare.com/ios-system-repair.html', 'https://tools.techidaily.com/wondershare/drfone/ios-system-repair/'],
      ['https://drfone.wondershare.com/ios-data-eraser.html', 'https://tools.techidaily.com/wondershare/drfone/ios-data-eraser/'],
      ['https://drfone.wondershare.com/data-recovery-iphone.html', 'https://tools.techidaily.com/wondershare/drfone/data-recovery-iphone/'],


      ['https://drfone.wondershare.com/guide/ios-data-backup-and-restore.html', 'https://tools.techidaily.com/wondershare/drfone/iphone-backup-and-restore/'],

    ],
  
  
    // 下载
    ['https://download.wondershare.com/drfone_full3360.exe', 'https://tools.techidaily.com/wondershare/drfone/drfone-toolkit/'],
    ['https://download.wondershare.com/drfone_erase_full3370.exe', 'https://tools.techidaily.com/wondershare/drfone/drfone-toolkit/'],
    ['https://download.wondershare.com/drfone_full3361.dmg', 'https://tools.techidaily.com/wondershare/drfone/drfone-toolkit/']
];

const rootDir = path.join(__dirname, '/source/_posts');
const files = fs.readdirSync(rootDir);
files.forEach(file => {
  const filePath = path.join(rootDir, file);
  const stat = fs.statSync(filePath);
  if (stat.isFile() && path.extname(file) === '.md') {
    const content = fs.readFileSync(filePath, 'utf-8');

    let newContent = _.trim(content);

    replaceList.forEach(([oldStr, newStr]) => {
      newContent = newContent.replaceAll(oldStr, newStr);
    });

    fs.writeFileSync(filePath, newContent);
  }
});