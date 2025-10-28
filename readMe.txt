*Generate 20 files extension of malwares with their meanings 

Answer 

Malware or Malicious Software can have many file extensions. 

-. Exe: A common file extension for malware received via the web and is used for executable files which can be used to launch malware on a computer, cybercriminals use .exe files to distribute Malware that can steal Information and harm devices. 

-. Sh*: A common file extension for malware received via the web. A Shell Script or sh-file i something between a single command and a small program.  .Sh files are shell Scripts. They ane analogous to .bat files( cmd Scripts.) under windows.  The basic idea is to chain a few shell Command together in a file for ease of use. So whenever you tell the shell to execute that file, it will execute all the specified Command in order. 

USage → $ bash myscript, sh 

Making a file execuitable → $chmod +x myScipt.sh 

But now one can execute the file with  $ /muscript. sh 

- .Html: A Common file extension for malware received via email can very dangerous to system. cyberattack use malicious html attachments to steal personal data. .html Smuggling, a highly evasive malware delivery technique that leverages legitimate HTML 5 and JavaScript features, is increasingly used in email Campaigns. 

-. Scr: A file extension used in malware-related spam. is a portable Executable (PE) file that contains animations, graphics, slide-shows, or videos. The .Scr file extension is usually used to Save files in Microsoft windows. However malware Authors can add the .scr extension to any executable file to trick user into naming it , which can subsequently be used in order to gain control of System and personal data. 

-.Pdf: a file extension used in malware-related spam. PDF stands for Portable document format use to Save files that cannot be modified but easily shared. PIF files Can Contain malware, which is malicious code that Can be executed when a user open the file. This malware can be used to steal information gain access to a system or install a backdoor. 

-.Vbs: A file extension used in malware - related Spam. Is a file extension for a visual basic Script file. .VBS is a Scripting language that can be used to create malware and viruses. .VBS is a Malicious program that can infect a Computer, delete files, or terminate processes 

Examples of VBS malware 

- Virus : VBS/invadesys. A 

A vbscript virus that infect other script files deletes files, and terminates processes 

- I LOVETOU 

A worm that spread through emails attachment in .Outlook 91. the worms attachment was disguised as a text file,but it actually contained a vbscript program that destroyed file and re-sent the note to everyone in the recipient's outlook address book. 

-.Rtf: malware is a type of malware that uses Rich Text Format (RTF) files to distribute malware. RTF is a document format that allows users to exchange text files between different word processors. RTF malware can exploit vulnerabilities in the RTF parser or other vulnerabilities in the file. For example, an attacker could send a malicious email with an RTF file that contains a font table with too many fonts. When the victim opens the file, 

 

  the attacker could gain access to execute code.RTF malware can also embed malicious executable files in the RTF file. The attacker can trick the user into opening the file, which would then launch the malicious files. 

How to protect against RTF malware : 

Update affected products. For example, Microsoft released patches in February 2023 to address a vulnerability in the RTF parser. 

Be cautious of emails that contain RTF files. 

Use an antimalware program. 

- .Doc: file extension is used for word processing documents created by Microsoft Word. However, older versions of Microsoft Word and other word processing applications can be used to deliver malware through .doc files. A file extension is part of a file name that identifies the type of file. For example, the .doc extension indicates that the file is a Microsoft Word document. Some file extensions are associated with malicious programs that can damage your computer if opened. The most common malicious file extension is .exe. Other malicious file extensions include .bat, .cmd, and .vbs.  

Microsoft Office 2007 and 2010 save word files as .docx instead of .doc because they use less disk space. 

-.Dll: file is a Dynamic Link Library (DLL) file, which is a type of file that can be used to deliver malware to a device. A DLL file is a module that contains functions and data that can be used by other applications or DLLs.DLL files are used to share code between applications on a system.DLL files are used by many system-level programs, including device drivers and system utilities. DLL hijacking is a type of cyberattack that involves replacing a legitimate DLL file with a malicious one. The malicious DLL file is placed in the same directory as the application that needs the DLL file. When the application loads, it calls the malicious DLL file, which activates its malicious operations.DLL hijacking is a common exploit in Windows applications. 

-.Sys: file extension is used for system files in Microsoft Windows and MS-DOS applications. These files contain device drivers and hardware configurations for the system. Malware can corrupt system files, which can cause issues with the system's functionality. System files are essential files that are part of an operating system or device driver. They are required for the system to function properly.If malware corrupts system files, users can restore or reinstall them. 

Examples of .sys files: 

CONFIG.SYS: A text file that contains configuration options and specifies which device drivers to load  

COUNTRY.SYS: A binary database that contains country and codepage information  

IO.SYS: A file that contains DOS initialization code and driver resources  

KEYBOARD.SYS: A binary database that contains keyboard layout information  

How to view or edit .sys files?  

You can use applications built into Microsoft Windows to view or edit the content of .sys files. 

 

-.Msi: extension is for Microsoft Installer files, which are database files used to install software on Windows. However, malicious actors can manipulate these files to deliver malware or unwanted software. MSI files are used to install, maintain, and remove software on Windows. They store information about the installation process, including files to be installed, configuration settings, and setup instructions. The MSP file format is a file extension associated with Windows Installer Patch files. It distributes software updates, patches, and service packs for programs with the Windows operating system. MSP files modify the installation of a program by adding, removing, or changing files or registry entries. 

Vulnerability: 

Because of their standardization and versatility, MSI files are a common target for malicious exploitation. Malicious actors can use MSI files to distribute and execute malware on unsuspecting users' computers.  

How to protect yourself: 

To protect yourself, you should only obtain .msi files from reputable sources and be cautious when installing software. 

 

-.Pif: file or Program Information File, is a type of file that was often used to deliver malware in older versions of Windows. PIF files contain instructions on how to run a DOS application in Windows, and were commonly used in Windows 95 and 98.  

PIF files are executable files that contain information such as the program window size, the amount of memory used, and the exe file path. They are analyzed by Microsoft Windows using the ShellExecute function, and can be run as executable programs.  

PIF files are rarely used in software today because DOS applications are no longer common. In Windows 10, the PIF file extension was replaced with LNK (link).  

Users should avoid opening PIF files sent as email attachments, as they are often used to transmit viruses and other harmful scripts. A program information file (PIF) defines how a given DOS program should be run in a multi-tasking environment, especially in order to avoid giving it unnecessary resources which could remain available to other programs. 

 

-.Jpg file, or JPG malware, is a rare but dangerous type of malware that can be embedded in image files. Hackers can use a variety of methods to hide malicious code in JPG files, including:  

Stegosploit: A tool that allows hackers to hide malicious code in images  

File format exploitation: Hackers can create content that triggers vulnerabilities in how a server opens or parses the file  

Changing file extensions: Hackers can disguise executables as safe files by changing the extension to something like .jpg  

Using EXIF data: Attackers can embed malicious code in JPG EXIF data  

Double Extension detection by Threat Protection Pro™ | NordVPN 

JPG stands for Joint Photographic Experts Group, and is a common file format for storing digital photos. JPG files are compressed to make them easier to store and load on webpages, While JPG files are generally safe to open because they don't contain active content, malware authors can take advantage of vulnerabilities in image files to spread malicious code. To help detect malware, businesses should analyze and check every piece of content that enters their network, regardless of the file format. 

 

-.Gif: file is a raster image file with the extension .gif, which stands for Graphics Interchange Format. GIF files are a popular image format that are often used on social media and can contain basic animations. GIF files are known for being small in size, loading quickly on web pages, and being able to spread easily on social media. They are compressed using lossless compression, which means the image quality doesn't decline when the data is compressed. 

 

-.Bmp: file extension is associated with a Bitmap Image file, which is a raster graphics format that can store digital images in color or black and white. BMP files are device-independent, meaning they don't require a graphics adapter to display on different platforms.  

BMP files are often used for storing photos and printing full-color photos because they don't lose data when edited and saved, unlike JPEGs. BMP files are also a good choice for editing because they contain large, raw, high-quality images.  

Microsoft originally developed the BMP format for Windows to maintain image resolution across different devices and screens. However, BMP files are now compatible with many Mac and Android devices. 

 

-.Cmd: file is a script file used in Windows operating systems. It contains a series of commands that are executed in the Command Prompt (CMD) environment. While .cmd files themselves are not inherently malware, they can be used to execute malicious commands if created by someone with harmful intent. Malware authors may use .cmd files to automate tasks such as downloading additional malicious payloads, modifying system settings, or executing other harmful scripts. If you encounter a .cmd file from an untrusted source, it's important to be cautious and avoid running it, as it could compromise your system's security. Always ensure your antivirus software is up to date and consider scanning any suspicious files before opening them. 

 

-.XLs: A fle extension used in malware-related spam .xls file extension is the original file extension for Microsoft excel wookbooks Cbercriminals have used .xIs files in malware -related spam campaigns and set the formatting of how an excel looked . 

 

-.Hta: Is a Smoke loader malware works in multi Stages and layers. it uses code obfuscation, anti-debugging, anti vm and living of the land technique. 

 

-.Msp : The msp file is a file extension associated with windows installer patch files. it distributes software updates, patches and Service packs for programs with the windows operating system. Msp files modify the installation of a program by adding ,removing or changing files or registry entries. 

 

-.Txt: is a file extension Specially associated with plain text files. If the file is a “true plain text" file, it cannot execute a virus. However, a .txt file can be disguised as an executable (containing malicious code) designed to trick users into opening a file type which can execute that malicious code 

ASSIGNMENT TWO 

  

*DEFINATION AND IMPACT OF THE VARIOUS MALWARE 

MALWARE is a software that is designed to attack , control and damage a devices security and infrastructure systems. It is design to steal. 

TYPES OF MALWARE 

-Ransomware is a type of malware that prevents users from accessing their devices or data, and demands payment to regain access. Ransomware attacks have impacted businesses, hospitals, and public utilities worldwide. wannacry ransomware is the deadest ransomware on earth and it can be integrate by backup. 

How it work:  

Definition: 

Ransomware is a malicious software that prevents users from accessing their devices or data.  

Impact: 

Ransomware can cause costly disruptions to operations and the loss of critical information and data.  

How it works: 

Ransomware can lock the system, encrypt files, or delete data. It can also try to spread to other machines on the network.  

How it's spread: 

Ransomware can be spread through email attachments, ads, links, or websites. Attackers may use phishing and social engineering scams to trick users into installing the malware.  

How to pay: 

Attackers usually demand payment in cryptocurrency or another untraceable method. Payment is in exchange for a decryption key or restoration of standard operations.  

Prevention: 

To mitigate the impact of ransomware, it's important to always have a recent offline backup of your most important files and data. 

 

Fileless malware is a type of malicious software that uses a computer's legitimate tools and programs to attack the system, rather than downloading and installing files. This makes it harder to detect and remove than traditional malware:  

How it works: 

Fileless malware operates in the computer's memory, or RAM, and doesn't write anything to the hard drive. It uses the system's software, applications, or protocols to launch an attack.  

How it's difficult to detect: 

Fileless malware is often undetectable by antivirus software, whitelisting, and other traditional endpoint security solutions. This is because it doesn't leave a footprint and doesn't require malicious files.  

How it's effective: 

Fileless malware can do anything that traditional malware can do, including acting as ransomware, an infostealer, or a remote access toolkit (RAT).  

How it's mitigated: 

Security personnel can mitigate fileless malware by scanning the command lines of trusted applications, such as Microsoft Windows PowerShell.  

Some high-profile examples of fileless malware attacks include the hack of the Democratic National Committee and the Equifax breach. 

 

-Mobile malware is malicious software that targets mobile devices and operating systems to exploit vulnerabilities. It can include a variety of threats, such as viruses, worms, Trojans, adware, and spyware.  

Mobile malware can have a number of impacts, including: 

Locking up devices: Malware can make a device unusable or locked.  

Stealing data: Malware can steal, delete, or encrypt data.  

Taking control of devices: Malware can take control of devices to attack other organizations.  

Obtaining credentials: Malware can obtain credentials to access systems or services.  

Spreading through networks: Malware can spread through networks and disrupt operations.  

Slowing down devices: Malware can slow down devices.  

Redirecting to malicious websites: Malware can redirect users to malicious websites.  

Some ways to protect against mobile malware include:  

Keeping software updated 

Installing a firewall 

Using a passcode on your phone 

Downloading apps from official app stores 

Reading the end-user agreement 

Avoiding downloading apps from untrusted sources 

Avoiding opening email attachments from unknown senders 

Avoiding opening text messages from people you don't know. 

 

- Wiper malware is a class of malware intended to erase (wipe, hence the name) the hard drive or other static memory of the computer it infects, maliciously deleting data and programs. 

 

-Hybrid malware, also known as combo malware, is a type of malicious software that combines different types of malware to create a more powerful attack. It can be difficult to detect and remove because of its unique combination of attributes and how quickly it spreads.  

Here are some characteristics of hybrid malware: 

Combination of malware types: Hybrid malware combines elements of different malware types, such as trojans, worms, and viruses. For example, a hybrid malware program might appear to the user as a Trojan, but then attack other victims over the network like a worm.  

Complex attacks: Hybrid malware can perform complex attacks by combining several malware families together.  

Botnet: Hybrid malware can act like a bot, connecting infected machines to a botnet controlled by hackers. Hackers can then rent out the infected machines to other threat actors.  

Rapid spread: Hybrid malware can spread quickly throughout a network.  

Propagates without user action: Hybrid malware can propagate without any action on the part of the user.  

Hybrid malware poses a growing threat to digital security. 

 

-Cryptojacking malware is a type of cybercrime that uses a device's computing power to mine cryptocurrency without the user's knowledge or consent. The malware can be embedded in websites or installed on a device through malicious scripts.  

Cryptojacking can have a number of negative impacts, including: 

Slowdowns and crashes: Cryptojacking can strain a device's computational resources, causing it to slow down or crash.  

Loss of data privacy: Cryptojacking can lead to loss of data privacy.  

Inability to use affected systems: Cryptojacking can make it impossible to use the affected systems.  

High cloud costs: Cryptojacking can lead to high cloud costs.  

Some signs that a device may be infected with cryptojacking malware include:  

High CPU or GPU usage 

Increased fan noise and overheating 

Decrease in performance 

Unexplained network activity 

Short battery life 

Unknown processes in Task Manager 

Blocked access to system monitoring tools 

Organizations can monitor outgoing malware traffic and use firewalls to stop it. Monitoring software can also send notifications to administrators when suspicious traffic is detected. 

 

-Adware malware is a type of malware that displays unwanted advertisements on a device and can harm it in a number of ways:  

Slows down device: Adware can slow down a device.  

Hijacks browser: Adware can hijack a browser.  

Installs viruses and spyware: Adware can install viruses and spyware.  

Gathers information: Adware can gather information from a user's browsing history, including sensitive information.  

Compromises security: Adware can compromise a device's security, making it susceptible to data breaches and unauthorized access.  

Redirects to malicious sites: Adware can redirect a user to malicious sites.  

Sells browsing data: Adware can sell a user's browsing data to third parties.  

Adware can be installed on a device in a number of ways, including: 

Bundled with free software 

Adware can be bundled with free software or apps that a user installs without realizing it.  

Exploiting vulnerabilities 

Hackers can exploit vulnerabilities in a user's software or operating system to insert adware.  

Clicking on untrustworthy links 

Clicking on an untrustworthy link can lead to software being installed without a user's permission.  

To protect against adware, users can: Use reputable antivirus or anti-malware software, Keep their operating system and applications up to date, Practice safe browsing habits, Be cautious when downloading files, and Avoid suspicious websites or links. 

 

-Trojan malware, also known as a Trojan horse, is a type of malware that disguises itself as a legitimate program to gain access to a device:  

Definition 

A Trojan is a deceptive program that appears to perform one function, but actually performs another, malicious function. Trojans are designed to trick users into loading and executing them on their systems.  

Impact: 

Trojans can be used to:  

Spy on users' online activity  

Steal sensitive data  

Gain backdoor access to corporate systems  

Infect other programs  

Slow down your device  

Cause unusual messages and popups to appear  

Interrupt your internet connection  

Launch a DDoS attack from an infected computer  

Crack your banking and other financial accounts  

How they spread 

Trojans can be spread through:  

Legitimate-looking emails and files attached to emails  

Social engineering tactics  

Banner advertisements  

Pop-up advertisements  

Links on websites  

Downloading pirated media  

Downloading any unsolicited material  

Accepting or allowing a pop-up notification without reading the message  

How to protect yourself 

You can protect yourself from Trojans by:  

Staying current with updates and patches for browsers, the OS, applications and software. 

 

-Spyware malware is a type of malware that can monitor and control a device, collecting personal data and potentially sending it to third parties. Spyware can have a number of negative impacts, including:  

Data theft: 

Spyware can collect and sell sensitive information like login credentials, account PINs, credit card numbers, and browsing habits.  

Identity fraud: 

Spyware can be used to commit identity fraud.  

Device damage: 

Spyware can damage a device and affect its performance. It can cause a device to run slowly, crash, overheat, or disable internet security programs.  

Browsing disruption: 

Spyware can redirect a user's browser to unwanted websites, change the browser's homepage, or install new browser extensions without the user's permission.  

Spyware can be difficult to identify, but some signs that it may be present include: Unexpected changes to device settings, Rapid battery drain on mobile devices, Unexplained increase in data usage, Disabled antivirus or firewall, and Suspicious emails or messages.  

To prevent spyware, you can:  

Use antivirus solutions, anti-malware detection, and antispam filters 

Be careful about cookie consent 

Only download official software 

Avoid clicking email links 

Keep your systems up to date 

Critically check content from the internet and emails. 

 

-Keylogger malware is a type of malware or hardware that records a user's keystrokes and sends them to a hacker. Keyloggers can be used to steal sensitive information, such as passwords and credit card numbers, and can have serious consequences for users and organizations.  

Here are some key details about keyloggers: 

How they work: 

Keyloggers can be software or hardware devices that are installed on a computer or other device. They monitor the user's keystrokes and can also record other actions, such as screenshots, webcam activity, and microphone activity.  

How they are distributed: 

Keyloggers can be distributed through infected applications or websites. When a user visits a compromised website, a keylogger can be automatically downloaded and installed without the user's knowledge.  

How they are used: 

Hackers use the information collected by keyloggers to gain access to secure systems. They can use the passwords and other information to log in to accounts or access networks.  

How to detect them: 

Signs that a keylogger may be installed on a phone include excessive data usage and frequent freezing.  

Keyloggers can also be used for good purposes, such as parental control. 

 

-Virus malware is a type of malware, or malicious software, that can harm a computer in many ways:  

Definition: 

A virus is a computer program that attaches to another program or file, and then replicates itself by infecting other programs with its own code.  

Impact: 

A virus can cause a device to crash, lock up, or become unusable. It can also steal, delete, or encrypt data, or even erase everything on a hard disk.  

How it spreads: 

A virus can spread through networks, drives, file-sharing programs, or infected email attachments.  

How to prevent: 

To prevent a virus infection, you can use a comprehensive internet security solution that includes real-time scanning and monitoring.  

Other types of malware include: 

Worms: 

Malicious software that replicates and spreads quickly to any device on a network.  

File infectors: 

Can burrow into executable files and spread through a network. They can overwrite a computer's operating system or reformat its drive.  

Macro viruses: 

Take advantage of programs that support macros, such as Word or Excel. They often arrive as spam email attachments.  

Polymorphic viruses: 

Modify their own code to evade detection by antivirus programs. 

 

-Computer worm malware is a type of malware that can spread across a network and harm a computer system in a number of ways:  

Definition: 

A worm is a malicious program that can replicate itself and spread across a network without human interaction. Worms can exploit vulnerabilities in security software to steal information, corrupt files, and more.  

Impact: 

Worms can cause a number of issues, including: 

Overloading: Worms can consume large amounts of bandwidth and memory, which can overload systems and networks and make them unreliable.  

File damage: Worms can delete, change, or corrupt files.  

Software damage: Worms can damage software and hardware.  

Malfunctions: Worms can cause computer systems to freeze, crash, or malfunction.  

Unusual behavior: Worms can cause unusual computer behavior, such as programs opening automatically or unusual sounds, images, or messages.  

Spread: 

Worms can spread through a number of ways, including: 

Email attachments: Worms can be carried in email attachments.  

USB drives: Worms can spread through infected USB drives.  

Websites: Worms can spread through infected websites.  

File-sharing networks: Worms can spread through peer-to-peer (P2P) file-sharing networks.  

Instant messengers: Worms can spread through text messages and instant messengers like Internet Relay Chat (IRC).  

Removal 

Removing a worm can be difficult and may require reformatting the system. 

 

-Rootkit malware is a type of malware that allows cybercriminals to access a computer or network without being detected. Rootkits are designed to be stealthy and can remain hidden for a long time.  

Here are some definitions and impacts of rootkits: 

Definition: 

The term "rootkit" comes from the words "root" and "kit". "Root" refers to the highest level of access in Unix and Linux systems, while "kit" refers to the tools that provide this access.  

Impact: 

Rootkits can be used for a variety of malicious activities, including: 

Data theft: Rootkits can steal banking and credit card details, passwords, and other personal or financial data  

System damage: Rootkits can destroy system files and install other malware  

Denial of service attacks: Rootkits can flood a target machine with requests, making it unable to perform its normal functions  

Eavesdropping: Rootkits can be used to eavesdrop on users  

Detection: 

Rootkits are difficult to detect and remove because they can block antivirus and malware scanner software. A rootkit scan or behavioral analysis can help detect a rootkit infection.  

Propagation: 

Rootkits can be downloaded when a user clicks on an infected file. The infected file can modify the kernel, the deepest part of the operating system, and plant a rootkit there. 

 

-Botnet malware is a network of internet-connected devices that are infected with malware and controlled by a single attacker or group of attackers. The term "botnet" is a combination of the words "robot" and "network".  

Botnets are a major cybersecurity concern because they allow attackers to perform large-scale cyberattacks that were previously impossible. Some of the ways botnets are used include:  

Sending spam: Botnets can send spam messages, often including malware, to millions of targets at once.  

DDoS attacks: Botnets can be used to generate malicious traffic for distributed denial-of-service (DDoS) attacks that bring down major websites.  

Phishing: Botnets can be used to launch phishing scams.  

Stealing data: Botnets can be used to steal money or data.  

Botnets can be persistent and difficult to remove. Attackers can continue to operate even after a compromised device is found because they may have compromised multiple devices in the network. They can also replace the malware and encrypt communication between the infected devices.  

Some other characteristics of botnets include: Self-propagation, Self-destruction, Anonymous communication, Origin obfuscation, and Downloading payloads. 

                            

 

ASSIGNMENT THREE 

 

*Generate 15 different network protocol and their meanings with port number 

-SMTP 

SMTP is known as the Simple Mail Transfer Protocol. It is associated with the TCP port number 25. The primary purpose of this protocol is to make sure that email messages are communicated over the network securely. This port usually comes into being during the Application layer. Not only does this protocol carry out the task of delivering messages within networks, i can also successfully deliver messages between different networks. This makes it one of the most important ports for the communication of messages over the network due to the security and it provides along with other features. However, you do not have the privilege to download the emails in order to read them; it is just intended for the purpose of transferring them over the network. 

  

 -HTTP 

Port 80 is associated with HTTP, Hypertext Transfer Protocol. It comes under the category of a TCP protocol. It is one of the most famous and widely used ports in the world. The main purpose of port 80 is to allow the browser to connect to the web pages on the internet. Port 80 basically expects or waits for the web client to ask for a connection. Once this connection has been made, you will get the privilege to connect to the World Wide Web and get access to various web pages out there. In fact, HTTP - 80 is one of the most important ports associated with the TCP protocol. Moreover, this port is generally used during the application layer of the TCP/IP Model. 

  

-HTTPS 

Hypertext Transfer Protocol over SSL/TLS (HTTPS) port  443 is also associated with the TCP protocol. HTTPS port 443 also lets you connect to the internet by establishing a connection between the webpages and the browser. This lets you connect to the World Wide Web. However, this port has an added feature of security to it, which HTTP port 80 does not have. This port is intended for establishing secure connections to make sure that the data is transmitted over a secure network. The use receives a warning if the browser is trying to access a webpage which is not secure. This port comes into being during the application layer. It basically encrypts and authenticates the network packets before transferring them over the network to increase the security. This feature of security is introduced by the use of SSL, which can also be referred to as Secure Socket Layer. 

     

-FTP 

FTP is the abbreviation of "File Transfer Protocol". The purpose of FTP is to transfer files over the internet. It basically lays down all the rules which are to be followed during the transfer of data. Due to the concern of security, it also asks for authentication by the user before the transfer of data. It is associated with the TCP protocol and corresponds to two ports, port 20 and 21. Both of these ports function during the application layer. 

Port 20 performs the task of forwarding and transferring of data. It takes over the task of transferring FTP data when it is in active mode. 

Port 21 performs the task of signaling for FTP. It listens to all of the commands and provides a flow control for data. It is quite essential for maintaining the flow of data. 

  

-TELNET 

TELNET port 23 comes under the category of TCP Protocols. Its main function is to establish a connection between a server and a remote computer. It establishes a connection once the authentication method has been approved. However, this port is not suitable to establish secure connections and does not cater to the concern of security. It enables the remote connection of a computer to be established with routers and switches as well. It makes use of a virtual terminal protocol to make a connection with the server. It comes into existence during the application layer of the TCP/IP protocol. 

  

 -IMAP 

IMAP is the abbreviation of 'Internet Message Access Protocol'. The IMAP -143 Port lies under the category of TCP protocol. The primary purpose of this port is to retrieve emails from a remote server without having the need to download the email. You have the liberty to access the emails from anywhere by connecting to the server and viewing your email after providing authentication. This opportunity has been provided to you because of the existence of this port. It reserves a virtual memory for the email which enables you to read it by connecting to the server. However, you may also download the mail if you wish to. It also provides you the ability to search for your messages from a bunch of them to get to your desired one. IMAP 143 Port generally operates at the Application Layer of a TCP/IP Model. In addition to this, it also makes sure that the data remain secure during this connection. 

  

  

  

-RDP 

RDP is also known as the 'Remote Desktop Protocol'. It operates on the port 3389 of the TCP protocol. This port has been developed by Microsoft. It enables you to establish a connection with a remote computer. With the help of this connection, you get the liberty to control the desktop of this remote computer. This will provide you the ease to access you home desktop system from anywhere in the world just by proper authentication. In order to connect to your remote computer, you will have to forward the connection to the TCP Port 3389 which will then make available to you all the files which you have kept on your remote computer. However, since this port have been developed by Microsoft, it is essential to have a Windows operating system running on your computer in order to access it remotely. Please keep in mind that you might have to do manual settings in order to remotely access your desktop using this port. It operates on the Application layer of the TCP/IP Model. It is used worldwide for the purpose of accessing your desktop remotely. 

  

-SSH 

SSH is also referred to as 'Secure Shell'. It operates on the port number 22 of the TCP protocol. It carries out the task of remotely connecting to a remote server or host. It allows you to execute a number of commands and move your files remotely as well. However, it is one of the most secure ways of accessing your files remotely. Using this port, you can remotely connect to a computer and move your files with ease. This port sends the data over the network in an encrypted form which adds an extra layer of security on it. In addition to this, only authorized people will be able to remotely log on to their systems using the Port 22 which makes sure that the information does not get into unauthorized hands. It provides the chance to move files within networks as well as gives the privilege to move files between different networks securely. It operates at the Application Layer of the TCP/IP Model and is considered as one of the most secure and reliable ports for accessing files remotely.   

-DNS  

DNS is referred to as 'Domain Name System'. It operates on the port 53 of TCP and UDP protocols. DNS makes use of relational databases to link the host names of the computers or networks to their respective IP Addresses. The port 53 waits for requests from DHCP to tran