---
title: A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Sony
date: 2024-08-02T08:34:14.712Z
updated: 2024-08-03T08:34:14.712Z
tags: 
  - unlock
  - bypass android frp
categories:
  - android
description: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Sony
excerpt: This article describes A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Sony
keywords: Sony Xperia 5 V gsm flasher tool,pangu frp bypass review,Sony Xperia 5 V frp bypass,Sony Xperia 5 V frp bypass guide,Sony Xperia 5 V how to bypass frp,Sony Xperia 5 V frp tools,frp bypass android,Sony Xperia 5 V guide to frp bypass,bypass android frp,Sony Xperia 5 V pangu frp bypass review,about frp bypass,remove frp via adb fastboot,Sony Xperia 5 V bypass frp,pro frp bypass,android frp bypass,addrom bypass,Sony Xperia 5 V bypass android frp,Sony Xperia 5 V frp bypass android,Sony Xperia 5 V how to bypass frp tool,Sony Xperia 5 V about frp bypass,frp bypass guide,Sony Xperia 5 V how to bypass frp without computer,frp bypass easy,best frp bypass,frp bypass quickly,Sony Xperia 5 V easy guide how to bypass frp android,Sony Xperia 5 V frp hijacker download,Sony Xperia 5 V guid for frp bypass
thumbnail: https://thmb.techidaily.com/0c4c453f95a612f76b387ff712305941e5398ae6df028882ef27bbdd6859fdde.jpg
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

![adb frp command](https://images.wondershare.com/drfone/article/2022/04/adb-frp-command.jpg)

After the execution of the commands, the FRP lock will be removed from your Android device.

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

<!-- affiliate ads begin -->
<a href="https://bluettius.sjv.io/c/5597632/2027209/17108" target="_top" id="2027209"><img src="//a.impactradius-go.com/display-ad/17108-2027209" border="0" alt="" width="300" height="250"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/2027209/17108" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
## How to Bypass Google FRP Lock on Sony Xperia 5 V Devices

Technological advancements in the IT and telecommunication industry simplify your tasks and provide security against cyber malpractices. The advantages are numerous and appealing, but there are downsides too. One such inconvenience is caused by Google FRP lock in Sony Xperia 5 V smartphones. The facility keeps your device information safe against unauthorized access. However, users often report issues like lockouts not being removed due to several causes. Such scenarios raise the demand for **Sony Xperia 5 V Nord FRP bypass** solutions for seamless device access.

![google frp bypass in oneplus phones](https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-google-frp-lock-on-any-oneplus-phones-01.jpg)

<!-- affiliate ads begin -->
<a href="https://godlikehost.sjv.io/c/5597632/1920054/21774" target="_top" id="1920054"><img src="//a.impactradius-go.com/display-ad/21774-1920054" border="0" alt="" width="320" height="100"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/1920054/21774" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
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

## 5 Quick Methods to Bypass Sony Xperia 5 V FRP

Google Factory Reset Protection, a.k.a FRP, is developed by Google for all Android phones. It adds an extra layer of security to your phone and the data on it. It is aimed at making it difficult for the illegal holder of your phone to factory reset your phone and remove tracking information. Then why do we need to discuss the Sony Xperia 5 V FRP bypass?

Though the protection is meant for you, sometimes you may forget the password and want your Sony Xperia 5 V FRP removed. Also, if you bought a used phone and the previous user has set up FRP with her password, you need to bypass it.

## Part 1: In what cases does the Sony Xperia 5 V FRP bypass works?

How and why should I bypass Sony Xperia 5 V FRP? Let us look at the valid reasons.

### 1\. Buy a locked second-hand Sony

When you buy a second-hand phone, ideally, the previous user must format and hard reset the Sony phone to remove all locks and password requirements. However, if it doesn't happen, you cannot use some options on your phone and configure security because of FRP. Here, your savior is the option of the Sony Xperia 5 V FRP bypass.

### 2\. Forget Google account ID and password

Even if you have locked your Sony phone yourself, you are stuck when you forget your Google username and password. So, you can only recover your phone using the Sony Xperia 5 V FRP bypass.

### 3\. The person with a Sony from his company no longer works for it

Some employees also receive official phones from their company which they have to return when they leave the company. Now, it becomes a horror story for the new employee if he gets the same phone locked with the previous user's ID.

## Part 2: 5 quick methods to bypass Sony Xperia 5 V FRP

Ok, now this is established that there are certain situations when you need to conduct a Sony Xperia 5 V FRP bypass. So how do you do the Sony Xperia 5 V FRP bypass?

### Method 1. Retrieve your Google account from another device

If your phone is locked with a Google account whose password you do not know or have forgotten, then you can use this method to Sony Xperia 5 V FRP bypass. In this method, you can try to retrieve your Google account from another device. It is a simple step-by-step process tha can be completed from a PC or another mobile device.

_If you have forgot the email address but remember the password, then follow these steps._

1. **Navigate to Google's Find My Email page in your browser.**

When you can't remember the email address that was configured, go to the [Find My Email](https://accounts.google.com/signin/v2/usernamerecovery?flowName=GlifWebSignIn&flowEntry=ServiceLogin) page and start account recovery process.

2. **Enter your recovery email or phone number**

On the next screen, provide a recovery email or phone number and click **Next**.

![google retrieval](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-1.jpg)

3. **Provide your first and last name**

Enter your first and last name in the given form and click **Next**.

4. **Verification code**

Google will send a verification code to the setup recovery email or phone number, click **Send**.

5. **Verification code entry**

Check your email inbox or phone messages depending on the recovery method and find the verification code. Enter it in the given form. If it is correct, you can go to the next final step.

6. **Choose an account**

From the list of accounts showing on the screen, select the account you want to recover.

7. **Enter your password**

Enter the password in the text box and you are done.

_If you remember the email but not the password, then the Sony Xperia 5 V FRP bypass method will go like this._

1. **Google's Account Recovery page**

Navigate to the [Account Recovery page](https://accounts.google.com/signin/recovery) from the browser on your PC or other mobile devices.

2. **Enter your email address**

Fill in the form with your Google account and click Next.

![google retrieval](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-2.jpg)

3. **Enter the last password you remember**

The next form will ask you to enter the last password you remember and that worked

Now, you will receive a message to your registered device, to verify it's you. Open it and click , Yes, it is me.

Now, wait for six hours for Google to verify it's you and then they will send a password reset link to your email.

Now, what if you can't remember your last password, then use the next method.

4. **Click on "Try another way"**

![try another way](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-3.jpg)

Now Google will send a message to your phone to verify it's you. On your phone, open the message and click Yes, it's me.

After verification, Google will send you a password reset link after six hours.

If your phone is not registered in your Google account then, try the next method.

5. **Click on "Try another way" again**

<!-- affiliate ads begin -->
<a href="https://homestyler.sjv.io/c/5597632/2044747/22993" target="_top" id="2044747"><img src="//a.impactradius-go.com/display-ad/22993-2044747" border="0" alt="" width="300" height="250"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/2044747/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
![try another way](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-4.jpg)

If your phone is enabled to check for the code, click Try another way again.

Google will then ask you to send a verification code to your registered phone number. Click Send.

Find the code from your messages, enter it, and click Next.

Now again, you will wait for six hours till Google sends the password reset link to your email.

### Method 2. Use FRP Bypass APK

FRP bypass APK is another tool you can use to Sony Xperia 5 V FRP bypass easily. Let us see how it works step by step.

- Download FRP Bypass APK for Sony Xperia 5 V  FRP bypass android 11.
- Once it's downloaded, open the File Manager using the [Open Files](https://www.bypassfrpfiles.com/2021/07/frp-bypass-apk/#Download_Android_All_FRP_Bypass_Tool_APK_File_Free) app
- Find the suitable Apk and click on it
- Install & open the APK.
- Open the browser on your phone.
- Launch any of these two below URL.
  - [https://tiny.cc/frptools](https://tiny.cc/frptools)
  - [https://bit.ly/2NKxXYs](https://bit.ly/2NKxXYs)
- Go to the FRP bypass APK >FRP APPS section
- Open Settings leading to the Sony Xperia 5 V device Settings>System Settings> Backup & Reset >Reset Phone
- Now click on Reset System Settings Only, and confirm Reset System Settings Only.
- Select Erase All data and confirm.
- Your device will be rebooted.
- Wait till the factory reset process completes.

Now, reboot your device and set it up according to your requirements.

### Method 3. Deactivate FRP

Another way to come around Sony Xperia 5 V FRP bypass is to deactivate FRP. Let us follow the step-by-step process.

1. Launch the "Settings" app and scroll to the Apps.
2. Click on the "Manage apps" (applications) and then the "All" tab.
3. Open "Google App."
4. Click on the "Clear cache" to remove the Google account cache.

<!-- affiliate ads begin -->
<a href="https://zebaoaffiliateprogram.pxf.io/c/5597632/1853659/21526" target="_top" id="1853659"><img src="//a.impactradius-go.com/display-ad/21526-1853659" border="0" alt="" width="1920" height="750"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/1853659/21526" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
![deactivate frp](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-5.jpg)

5. Also, clear all data to erase data stored.
6. Click the "Back" button, and go to "Gmail."
7. Click on the "Clear cache" and "Clear data."

![clear data](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-6.jpg)

8. In the Sony Xperia 5 V device Settings menu and click "Data synchronization." When your device asks you to enter your Google account, enter your new Gmail account.

You have successfully completed the Sony Xperia 5 V FRP bypass process.

### Method 4. Bypass with SideSync

You can use SideSync to share the screen and data between your computer and mobile phone. How can we use this for FRP bypass?

1. Download the SideSync from the official site and install the SideSync application on your computer.

<!-- affiliate ads begin -->
<a href="https://shop.mondly.com/affiliate.php?ACCOUNT=ATISTUDI&AFFILIATE=108875&PATH=https%3A%2F%2Fwww.mondly.com%3FAFFILIATE%3D108875%26RESOURCE%3D%2BEducational%2B970x90%2B"><img src="https://secure.avangate.com/images/merchant/69c418c33ec2e1a4267fa9bb77fa1428/educational-970x90.gif" border="0"></a>
<!-- affiliate ads end -->
![sidesync](https://images.wondershare.com/drfone/article/2022/08/vivo-y20-frp-bypass-7.jpg)

2. Connect your phone and computer to the Google account verification screen.
3. Now plug in the first end of your OTG adapter with your phone and connect another end to the flash drive with APK.
4. Your phone will launch the file explorer automatically, showing the root directory of the flash drive.
5. Now click on the APK file.
6. Click Settings and allow to install from Unknown sources, and click OK.
7. After installation, open SideSync.
8. Disconnect the OTG cable from your Samsung phone.
9. Now access the Settings menu and go to the Backup & reset option and conduct a factory reset.

### Method 5. 3 Steps to Bypass Sony FRP Bypass

[Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) is a reliable and efficient tool designed to help users bypass FRP (Factory Reset Protection) locks on Android devices, including Sony smartphones. This powerful software provides a hassle-free solution for those locked out of their Sony devices due to FRP lock. With its user-friendly interface and advanced features, Dr.Fone makes FRP bypassing a straightforward process, even for users with limited technical knowledge.



### Dr.Fone - Screen Unlock (Android)

Remove Google Lock (FRP) from Sony Devices

- Pattern, PIN, password, fingerprints & face screen lock can all be unlocked.
- Bypass Android FRP lock without a PIN or Google account.![New icon](https://images.wondershare.com/drfone/others/new_23.png)
- Unlock mainstream Android brands like Samsung, Sony, Xiaomi, etc.
- No tech knowledge required, Simple, click-through, process.

**3,981,454** people have downloaded it

#### 3 Steps to Bypass Sony FRP Lock with Dr.Fone - Screen Unlock (Android)

- **Step 1.** After installing Dr.Fone - Screen Unlock (Android), launch the program and select the "Screen Unlock" option from the main menu. Continue to Android > Remove Google FRP Lock.

![coose remove google frp lock](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

- **Step 2.** Then select Sony and click the Start button to continue. Then, connect your locked Sony device to the computer using a USB cable. Ensure that USB debugging is enabled on your Sony device before proceeding with the next steps.

![coose remove google frp lock](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-1.png)

- **Step 3.** Once your Sony device is successfully connected, Dr.Fone - Screen Unlock (Android) will automatically detect it. Follow the on-screen instructions to put your Sony device into specic mode. Once in the correct mode, Dr.Fone will start downloading the necessary firmware to bypass the FRP lock.

![coose remove google frp lock](https://images.wondershare.com/drfone/guide/remove-android-frp-lock-2.png)

During the process, it's crucial to keep your device connected to the computer and refrain from disconnecting it until the bypass is complete. After the firmware download is finished, Dr.Fone will initiate the FRP lock bypass process. Once completed, your Sony device will restart, and you'll regain access to it without encountering the FRP lock.

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg) safe & secure

## The Bottom Line

FRP is a great feature to add security to Android phones. However, sometimes it is necessary to bypass it to fully use your phone. When you are stuck with an FRP lock, it is a frustrating situation, especially when you want to factory reset your phone. We have described various methods so that you choose the best solution according to your requirements for the Sony Xperia 5 V FRP bypass. Among them, bypassing Sony FRP lock is made simple and efficient with Dr.Fone - Screen Unlock (Android). Say goodbye to FRP lock frustrations and regain access to your Sony device swiftly with [Dr.Fone - Screen Unlock (Android)](https://drfone.wondershare.com/guide/bypass-google-frp-on-android.html).

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg) safe & secure



<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>








<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://youtube-lab.techidaily.com/-comprehensive-walkthrough-setting-up-your-first-wirecast-livestream-to-youtube/"><u>[New] A Comprehensive Walkthrough  Setting Up Your First WireCast Livestream to Youtube</u></a></li>
<li><a href="https://remote-screen-capture.techidaily.com/new-aggregating-the-top-5-mac-clipping-applications/"><u>[New] Aggregating the Top 5 Mac Clipping Applications</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/new-in-2024-capture-and-share-your-screens-bandicam-vs-camtasia/"><u>[New] In 2024, Capture and Share Your Screens  Bandicam vs Camtasia</u></a></li>
<li><a href="https://article-knowledge.techidaily.com/new-pursuing-passion-professionally-a-guide-for-aspiring-designers-for-2024/"><u>[New] Pursuing Passion Professionally  A Guide for Aspiring Designers for 2024</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/new-snap-motion-blur-photos-effortlessly-with-iphone-techniques/"><u>[New] Snap Motion-Blur Photos Effortlessly with iPhone Techniques</u></a></li>
<li><a href="https://facebook-record-videos.techidaily.com/updated-in-2024-compact-video-summary-key-insights-unveiled/"><u>[Updated] In 2024, Compact Video Summary  Key Insights Unveiled</u></a></li>
<li><a href="https://facebook-clips.techidaily.com/updated-in-2024-direct-links-sharing-twitch-content-with-friends-on-fb/"><u>[Updated] In 2024, Direct Links  Sharing Twitch Content with Friends on FB</u></a></li>
<li><a href="https://desktop-recording.techidaily.com/updated-in-2024-journey-back-in-time-with-these-top-5-gba-console-emulators-for-pcs/"><u>[Updated] In 2024, Journey Back in Time with These Top 5 GBA Console Emulators for PCs</u></a></li>
<li><a href="https://visual-screen-recording.techidaily.com/2024-approved-5-easy-ways-to-record-youtube-videos/"><u>2024 Approved  5 Easy Ways to Record YouTube Videos</u></a></li>
<li><a href="https://some-knowledge.techidaily.com/2024-approved-exploring-luts-for-sophisticated-photographic-changes/"><u>2024 Approved  Exploring LUTs for Sophisticated Photographic Changes</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/3-best-tools-to-hard-reset-itel-a05s-drfone-by-drfone-reset-android-reset-android/"><u>3 Best Tools to Hard Reset Itel A05s | Dr.fone</u></a></li>
<li><a href="https://android-frp.techidaily.com/5-quick-methods-to-bypass-oppo-a79-5g-frp-by-drfone-android/"><u>5 Quick Methods to Bypass Oppo A79 5G FRP</u></a></li>
<li><a href="https://extra-lessons.techidaily.com/a-comprehensible-approach-to-adding-dates-on-youtube-videos-for-2024/"><u>A Comprehensible Approach to Adding Dates on YouTube Videos for 2024</u></a></li>
<li><a href="https://android-frp.techidaily.com/a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-from-your-asus-rog-phone-7-by-drfone-android/"><u>A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock from your Asus ROG Phone 7</u></a></li>
<li><a href="https://android-frp.techidaily.com/addrom-bypass-an-android-tool-to-unlock-frp-lock-screen-for-your-huawei-by-drfone-android/"><u>AddROM Bypass An Android Tool to Unlock FRP Lock Screen For your Huawei</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/advanced-tips-for-capturing-and-storing-desktop-content/"><u>Advanced Tips for Capturing and Storing Desktop Content</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/catchemall-celebrate-national-pokemon-day-with-virtual-location-on-infinix-smart-7-hd-drfone-by-drfone-virtual-android/"><u>CatchEmAll Celebrate National Pokémon Day with Virtual Location On Infinix Smart 7 HD | Dr.fone</u></a></li>
<li><a href="https://android-frp.techidaily.com/easy-guide-how-to-bypass-samsung-galaxy-s23-tactical-edition-frp-android-10111213-by-drfone-android/"><u>Easy Guide How To Bypass Samsung Galaxy S23 Tactical Edition FRP Android 10/11/12/13</u></a></li>
<li><a href="https://android-frp.techidaily.com/frp-hijacker-by-hagard-download-and-bypass-your-oppo-a58-4g-frp-locks-by-drfone-android/"><u>FRP Hijacker by Hagard Download and Bypass your Oppo A58 4G FRP Locks</u></a></li>
<li><a href="https://android-frp.techidaily.com/full-guide-to-bypass-nokia-g22-frp-by-drfone-android/"><u>Full Guide to Bypass Nokia G22 FRP</u></a></li>
<li><a href="https://android-frp.techidaily.com/hassle-free-ways-to-remove-frp-lock-on-lenovo-thinkphonewithwithout-a-pc-by-drfone-android/"><u>Hassle-Free Ways to Remove FRP Lock on Lenovo ThinkPhonewith/without a PC</u></a></li>
<li><a href="https://android-frp.techidaily.com/how-to-bypass-google-frp-lock-on-samsung-galaxy-s23-tactical-edition-devices-by-drfone-android/"><u>How to Bypass Google FRP Lock on Samsung Galaxy S23 Tactical Edition Devices</u></a></li>
<li><a href="https://android-frp.techidaily.com/how-to-bypass-motorola-edge-40-pro-frp-in-3-different-ways-by-drfone-android/"><u>How To Bypass Motorola Edge 40 Pro FRP In 3 Different Ways</u></a></li>
<li><a href="https://android-frp.techidaily.com/how-to-bypass-samsung-galaxy-m54-5g-frp-in-3-different-ways-by-drfone-android/"><u>How To Bypass Samsung Galaxy M54 5G FRP In 3 Different Ways</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-repair-iphone-7-plus-system-drfone-by-drfone-ios-system-repair-ios-system-repair/"><u>How To Repair iPhone 7 Plus System? | Dr.fone</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-a-step-by-step-guide-on-using-adb-and-fastboot-to-remove-frp-lock-on-your-samsung-galaxy-xcover-6-pro-tactical-edition-by-drfone-android/"><u>In 2024, A Step-by-Step Guide on Using ADB and Fastboot to Remove FRP Lock on your Samsung Galaxy XCover 6 Pro Tactical Edition</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-about-oppo-a78-frp-bypass-by-drfone-android/"><u>In 2024, About Oppo A78 FRP Bypass</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-about-oppo-reno-8t-frp-bypass-by-drfone-android/"><u>In 2024, About Oppo Reno 8T FRP Bypass</u></a></li>
<li><a href="https://extra-lessons.techidaily.com/in-2024-craftsmanship-at-fingertips-discovering-apples-8-excellent-drawing-apps/"><u>In 2024, Craftsmanship at Fingertips  Discovering Apple's 8 Excellent Drawing Apps</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-easy-guide-how-to-bypass-nokia-c300-frp-android-10111213-by-drfone-android/"><u>In 2024, Easy Guide How To Bypass Nokia C300 FRP Android 10/11/12/13</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-easy-guide-to-oppo-a38-frp-bypass-with-best-methods-by-drfone-android/"><u>In 2024, Easy Guide to Oppo A38 FRP Bypass With Best Methods</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-from-meizu-21-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock from Meizu 21 Phones with/without a PC</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-on-motorola-razr-40-ultrawithwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock on Motorola Razr 40 Ultrawith/without a PC</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-on-oppo-f25-pro-5g-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock on Oppo F25 Pro 5G Phones with/without a PC</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-on-oppo-find-n3-flipwithwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock on Oppo Find N3 Flipwith/without a PC</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-how-can-we-bypass-motorola-moto-g14-frp-by-drfone-android/"><u>In 2024, How Can We Bypass Motorola Moto G14 FRP?</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-how-to-bypass-frp-from-samsung-galaxy-m54-5g-by-drfone-android/"><u>In 2024, How to Bypass FRP from Samsung Galaxy M54 5G?</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-how-to-bypass-frp-from-sony-xperia-5-v-by-drfone-android/"><u>In 2024, How to Bypass FRP from Sony Xperia 5 V?</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-how-to-bypass-frp-on-samsung-galaxy-s23-ultra-by-drfone-android/"><u>In 2024, How to Bypass FRP on Samsung Galaxy S23 Ultra?</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-is-gsm-flasher-adb-legit-full-review-to-bypass-your-sony-phone-frp-lock-by-drfone-android/"><u>In 2024, Is GSM Flasher ADB Legit? Full Review To Bypass Your Sony Phone FRP Lock</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-latest-guide-how-to-bypass-lava-frp-without-computer-by-drfone-android/"><u>In 2024, Latest Guide How To Bypass Lava FRP Without Computer</u></a></li>
<li><a href="https://extra-support.techidaily.com/in-2024-masterful-digital-brushstrokes-essential-top-10-android-graphics-apps/"><u>In 2024, Masterful Digital Brushstrokes  Essential Top 10 Android Graphics Apps</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-samsung-galaxy-s24plus-adb-format-tool-for-pc-vs-other-unlocking-tools-which-one-is-the-best-by-drfone-android/"><u>In 2024, Samsung Galaxy S24+ ADB Format Tool for PC vs. Other Unlocking Tools Which One is the Best?</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-asus-rog-phone-7-frp-by-drfone-android/"><u>In 2024, Step-by-Step Tutorial How To Bypass Asus ROG Phone 7 FRP</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-lenovo-frp-by-drfone-android/"><u>In 2024, Step-by-Step Tutorial How To Bypass Lenovo FRP</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-reno-8t-frp-by-drfone-android/"><u>In 2024, Step-by-Step Tutorial How To Bypass Oppo Reno 8T FRP</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-the-complete-guide-to-motorola-moto-g24-frp-bypass-everything-you-need-to-know-by-drfone-android/"><u>In 2024, The Complete Guide to Motorola Moto G24 FRP Bypass Everything You Need to Know</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-the-complete-guide-to-oneplus-ace-3-frp-bypass-everything-you-need-to-know-by-drfone-android/"><u>In 2024, The Complete Guide to OnePlus Ace 3 FRP Bypass Everything You Need to Know</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-the-updated-method-to-bypass-lava-blaze-curve-5g-frp-by-drfone-android/"><u>In 2024, The Updated Method to Bypass Lava Blaze Curve 5G FRP</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-ultimate-guide-on-motorola-edge-40-neo-frp-bypass-by-drfone-android/"><u>In 2024, Ultimate Guide on Motorola Edge 40 Neo FRP Bypass</u></a></li>
<li><a href="https://extra-tips.techidaily.com/infuse-sound-with-microsoft-powerpoint-decks/"><u>Infuse Sound with Microsoft PowerPoint Decks</u></a></li>
<li><a href="https://android-frp.techidaily.com/is-gsm-flasher-adb-legit-full-review-to-bypass-your-sony-xperia-5-v-phone-frp-lock-by-drfone-android/"><u>Is GSM Flasher ADB Legit? Full Review To Bypass Your Sony Xperia 5 V Phone FRP Lock</u></a></li>
<li><a href="https://youtube-zero.techidaily.com/g-your-music-collection-accessible-worldwide/"><u>Making Your Music Collection Accessible Worldwide</u></a></li>
<li><a href="https://fox-that.techidaily.com/restarting-the-rumble-find-out-why-your-iphone-isnt-vibrating-in-quietringtone-settings-and-how-to-fix-it-with-8-solutions/"><u>Restarting the Rumble: Find Out Why Your iPhone Isn’t Vibrating in Quiet/Ringtone Settings and How to Fix It With 8 Solutions</u></a></li>
<li><a href="https://android-frp.techidaily.com/step-by-step-tutorial-how-to-bypass-oppo-reno-11-5g-frp-by-drfone-android/"><u>Step-by-Step Tutorial How To Bypass Oppo Reno 11 5G FRP</u></a></li>
<li><a href="https://android-frp.techidaily.com/top-5-oppo-reno-10-5g-bypass-frp-tools-for-pc-that-actually-work-by-drfone-android/"><u>Top 5 Oppo Reno 10 5G Bypass FRP Tools for PC That Actually Work</u></a></li>
<li><a href="https://fake-location.techidaily.com/will-ispoofer-update-on-vivo-v29-pro-drfone-by-drfone-virtual-android/"><u>Will iSpoofer update On Vivo V29 Pro | Dr.fone</u></a></li>
<li><a href="https://on-screen-recording.techidaily.com/zoom-into-your-workspace-learn-screen-casting-via-ezvide-for-2024/"><u>Zoom Into Your Workspace  Learn Screen Casting via EZvide for 2024</u></a></li>
</ul></div>
