---
title: In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Sony
date: 2024-08-02T08:34:57.053Z
updated: 2024-08-03T08:34:57.053Z
tags: 
  - unlock
  - bypass android frp
categories:
  - android
description: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Sony
excerpt: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Sony
keywords: bypass android device frp,Sony Xperia 5 V frp bypass android,how to bypass frp tool,how to bypass frp,bypass frp,Sony Xperia 5 V easy guide how to bypass frp android,Sony Xperia 5 V addrom bypass,adb format tool,Sony Xperia 5 V how to bypass frp,frp bypass android device,bypass android frp,pro frp bypass,best frp bypass,pangu frp bypass review,guid for frp bypass,Sony Xperia 5 V android frp bypass,Sony Xperia 5 V bypass frp,frp hijacker download,Sony Xperia 5 V pro frp bypass,frp bypass guide,frp bypass quickly,android device frp bypass,gsm flasher tool,remove frp via adb fastboot,Sony Xperia 5 V pangu frp bypass review,Sony Xperia 5 V bypass android frp,frp bypass android,addrom bypass,Sony Xperia 5 V remove frp via adb fastboot,Sony Xperia 5 V how to bypass frp tool,easy guide how to bypass frp android
thumbnail: https://thmb.techidaily.com/e694a122580d35baa4ea409639e0ea6a835876b9d9b87e9c40850a4f81b5f21f.jpg
---

## A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Sony Xperia 5 V

Factory Reset Protection is one of the security measures available on Android 5.1 and later devices to prevent intruders' unauthorized factory resetting of the Sony Xperia 5 V device. Among the several ways to fix this issue and remove the lock, one is ADB and Fastboot commands. So, if you are aware of using Android Debug Bridge, the below content will help you understand how it can be used to remove the FRP lock.

**You can watch the video below to bypass FRP lock without hassle!**

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/WXFUGH1uMcI"></iframe>

## Part 1: Quick Overview of ADB and Fastboot Commands

### 1\. What are ADB and Fastboot?

Standing for Android Debug Bridge, ADB and Fastboots are the methods through which communication with an Android device can be done through a computer. Under this method, the commands and the actions that are sent from the system are performed on your Android device.

Several issues can be resolved, and multiple functions can be performed using the **ADB format tool** and Fastboots, and this also includes removing the FRP lock on your Android device. To use this method, USB debugging should be enabled on the Sony Xperia 5 V device.

For specific brands of Android phones, specific utility tools are available like the **Vivo ADB format tool** and the **Samsung ADB format tool**, which are used explicitly for Vivo and Samsung phones, respectively.

### 2\. How Do ADB and Fastboot Bypass FRP?

Using the versatile ADB command-line tool and Fastboots, the Google FRP lock can be removed using several commands depending on the OS version. This is a client-server program that includes a client who sends the commands, a daemon used to run the commands on the Sony Xperia 5 V device, and a server that facilitates communication between the client and the daemon.

ADB comes included in the Android SDK Platform-Tools package, and this can be downloaded using the SDK manager.

### 3\. What Are the Android Versions that ADB and Fastboot Command Support?

The Android versions on which ADB and Fastboot commands can be used are as follows:

- `_Android 5 – Lollipop_`
- `_Android 6- Marshmellow_`
- `_Android 7 – Nougat_`
- `_Android 8- Oreo_`
- `_Android 9- Pie_`
- `_Android 10 – Q (expected to work though not tested as yet)_`

## Part 2: How to Set Up ADB and Fastboot Commands to Remove FRP Lock on Android?

To remove FRP lock using ADB, you first need to install and set up ADB and then remove them using the command. The steps for the same are enlisted below.

### Steps to remove FRP using ADB

![adb install](https://images.wondershare.com/drfone/article/2022/04/adb-install.jpg)

- **Step 1.** Firstly, download the ADB installed setup file and then extract the files from the toolkit on your system in a folder.
- **Step 2.** Next, you need to run adb.setup.exe and then type Y for installing the drivers for ADB and Fastboot.
- **Step 3.** Again, enter Y for installing the drivers and when done successfully, the command window will close.
- **Step 4.** Next, power on your Android device and connect it to your PC using a USB cable. Here also ensure that USB debugging mode is enabled on your Android device.
- **Step 5.** Next, hold down the Shift key and then right-click at any place blank in the ADB folder, and then choose the Open command window here option.
- **Step 6.** Now to remove the FRP you need to enter the following commands at the command prompt one by one where enter needs to be clicked after every line.

- `_Adb shell am start -n com.google.android.gsf.login/_`
- `_adb shell am start -n com.google.android.gsf.login.LoginActivity_`
- `_adb shell content insert –uri content://settings/secure –bind name:s:user_setup_complete –bind value:s:1_`

- **Step 7.** The above commands are for Samsung devices. If you want to remove the FRP on other brands, enter the following commands:

- `_Adb shell content insert –uri content://settings/secure –bind_`
- `_name:s:user_setup_complete –bind value:s:1_`

<!-- affiliate ads begin -->
<a href="https://homestyler.sjv.io/c/5597632/2044747/22993" target="_top" id="2044747"><img src="//a.impactradius-go.com/display-ad/22993-2044747" border="0" alt="" width="300" height="250"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/2044747/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
![adb frp command](https://images.wondershare.com/drfone/article/2022/04/adb-frp-command.jpg)

After the execution of the commands, the FRP lock will be removed from your Android device.

<!-- affiliate ads begin -->

<!-- affiliate ads end -->
### Steps to remove FRP using Fastboot

- **Step 1.** Put the Android device into the bootloader or fastboot mode. (depending on the model and brand of your Android device, the process of entering into the fastboot will differ).
- **Step 2.** Connect your phone to your PC using a USB cable.
- **Step 3.** Next, depending on the system, enter the following command in the CMD window:

- `_Lenovo FRP command_`
- `_fastboot erase config_`
- `_fastboot reboot_`
- `_XIAOMI FRP command_`
- `_fastboot -w_`
- `_MICROMAX YU YUPHORIA FRP_`
- `_Fastboot -i 0x2a96 erase configFastboot -i 0x2a96 reboot_`
- `_DEEP/HTC/Other Brands FRP_`
- `_fastboot erase configfastboot reboot_`

## Part 3: Limitations of Using ADB and Fastboot Command Method

The ADB and Fastboots command is a workable solution for removing the FRP lock on your Android device, the drawback is that the method is quite complicated and requires thorough technical know-how of ADB and its working. There are several limitations associated with this method as enlisted below.

- **Requires technical know-how**

To remove FRP using the ADB command you need to have a thorough knowledge of using the tool. The tool has a deep learning curve which makes this method little for the majority of the users.

- **Might not unlock the phone**

You can try the ADB method for removing the FRP lock but there is no guarantee that the results will be positive and your device will be unlocked.

- **Issues with the drivers**

Several times while using this method, you might encounter driver issues when your device is not detected as proper drivers are not installed.

- **Unexpected issues and errors**

ADB is a command-based method, and thus it is important that the commands are entered right. If there is a slight error in the typing of the command, it might lead to major issues and can even be the Sony Xperia 5 V device damaged.

- **The process is not user-friendly**

ADB is a technical process aimed toward the geeks, and thus the overall process is not user-friendly and complicated.

## Part 4: The Best ADB Alternative to Bypass FRP Lock on Android Phones

Considering the several limitations of the ADB and Fastboot command method, the need for a simple, user-friendly, and workable solution for removing FRP lock on Android devices arises. One of the best software here that we recommend is [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) which helps in removing and bypassing many Android phone screen locks including the one appearing due to FRP lock.



### Dr.Fone - Screen Unlock (Android)

Remove Google FRP on Samsung without PIN code or Google accounts.

- Pattern, PIN, password, fingerprints & face screen lock can all be unlocked.
- Bypass Google FRP on Samsung without pin code or Google accounts.
- No tech knowledge asked, everybody can handle it.
- Work for Samsung, Xiaomi, Redmi, OPPO, etc.

**4,005,551** people have downloaded it

The process of using the software is user-friendly and thus can also be used by non-techy users.

**Steps for removing FRP lock on Android using Dr.Fone Screen Unlock**

- **Step 1.** Launch the installed software and choose the **Screen Unlock** option from the main interface. Choose **Android** and then select the **Remove Google FRP Lock** option.

<!-- affiliate ads begin -->
<a href="https://twopages.pxf.io/c/5597632/2016067/18544" target="_top" id="2016067"><img src="//a.impactradius-go.com/display-ad/18544-2016067" border="0" alt="" width="1020" height="380"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/2016067/18544" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
![drfone screen unlock homepage](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

- **Step 2.** Select the model brans from the options shown on the interface, and then connect your phone to your PC using a USB cable. The connected device details will appear on the interface.

![drfone android6/9/10 phone information confirmation](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-1.png)

- **Step 3.** Follow the next steps as they appear. Once the FRP lock is successfully removed, the prompt window will show its completion. Click Done if you have successfully executed the process.

![screen unlock bypass google frp](https://images.wondershare.com/drfone/guide/remove-google-frp-unknown-os-7.png)

The above is the brief steps for the process. You can check the [bypass Samsung FRP lock guide](https://drfone.wondershare.com/guide/google-frp-bypass.html) in detail.


## Conclusion

If you are well versed with the commands of ADB and Fastboots you can go ahead and use the **ADB bypass FRP tool** for removing the FRP lock but if this command line method seems complicated for you, Dr.Fone Screen Unlock is the best tool to use.

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="1223367746"></ins>



## A Quick Guide to Sony Xperia 5 V FRP Bypass Instantly

FRP locks are a security feature that prevents unauthorized access after a factory reset. While these locks protect user data, they can become a hindrance when trying to regain access to the Sony Xperia 5 V device. Likewise, bypassing FRP locks provides users with the flexibility to overcome these restrictions.

In this article, we'll learn about the **Sony Xperia 5 V FRP bypass** process. We will also list out the things that you must keep in mind before trying this process. Read this guide till the end to find the best **Sony Xperia 5 V FRP unlock tool**.

![Sony Xperia 5 V FRP unlock tool](https://images.wondershare.com/drfone/article/2024/01/quick-guide-to-tecno-bd4a-frp-bypass-1.jpg)


<!-- affiliate ads begin -->
<a href="https://shop.mondly.com/affiliate.php?ACCOUNT=ATISTUDI&AFFILIATE=108875&PATH=https%3A%2F%2Fwww.mondly.com%3FAFFILIATE%3D108875%26RESOURCE%3D%2BGeneral%2B970x90%2B"><img src="https://secure.avangate.com/images/merchant/69c418c33ec2e1a4267fa9bb77fa1428/general-970x90.gif" border="0"></a>
<!-- affiliate ads end -->
## Part 1. Things To Keep in Mind Before Bypassing Sony Xperia 5 V

Bypassing the security measures on a Sony Xperia 5 V should be approached with caution. There are many considerations that users should keep in mind before **the Sony Xperia 5 V FRP bypass**. Below, we have listed some considerations to help users avoid any hassle:

### 1\. Legal Implications

Bypassing device security could potentially breach the terms of service and warranty agreements. Moreover, it may even be illegal in certain jurisdictions. It is recommended to avoid bypassing unless users are certain it is legally permissible in their region.

### 2\. Data Loss

When resetting the Sony Xperia 5 V device, bypassing security measures often comes into play. This sometimes results in the loss of stored data. Prioritize data backup before attempting **Sony Xperia 5 V FRP bypass**. If data preservation is a top priority, exploring alternative solutions is preferable.

### 3\. Security Risks

Your device might be exposed to potential vulnerabilities due to security [<u>FRP bypass</u>](https://drfone.wondershare.com/google-frp-unlock/huawei-frp-tools.html). This makes it more susceptible to unauthorized access. Users should prioritize safeguarding their data and personal information.

### 4\. Manufacturer Support

**Sony Xperia 5 V FRP bypass** can void the manufacturer's warranty and limit future support options. You should know that bypassing security could result in losing access to updates. It is advisable to explore other solutions before considering bypassing.

### 5\. Technical Skill Requirements

Technical knowledge and skills are highly demanded when bypassing FRP locks. Only users possessing advanced technical skills should attempt a bypass. For those lacking expertise, seeking professional assistance is advisable to avoid consequences.

### 6\. Device Functionality

Bypassing security measures may impact the Sony Xperia 5 V device's normal functionality. Users should be prepared for potential device performance or functionality issues post-bypass.

## Part 2. Bypass FRP Lock Sony Xperia 5 V Using SIM Card Method

Using the SIM card process for **Sony Xperia 5 V FRP bypass** is a viable option for many users. Still, proceeding with caution and adhering to the specific instructions is necessary. Users only need to insert a PUK-enabled SIM card and set up their device. Consider using the steps guided below to carefully bypass your Sony Xperia 5 V without any risks:

- **Step 1.** Power on your Sony Xperia 5 V device, set it up, and connect it to the Wi-Fi network. Agree to any terms or policies and wait until your phone gets ready. When you reach the verification screen, tap the "Use my Google Account Instead" option.

![choose to use google account](https://images.wondershare.com/drfone/article/2024/01/quick-guide-to-tecno-bd4a-frp-bypass-2.jpg)

- **Step 2.** Once you are required to sign in to your Google account, return to the screen where you have to select the language. Then, insert the SIM card into your phone and ensure you have saved a contact. To enter the SIM PIN, tap on the "Emergency" option. Next, tap "Emergency Information" and click the "Edit" icon at the top-right corner.

![proceed to emergency option](https://images.wondershare.com/drfone/article/2024/01/quick-guide-to-tecno-bd4a-frp-bypass-3.jpg)

- **Step 3.** Enter the PIN for the SIM card to proceed further. Under the "Emergency Information" section, tap on the "Add Contact" option and access it. Dial the call to that number, and once the call timer appears, choose the "Contacts" option on the dialer screen.

![access the saved contact](https://images.wondershare.com/drfone/article/2024/01/quick-guide-to-tecno-bd4a-frp-bypass-4.jpg)

- **Step 4.** Tap on "three-dots" at the top-right corner and select the "Share" option followed by "Send as text." On the following screen, send via XShare MI and allow the necessary permission. Download Google Account Manager and Account Login/FRP Bypass APKs on your other device. Also, download the [<u>Activity Launcher</u>](https://play.google.com/store/apps/details?id=de.szalkowski.activitylauncher&hl=en&gl=US) app from the Play Store.

![share contact via xshare mini](https://images.wondershare.com/drfone/article/2024/01/quick-guide-to-tecno-bd4a-frp-bypass-5.jpg)

- **Step 5.** Set up XShare on another device and allow all the permissions. Choose the "Receive" option to receive the contact from your Sony Xperia 5 V device via a QR code scan. Afterward, disconnect and exit the current connection. On the main screen, tap the "Receive" option on your Sony Xperia 5 V and scan the QR code using the Sony Xperia 5 V device. You are required to share all three of the apps that you just downloaded.

![receive frp apps](https://images.wondershare.com/drfone/article/2024/01/quick-guide-to-tecno-bd4a-frp-bypass-6.jpg)

- **Step 6.** As soon as the apps are received, install them and "Open" the Account Login/FRP Bypass tool. When it requires a password for sign-in, hit the "three-dots” and choose the "Browse Sign-In" option. Provide your Email and Password to sign in to your Google account.

![browse sign in with google account](https://images.wondershare.com/drfone/article/2024/01/quick-guide-to-tecno-bd4a-frp-bypass-7.jpg)

- **Step 7.** After Google signs in, "Open" the Activity Launcher app and wait until the package is loaded. From the appearing menu, select "Android Setup" and then choose the following option:

Android Setup (com.google.android.setupwizard/.predeferred.PreDeferredSetupWizardActivity)

Once setup ends, the **Sony Xperia 5 V FRP bypass Android 11** process will be completed successfully.

<!-- affiliate ads begin -->
<a href="https://lightailing.sjv.io/c/5597632/1638364/17190" target="_top" id="1638364"><img src="//a.impactradius-go.com/display-ad/17190-1638364" border="0" alt="" width="1280" height="720"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/1638364/17190" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
![start setting up android](https://images.wondershare.com/drfone/article/2024/01/quick-guide-to-tecno-bd4a-frp-bypass-8.jpg)

## Part 3. How to Easy Sony Xperia 5 V FRP Bypass With Wondershare Dr.Fone

Facing FRP lock on your Sony Xperia 5 V can be daunting, especially when you need to access your phone urgently. In this case, using the above-discussed SIM card method can be time-consuming. Users looking for an alternative and quick option can use [<u>Wondershare Dr.Fone – Screen Unlock (Android)</u>](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/). This tool can help bypass FRP lock on your Android without requiring any PIN or Google account.

Moreover, users don't need technical knowledge as this tool offers one-click removal. Dr.Fone also adopts a user-friendly interface, ensuring accessibility for every user. Apart from **Sony Xperia 5 V FRP bypass Android 11**, this tool also unlocks Samsung and LG devices without data loss.

### Salient Features of Wondershare Dr.Fone

1. Fone supports over 2000 Android devices across 18+ brands for screen unlock.
2. This tool extends the opportunity to recover data from Android devices with broken screens.
3. When it comes to recovering device data, Dr.Fone offers a dedicated Data Recovery tool to recover all important lost files.

### Steps To Perform Sony Xperia 5 V FRP Bypass Using Wondershare Dr.Fone

By bypassing the FRP lock, Dr.Fone allows users to gain access to their devices promptly. To start learning about using this tool, follow the steps below for **Sony Xperia 5 V FRP bypass**:

**Here is a video for you to learn how to bypass FRP:**

<iframe width="100%" height="450" src="https://www.youtube.com/embed/-I35GTXostw" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

- Step 1. Connect the Sony Xperia 5 V device and Navigate to the Toolbox

Connect your Sony device to your computer and launch Wondershare Dr.Fone. Within the toolkit window, navigate to "Toolbox" and select "Screen Unlock." This will open a new window; choose the "Android" option to access the FRP Lock function.

![proceed with android device](https://images.wondershare.com/drfone/guide/select-your-mobile-device-to-unlock.png)


- Step 2. Choose the Required Device and Android Version

Afterward, click “Remove Google FRP Lock” and select your appropriate device brand from the options. This will trigger Dr.Fone to download the relevant driver for the selected brand.

![choose to remove google frp lock](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-2.png)

- Step 3. Access Emergency Call and Enable USB Debugging

After downloading the necessary drivers, power off your smartphone and connect it to the computer. Press the "Volume Up" and "Volume Down" buttons simultaneously for almost 3 seconds as it connects. This initiates the FRP unlocking process. If everything went smoothly with the unlocking, click "Done."

![successfully bypass Sony frp lock](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-5.png)

**Read More About Tecno:**

[<u>Sony Master Reset Code: The Ultimate Guide to Restoring Factory Settings</u>](https://drfone.wondershare.com/unlock/tecno-hard-reset.html)

[<u>Ultimate Guide on Sony Spark FRP Bypass</u>](https://drfone.wondershare.com/android-bypass/tecno-k7-frp-bypass.html)

[<u>How can I Unlock Sony Network by Myself?</u>](https://drfone.wondershare.com/sim-unlock/unlock-tecno-network.html)

## Conclusion

We can conclude that bypassing the FRP lock can be difficult if one does not follow the proper steps. This guide has provided users with two of the best **Sony Xperia 5 V FRP bypass** methods. Overall, Wondershare Dr.Fone offers the most advanced methods to let users bypass FRP locks easily. Its ability to support a wide range of Android devices makes it more recommended.

_**Tips:** Are you searching for a powerful FRP Bypass tool? No worries as [Dr.Fone](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) is here to help you. Download it and start a seamless unlock experience!_

## How to Bypass Google FRP Lock on Sony Xperia 5 V Devices

Technological advancements in the IT and telecommunication industry simplify your tasks and provide security against cyber malpractices. The advantages are numerous and appealing, but there are downsides too. One such inconvenience is caused by Google FRP lock in Sony Xperia 5 V smartphones. The facility keeps your device information safe against unauthorized access. However, users often report issues like lockouts not being removed due to several causes. Such scenarios raise the demand for **Sony Xperia 5 V Nord FRP bypass** solutions for seamless device access.

![google frp bypass in oneplus phones](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-01.jpg)

## Part 1. What Is Google FRP and How Does It Work?

Google Factory Reset Protection (FRP) is an in-built security function in Android 5.1 and later versions. The feature protects these devices against intentional data loss on unauthorized access. The utility does not allow a factory reset of your device in case it is lost or stolen. Your data is hence, safe from unwanted mishandling. The feature also protects the Sony Xperia 5 V device's data encryptions and screen locks. The functionality gets enabled when you register a Google account on your Android device. As is obvious, the feature gets disabled when the Google account is removed before beginning the Factory Data Reset process.

If your device is under untrusted access and the FRP lock is enabled, the latter will prevent the factory reset of your phone. It is because; the active FRP lock requires entering the Google account credentials registered with the Sony Xperia 5 V device. Therefore, unwanted users will not be possible to factory reset the Sony Xperia 5 V phone. However, there may be instances when you need to factory reset your FRP-enabled device to its default settings. Ensure that the registered Google account credentials are available to you under such circumstances.

## Part 2. How to Remove Google FRP Lock on Any Sony Xperia 5 V Phone?

To remove the Google FRP lock on your Sony Xperia 5 V device, you can follow any of the methods discussed below:

### 1\. Bypass Google FRP Lock on Your Sony Xperia 5 V Phone

- Switch on the Wi-Fi network of the Sony Xperia 5 V phone and head to the 'Hello' screen.
- Take the following path:

_**Emergency Call> Emergency Rescue> Add Contact**_

![emergency rescue interface of oneplus phones](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-02.jpg)

- When the permission prompt pops up, click on 'Deny' and tap "Go to Settings".
- Hit the 'Permission' tab and tap the 'Search' button.
- Enter 'Settings' in the search field, choose the 'Settings App Info' option, and tap the 'Open' button.
- Take the path given below to enable the system shortcuts:

_**System> Accessibility> Accessibility Menu> Toggle the Button to Turn it On> Allow> Got it**_

- Head to the "Settings" app and tap "Apps and Notifications". Next, click on "See All Apps".
- Find and disable the 'Android Setup' and 'Google Play Service' within the application list.

![disabling android setup and google play service](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-03.jpg)

- Navigate back to the 'Hello' screen to completely disable the setup by taking the following path:

_**Start> Agree> Agree> Skip> Don't Copy> Ok> Agree**_

- Skip the 'Set Screen Lock' task for completing the setup.

### 2\. Using FRP Bypass APK

This is a quick and smart way to address the FRP lock removal issue within several minutes. Here's what you need to do:

- Download the FRP Bypass APK to a PC or some other smartphone from the latter's official website, followed by copying it into a pen drive.
- Use an OTG to connect the pen drive to the FRP-locked device.
- Head to the destination folder of the downloaded APK in the "File Manager" application.
- Install the APK in the FRP-locked phone by allowing the app permissions.
- Navigate to 'Settings' and enable the 'Install from Unknown Source' option.
- Reinstall and open the APK.
- The 'Settings' menu will pop up. Head to the "Backup and Reset" option.
- Click on 'Factory Data Reset', followed by "Erase Everything".
- Tap 'Confirm' to erase all the Sony Xperia 5 V device data.
- Register with a new Google account to use the phone.

![google frp lock bypass using apk](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-04.jpg)

### 3\. Deactivate FRP in Your Sony Xperia 5 V Phone

Removing the Google FRP lock using a computer is impossible in some instances. Deleting your registered Gmail account from the Sony Xperia 5 V device can help you in these circumstances. The downside of this method is that your device's data will lose protection from Google. Here's how you can delete your Gmail account from the FRP-locked phone:

- Launch the "Settings" app on your Sony Xperia 5 V device.

![launching the 'settings' application on oneplus phone](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-05.jpg)

- In the app's opening interface, click on the 'Accounts' tab to open the section.

![opening the 'accounts' tab in oneplus phone](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-06.jpg)

- A list of all the accounts linked to your Sony Xperia 5 V device will be displayed. Tap on the desired Gmail account to unlink it from your phone.

![google account selection for quick removal](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-07.jpg)

- The device data linked with the selected account will appear on the screen. Click on 'Remove Account' to proceed further.

![removing the selected google account from the phone](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-08.jpg)

- A confirmation prompt will pop up to ensure a willful deletion of the account from the Sony Xperia 5 V device. Tap on 'Remove Account' to confirm the action. This will cause all data linked with the account to get deleted from the phone.

![confirmation of the google account removal](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-09.jpg)

## FAQs about Google Lock Bypass

### 1\. Does Factory Reset Remove Google Account?

There may be instances when you require wiping out smartphone data to keep it safe against unauthorized access. Maybe you wish to pass on your device to another user or migrate to a different device. It is important to make sure that all accounts linked to the phone are deleted from the Sony Xperia 5 V device. It should be understood here that a factory reset will not remove Google or other accounts from the Sony Xperia 5 V device. The process restores the default factory settings of the phone that you got at the first purchase.

### 2\. How to Enable Factory Reset Protection?

Enabling the Factory Reset protection feature is a smart way to protect the important data on your phone. However, issues of unethical access in cases of theft or loss are quite prominent. You can enable the FRP functionality by taking the following steps:

- When using a new device, sign in to the phone with your Google account. You can use an existing account or create a new one.
- Set a pattern or password screen lock on your device. It is not advisable to use swipe unlock or leave the phone unlocked at all. If you forget the pattern or password, Google credentials can be used to unlock the Sony Xperia 5 V device.

These steps will cause the automatic configuration of the Factory Reset Protection feature. The invader will be prompted to enter the registered Google account credentials on every attempt to access the phone.

## Conclusion

Developments in electronic technology have brought a series of benefits, covering easy access, security, and everything in between. One such feature is the Google Factory Reset Protection to protect your device data against untrusted access. The feature is undoubtedly credible, but there may be situations that require bypassing the FRP lock. For affordable solutions to address the concern on Sony Xperia 5 V phones, pick the one that corresponds to your specific situation.



### Dr.Fone - Screen Unlock (Android)

Unlock Your Sony Xperia 5 V Phone in a Flash

- Remove 5 screen lock types: pattern, PIN, password, ingerprints & Face ID.
- Bypass Android FRP lock without a PIN or Google account.![New icon](https://images.wondershare.com/drfone/others/new_23.png)
- Unlock mainstream Android brands like Samsung, Huawei, LG, Xiaomi, etc.
- No tech knowledge required, Simple, click-through, process.

**3,981,454** people have downloaded it

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>








<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://youtube-zero.techidaily.com/024-approved-the-ultimate-guide-to-picking-powerful-yt-thumbnails/"><u>[New] 2024 Approved  The Ultimate Guide to Picking Powerful YT Thumbnails</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/new-m1-chip-unmasked-apples-engineering-feat/"><u>[New] M1 Chip Unmasked  Apple's Engineering Feat</u></a></li>
<li><a href="https://instagram-video-files.techidaily.com/updated-how-to-shoot-igtv-videos-with-smartphonedlsr-cameras-for-2024/"><u>[Updated] How to Shoot IGTV Videos With Smartphone/DLSR Cameras for 2024</u></a></li>
<li><a href="https://extra-support.techidaily.com/updated-masterpiece-tools-filmoras-loved-9-edits-unraveled/"><u>[Updated] Masterpiece Tools  Filmora's Loved 9 Edits Unraveled</u></a></li>
<li><a href="https://fox-direct.techidaily.com/updated-one-minute-color-concealment/"><u>[Updated] One-Minute Color Concealment</u></a></li>
<li><a href="https://on-screen-recording.techidaily.com/updated-ranking-the-finest-five-screen-snipers-in-windows-for-2024/"><u>[Updated] Ranking the Finest Five Screen Snipers in Windows for 2024</u></a></li>
<li><a href="https://instagram-video-files.techidaily.com/updated-utilizing-instagram-filters-to-elevate-your-photos/"><u>[Updated] Utilizing Instagram Filters to Elevate Your Photos</u></a></li>
<li><a href="https://instagram-video-files.techidaily.com/2024-approved-from-capture-to-share-a-quick-guide-to-instagram-video-uploads-on-desktop/"><u>2024 Approved  From Capture to Share  A Quick Guide to Instagram Video Uploads on Desktop</u></a></li>
<li><a href="https://some-knowledge.techidaily.com/2024-approved-in-depth-assessment-gopro-silver-hero4-sliver/"><u>2024 Approved  In-Depth Assessment  GoPro Silver Hero4 Sliver</u></a></li>
<li><a href="https://android-frp.techidaily.com/a-quick-guide-to-oppo-reno-8t-5g-frp-bypass-instantly-by-drfone-android/"><u>A Quick Guide to Oppo Reno 8T 5G FRP Bypass Instantly</u></a></li>
<li><a href="https://android-frp.techidaily.com/a-quick-guide-to-realme-narzo-60-5g-frp-bypass-instantly-by-drfone-android/"><u>A Quick Guide to Realme Narzo 60 5G FRP Bypass Instantly</u></a></li>
<li><a href="https://on-screen-recording.techidaily.com/delving-into-recmeisters-capabilities-for-quality-video-capture/"><u>Delving Into Recmeister’s Capabilities for Quality Video Capture</u></a></li>
<li><a href="https://android-frp.techidaily.com/hassle-free-ways-to-remove-frp-lock-on-samsung-galaxy-s21-fe-5g-2023withwithout-a-pc-by-drfone-android/"><u>Hassle-Free Ways to Remove FRP Lock on Samsung Galaxy S21 FE 5G (2023)with/without a PC</u></a></li>
<li><a href="https://android-frp.techidaily.com/how-to-bypass-frp-from-oppo-reno-10-pro-5g-by-drfone-android/"><u>How to Bypass FRP from Oppo Reno 10 Pro 5G?</u></a></li>
<li><a href="https://android-frp.techidaily.com/how-to-bypass-frp-from-realme-narzo-60-pro-5g-by-drfone-android/"><u>How to Bypass FRP from Realme Narzo 60 Pro 5G?</u></a></li>
<li><a href="https://fake-location.techidaily.com/how-to-share-location-in-messenger-on-apple-iphone-xs-max-drfone-by-drfone-virtual-ios/"><u>How to Share Location in Messenger On Apple iPhone XS Max? | Dr.fone</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-a-quick-guide-to-motorola-razr-40-ultra-frp-bypass-instantly-by-drfone-android/"><u>In 2024, A Quick Guide to Motorola Razr 40 Ultra FRP Bypass Instantly</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-from-your-oppo-a56s-5g-by-drfone-android/"><u>In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Oppo A56s 5G</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-about-nokia-g42-5g-frp-bypass-by-drfone-android/"><u>In 2024, About Nokia G42 5G FRP Bypass</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-about-realme-gt-3-frp-bypass-by-drfone-android/"><u>In 2024, About Realme GT 3 FRP Bypass</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-frp-hijacker-by-hagard-download-and-bypass-your-lava-blaze-2-frp-locks-by-drfone-android/"><u>In 2024, FRP Hijacker by Hagard Download and Bypass your Lava Blaze 2 FRP Locks</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-frp-hijacker-by-hagard-download-and-bypass-your-oneplus-ace-3-frp-locks-by-drfone-android/"><u>In 2024, FRP Hijacker by Hagard Download and Bypass your OnePlus Ace 3 FRP Locks</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-how-can-we-bypass-motorola-razr-40-ultra-frp-by-drfone-android/"><u>In 2024, How Can We Bypass Motorola Razr 40 Ultra FRP?</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-how-to-bypass-frp-from-nokia-c32-by-drfone-android/"><u>In 2024, How to Bypass FRP from Nokia C32?</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-how-to-bypass-frp-on-motorola-g54-5g-by-drfone-android/"><u>In 2024, How to Bypass FRP on Motorola G54 5G?</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-how-to-bypass-google-frp-lock-on-poco-c50-devices-by-drfone-android/"><u>In 2024, How to Bypass Google FRP Lock on Poco C50 Devices</u></a></li>
<li><a href="https://ios-location-track.techidaily.com/in-2024-how-to-intercept-text-messages-on-apple-iphone-14-pro-drfone-by-drfone-virtual-ios/"><u>In 2024, How to Intercept Text Messages on Apple iPhone 14 Pro | Dr.fone</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/in-2024-the-best-android-sim-unlock-code-generators-unlock-your-oppo-a1x-5g-phone-hassle-free-by-drfone-android/"><u>In 2024, The Best Android SIM Unlock Code Generators Unlock Your Oppo A1x 5G Phone Hassle-Free</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-the-complete-guide-to-htc-u23-frp-bypass-everything-you-need-to-know-by-drfone-android/"><u>In 2024, The Complete Guide to HTC U23 FRP Bypass Everything You Need to Know</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-the-complete-guide-to-samsung-galaxy-a15-5g-frp-bypass-everything-you-need-to-know-by-drfone-android/"><u>In 2024, The Complete Guide to Samsung Galaxy A15 5G FRP Bypass Everything You Need to Know</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-the-updated-method-to-bypass-realme-narzo-60x-5g-frp-by-drfone-android/"><u>In 2024, The Updated Method to Bypass Realme Narzo 60x 5G FRP</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-animation-styles-pack/"><u>In 2024, Ultimate Animation Styles Pack</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/latest-guide-how-to-bypass-tecno-spark-10-4g-frp-without-computer-by-drfone-android/"><u>Latest Guide How To Bypass Tecno Spark 10 4G FRP Without Computer</u></a></li>
<li><a href="https://android-frp.techidaily.com/lava-storm-5g-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>Lava Storm 5G ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://fox-info.techidaily.com/mastering-the-art-of-vector-imagery-best-10-sources/"><u>Mastering the Art of Vector Imagery  Best 10 Sources</u></a></li>
<li><a href="https://android-frp.techidaily.com/the-updated-method-to-bypass-oppo-f25-pro-5g-frp-by-drfone-android/"><u>The Updated Method to Bypass Oppo F25 Pro 5G FRP</u></a></li>
<li><a href="https://techidaily.com/undelete-lost-messages-from-oppo-find-x7-by-fonelab-android-recover-messages/"><u>Undelete lost messages from Oppo Find X7</u></a></li>
</ul></div>
