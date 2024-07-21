# Nirit

![NIRIT](/nirit/nirit.png)

<section>
  <a href="https://github.com/sh4dow18/Nirit/">
    <img src="https://img.shields.io/badge/1.0.0-00AA00?style=for-the-badge&logo=github&labelColor=gray" alt="RELEASE" />
  </a>
  <a href="https://github.com/sh4dow18/Nirit/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/GPL%203.0-0066AA?style=for-the-badge&logo=gnu&labelColor=gray" alt="LICENSE" />
  </a>
  <a href="https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html">
    <img src="https://img.shields.io/badge/Bash-000000?style=for-the-badge&logo=GNU%20Bash&logoColor=white&labelColor=gray" alt="BASH" />
  </a>
  <a href="https://www.python.org">
    <img src="https://img.shields.io/badge/Python-DD8800?style=for-the-badge&logo=python&logoColor=white&labelColor=gray" alt="PYTHON" />
  </a>
  <a href="https://code.visualstudio.com">
    <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0066AA?style=for-the-badge&labelColor=gray" alt="Visual Studio Code" />
  </a>
</section>

## <img src="https://emojiapi.dev/api/v1/eyes/32.jpg" alt="OVERVIEW" height="20"/> Overview

**Nirit** is a desktop environment for GNU/Linux distributions focused on Tiling Windows Management, minimal installed packages and maximum customization

### <img src="https://emojiapi.dev/api/v1/key/32.jpg" alt="LICENSE" height="18"/> License

This project is licensed under a **GNU General Public License v3.0**.

If you want to know about this license, click
**[here](https://www.gnu.org/licenses/gpl-3.0.html)**

### <img src="https://emojiapi.dev/api/v1/hammer_and_wrench/32.jpg" alt="STACK" height="18"/> Stack

[BASH_LOGO]: https://img.shields.io/badge/Bash-000000?style=for-the-badge&logo=linux&logoColor=white&labelColor=gray
[BASH_URL]: https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html
[PYTHON_LOGO]: https://img.shields.io/badge/Python-DD8800?style=for-the-badge&logo=python&logoColor=white&labelColor=gray
[PYTHON_URL]: https://www.python.org

| Tech                         | Description                                                   | Used for               |
| ---------------------------- | ------------------------------------------------------------- | ---------------------- |
| [![BASH_LOGO]][BASH_URL]     | Unix shell scripting language for command line tasks          | Nirit Installer Script |
| [![PYTHON_LOGO]][PYTHON_URL] | High-level programming language for versatile, readable code. | Qtile Settings Script  |

### <img src="https://emojiapi.dev/api/v1/check_mark_button/32.jpg" alt="COMPATIBILITY" height="18"/> Compatibility

**Nirit** currently works on the following GNU/Linux distributions:

- <img src="https://www.debian.org/logos/openlogo-nd.svg" alt="DEBIAN" height="16"/> **[Debian GNU/Linux 12 (bookworm)](https://www.debian.org/index.html)**

## <img src="https://emojiapi.dev/api/v1/rocket/32.jpg" alt="STARTED" height="20"/> Getting Started

> [!NOTE]
> First of All, I Recommend to do a clean Installation to avoid conflicts with packages

### <img src="https://www.debian.org/logos/openlogo-nd.svg" alt="DEBIAN_TITLE" height="18"/> Using Debian

> [!NOTE]
> I recommend that in the installation, in the part where you can install a desktop environment, you only choose to install the **standard system utilities**

> [!TIP]
> After reboot the system, enter as root to install **sudo**.
> To install the program **sudo** do:
>
> ```bash
> apt install sudo
> gpasswd -a <your_user> sudo
> exit
> ```

## <img src="https://emojiapi.dev/api/v1/grinning_face_with_big_eyes/32.jpg" alt="USE" height="20"/> Use

Here will explain to you how to use this project

### <img src="https://emojiapi.dev/api/v1/large_blue_diamond/32.jpg" alt="USE" height="18"/> Installation

First, to use the **Nirit** Installer, you need to install **git**

#### <img src="https://emojiapi.dev/api/v1/desktop_computer/32.jpg" alt="DISTROS" height="16"/> Distributions

Here will show how to install the dependencies in the different distros that support **Nirit**

##### <img src="https://www.debian.org/logos/openlogo-nd.svg" alt="DEBIAN_INSTALLATION" height="16"/> Using Debian

```bash
sudo apt install git
```

#### <img src="https://emojiapi.dev/api/v1/right_arrow_curving_down/32.jpg" alt="CLONE_REPO" height="16"/> Clone Repository

Later, you will clone this repository:

```bash
git clone https://github.com/sh4dow18/nirit.git
```

Now, go to "nirit" folder:

```bash
cd nirit/
```

Finally, to execute the installer, put:

```bash
sudo bash nirit-installer.sh
```

#### <img src="https://emojiapi.dev/api/v1/camera/32.jpg" alt="CLONE_REPO" height="16"/> Screenshots

##### Installer

Here will show screenshots of the Nirit Installer Script working

###### Help

![INSTALLER_HELP_SCREENSHOOT](/nirit/installer-help.png)

###### Installing (Normal Mode)

![INSTALLER_1_SCREENSHOOT](/nirit/installer-normal-1.png)
![INSTALLER_2_SCREENSHOOT](/nirit/installer-normal-2.png)
![INSTALLER_3_SCREENSHOOT](/nirit/installer-normal-3.png)

##### Installed

Here will show screenshots when Nirit was successfully installed

###### Login

![LOGIN_SCREENSHOOT](/nirit/login.png)

###### Browsers

![BROWSER_SCREENSHOOT](/nirit/browser.png)

###### IDEs

![IDE_SCREENSHOOT](/nirit/code.png)

###### Terminal

![TERMINAL_SCREENSHOOT](/nirit/terminal.png)

###### Calls

![CALLS_SCREENSHOOT](/nirit/calls.png)

###### Games

![HEROIC_SCREENSHOOT](/nirit/heroic.png)
![MICKEY_SCREENSHOOT](/nirit/mickey.png)
![SPIDER_MAN_SCREENSHOOT](/nirit/spiderman.png)

##### Video

![OBS_SCREENSHOOT](/nirit/obs.png)

##### Misc

![THUNAR_SCREENSHOOT](/nirit/files.png)

## <img src="https://emojiapi.dev/api/v1/magnifying_glass_tilted_right/32.jpg" alt="DEEPER" height="20"/> Looking Deeper

Do you Want to Know More? **Keep Reading :D**

### <img src="https://emojiapi.dev/api/v1/eye/32.jpg" alt="VISION" height="18"/> Vision

Here the Project Vision will be explained, which shows why it was created

> [!NOTE]
> This Vision was created using my knowledge in **Scrum**

#### Problem Definition

The problem is that creating a custom desktop environment for Linux by installing package by package can take hours, up to 10 hours. In the case of a system failure or wanting to clean up by reinstalling the system, even more time is required to redo the custom desktop environment. This generates several inconveniences, including:

- **Loss of time and efficiency**: Configuring a custom desktop environment from scratch consumes a considerable amount of time, resulting in a loss of productivity.

- **Difficulty in replicating the environment**: When reinstalling the operating system or troubleshooting, replicating the exact desktop environment becomes complicated and requires remembering and manually reconfiguring all customizations.

- **Lack of automation**: Not having an automated process for configuring the environment means that each adjustment and package must be installed and configured manually, which is tedious and prone to errors.

#### Who Does It Affect?

This problem affects several types of users, including:

- **Individual users**: Users who configure their own custom desktop environments are the most affected. They experience a considerable loss of time and effort in manually installing and configuring each package, which can lead to frustration and disruption in their workflow, especially when facing system failures or deciding to reinstall the operating system.

- **Developers**: Developers who need a specific environment for their work suffer from having to spend hours configuring their development environment each time they install or reinstall the operating system. This is not only an inefficient use of time but can also affect productivity and project deadlines.

#### Impact of Not Undertaking the Project

Not developing the project can have a significant impact, which can be mentioned as follows:

- **Frustration and demotivation**: The constant need to replicate configurations after system failures or reinstalls can result in a frustrating experience, demotivating users from continuing to customize their desktop environment.

- **Frequent interruptions in workflow**: Without a solution to automate the configuration, interruptions in workflow due to operating system reinstalls will continue to be a recurring problem, negatively affecting the continuity and quality of users' work.

- **Risk of losing customizations**: In case of system failures or the need for reinstalls, users will continue to face the risk of losing all their customizations, which can lead to a negative experience and greater distrust in the stability and usability of the Linux operating system.

#### Technical Required Resources

Here will show what technical resources were necessary to create the project, ignoring the stack

##### Integrated Development Environments

[VSCODE_CONTENT]: https://img.shields.io/badge/Visual%20Studio%20Code-0066AA?style=for-the-badge&labelColor=gray
[VSCODE_URL]: https://code.visualstudio.com

| Name                                                | Used for   |
| --------------------------------------------------- | ---------- |
| [![Visual Studio Code][VSCODE_CONTENT]][VSCODE_URL] | Everything |

### <img src="https://emojiapi.dev/api/v1/speaking_head/32.jpg" alt="REQUIREMENTS" height="18"/> Requirements

Here will show the Project Requirements

> [!NOTE]
> These Requirements were created using my knowledge in **Scrum**

#### Functional Requirements

| Id    | Name                | Description                                                                            |
| ----- | ------------------- | -------------------------------------------------------------------------------------- |
| RF-01 | **Login**           | The system must allow users to log into their existing accounts                        |
| RF-02 | **Desktop**         | The system must allow users to have a desktop to work on                               |
| RF-03 | **Files**           | The system must allow users to view and work with system files                         |
| RF-04 | **Menus**           | The system must allow users to easily navigate between applications                    |
| RF-05 | **Devices**         | The system must allow users to connect removable devices and view their information    |
| RF-06 | **Terminal**        | The system must allow users to work comfortably through a terminal                     |
| RF-07 | **Audio**           | The system must allow users to listen to audio from the computer and adjust its volume |
| RF-08 | **Utilities**       | The system must allow users to have basic utilities                                    |
| RF-09 | **Browsers**        | The system must allow users to browse the internet through a browser                   |
| RF-10 | **Multimedia**      | The system must allow users to view or play their multimedia content if desired        |
| RF-11 | **Office**          | The system must allow users to work on documents and presentations if desired          |
| RF-12 | **Drivers**         | The system must allow users to have video drivers if desired                           |
| RF-13 | **IDEs**            | The system must allow users to use IDEs to write code if desired                       |
| RF-14 | **Games Launchers** | The system must allow users to play video games easily if desired                      |
| RF-15 | **Fonts**           | The system must allow users to have custom text fonts if desired                       |

#### Non-Functional Requirements

| Id     | Name                | Description                                                                 |
| ------ | ------------------- | --------------------------------------------------------------------------- |
| RNF-01 | **Usability**       | The system must ensure it is intuitive and easy to use for users            |
| RNF-02 | **Security**        | The system must ensure the protection of data against unauthorized access   |
| RNF-03 | **Scalability**     | The system must ensure it can adapt and expand without losing performance   |
| RNF-04 | **Maintainability** | The system must facilitate the task of maintaining and improving the system |

### <img src="https://emojiapi.dev/api/v1/page_with_curl/32.jpg" alt="STANDARTS" height="18"/> Standarts

The mandatory formats to work on this project will be shown here

> [!NOTE]
> These Standarts were created using my knowledge in **Scrum**

#### Programming Format

| Id    | Name          | Format                   | Language | Example         |
| ----- | ------------- | ------------------------ | -------- | --------------- |
| ST-01 | **Variables** | Name in UPPER_SNAKE_CASE | English  | $LIGHT_BLUE     |
| ST-02 | **Functions** | Name in snake_case       | English  | progress_status |

### <img src="https://emojiapi.dev/api/v1/exclamation_question_mark/32.jpg" alt="WHAT_DOES" height="18"/> What does "Nirit" install?

Here will explain what Nirit does on installation, from Nirit Core to custom settings.

#### Software

First, the software needed to create **Nirit**

##### Core

In this part, will explain the **Core Programs** that allow to **Nirit** work well

###### Login

[XORG_DOCS]: https://www.x.org/wiki/Documentation/
[LIGHTDM_DOCS]: https://github.com/canonical/lightdm
[LIGHTDM_GTK_DOCS]: https://github.com/Xubuntu/lightdm-gtk-greeter
[LIGHTDM_GTK_SETTINGS_DOCS]: https://github.com/Xubuntu/lightdm-gtk-greeter-settings

| Name                         | Description                      | Used For                    | Documentation Link                    |
| ---------------------------- | -------------------------------- | --------------------------- | ------------------------------------- |
| xorg                         | X.Org Graphic Server Package Set | Use Graphic User Interfaces | [See Docs][XORG_DOCS]                 |
| lightdm                      | Lightweight Screen Manager       | Login Screen                | [See Docs][LIGHTDM_DOCS]              |
| lightdm-gtk-greeter          | LightDM Graphic Interface        | LightDM GUI                 | [See Docs][LIGHTDM_GTK_DOCS]          |
| lightdm-gtk-greeter-settings | LightDM GTK+ Settings            | LightDM GUI Settings        | [See Docs][LIGHTDM_GTK_SETTINGS_DOCS] |

###### Desktop

[X11_DOCS]: https://packages.debian.org/bookworm/x11-xserver-utils
[PIP_DOCS]: https://pip.pypa.io/en/stable/
[XCFFIB_DOCS]: https://github.com/tych0/xcffib
[CAIROCFFI_DOCS]: https://doc.courtbouillon.org/cairocffi/stable/
[LIB_DOCS]: https://packages.debian.org/bookworm/libpangocairo-1.0-0
[PSUTIL_DOCS]: https://psutil.readthedocs.io/en/latest/
[APT_SHOW_DOCS]: https://manpages.debian.org/testing/apt-show-versions/apt-show-versions.1.es.html
[QTILE_DOCS]: https://docs.qtile.org/en/stable/index.html

| Name                | Description                        | Used For                                    | Documentation Link         |
| ------------------- | ---------------------------------- | ------------------------------------------- | -------------------------- |
| x11-xserver-utils   | X11 Server Utilities               | Have **Xrandr** to Manage Screen Resolution | [See Docs][X11_DOCS]       |
| python3-pip         | Package Installer for Python       | Install Qtile                               | [See Docs][PIP_DOCS]       |
| python3-xcffib      | XCB Python Implementation          | Qtile Dependency                            | [See Docs][XCFFIB_DOCS]    |
| python3-cairocffi   | Python Cairo's CFFI Interface      | Qtile Dependency                            | [See Docs][CAIROCFFI_DOCS] |
| libpangocairo-1.0-0 | Pango with Cairo Library           | Qtile Dependency                            | [See Docs][LIB_DOCS]       |
| python3-psutil      | Process and System Utils in Python | CPU, Memory and Net Qtile Widgets           | [See Docs][PSUTIL_DOCS]    |
| apt-show-versions   | Show APT Packages Versions         | Check Updates Qtile Widgets                 | [See Docs][APT_SHOW_DOCS]  |
| qtile               | Tiling Window Manager              | Main Window Manager                         | [See Docs][QTILE_DOCS]     |

###### Files

[ZIP_DOCS]: https://linux.die.net/man/1/zip
[UNZIP_DOCS]: https://linux.die.net/man/1/unzip
[THUNAR_DOCS]: https://docs.xfce.org/xfce/thunar/start

| Name   | Description              | Used For              | Documentation Link      |
| ------ | ------------------------ | --------------------- | ----------------------- |
| zip    | File Compressor          | Compress files in Zip | [See Docs][ZIP_DOCS]    |
| unzip  | Zip File Decompressor    | Decompress Zip Files  | [See Docs][UNZIP_DOCS]  |
| thunar | Lightweight File Manager | File Manager          | [See Docs][THUNAR_DOCS] |

###### Menus

[ROFI_DOCS]: https://davatorium.github.io/rofi/

| Name | Description               | Used For                  | Documentation Link    |
| ---- | ------------------------- | ------------------------- | --------------------- |
| rofi | App Launcher and Selector | App Launcher and Selector | [See Docs][ROFI_DOCS] |

###### Devices

[UDISKIE_DOCS]: https://github.com/coldfix/udiskie
[NTFS_DOCS]: https://github.com/tuxera/ntfs-3g
[POLICY_DOCS]: https://packages.debian.org/source/bookworm/policykit-1-gnome

| Name              | Description                     | Used For                       | Documentation Link       |
| ----------------- | ------------------------------- | ------------------------------ | ------------------------ |
| udiskie           | Automounter for Removable Media | Automounter                    | [See Docs][UDISKIE_DOCS] |
| ntfs-3g           | Read/Write NTFS Driver          | Read NTFS Disks                | [See Docs][NTFS_DOCS]    |
| policykit-1-gnome | Gnome PolicyKit Auth Agent      | Allow Mounting Disks in Thunar | [See Docs][POLICY_DOCS]  |

###### Terminal

[EXA_DOCS]: https://the.exa.website
[FISH_DOCS]: https://fishshell.com
[BAT_DOCS]: https://github.com/sharkdp/bat
[ALACRITTY_DOCS]: https://alacritty.org

| Name      | Description                        | Used For                           | Documentation Link         |
| --------- | ---------------------------------- | ---------------------------------- | -------------------------- |
| exa       | Modern File Lister                 | CLI File Lister as **ls** (alias)  | [See Docs][EXA_DOCS]       |
| fish      | Frendly and Interactive Shell      | Default User Shell                 | [See Docs][FISH_DOCS]      |
| bat       | Cat Clone with Sintax Highlighting | CLI File Reader as **cat** (alias) | [See Docs][BAT_DOCS]       |
| alacritty | GPU Accelerated Terminal Emulator  | Terminal Emulator                  | [See Docs][ALACRITTY_DOCS] |

###### Audio

[PULSEAUDIO_DOCS]: https://www.freedesktop.org/wiki/Software/PulseAudio/Documentation/
[PAMIXER_DOCS]: https://github.com/cdemoulins/pamixer

| Name       | Description                  | Used For                                       | Documentation Link          |
| ---------- | ---------------------------- | ---------------------------------------------- | --------------------------- |
| pulseaudio | Sound Server                 | Have Audio                                     | [See Docs][PULSEAUDIO_DOCS] |
| pamixer    | CLI PulseAudio Volume Driver | Volume Qtile Widget and Set-Sink Fish Function | [See Docs][PAMIXER_DOCS]    |

###### Utilities

[FLAMESHOT_DOCS]: https://flameshot.org

| Name      | Description     | Used For         | Documentation Link         |
| --------- | --------------- | ---------------- | -------------------------- |
| flameshot | Screenshot Tool | Make Screenshots | [See Docs][FLAMESHOT_DOCS] |

###### Browsers

[FIREFOX_DOCS]: https://developer.mozilla.org/en-US/docs/Mozilla/Firefox
[OPERA_DOCS]: https://www.opera.com/

| Name         | Description                      | Used For         | Documentation Link       |
| ------------ | -------------------------------- | ---------------- | ------------------------ |
| firefox-esr  | Firefox Extended Support Version | Default Browser  | [See Docs][FIREFOX_DOCS] |
| opera-stable | Opera Browser                    | Optional Browser | [See Docs][OPERA_DOCS]   |

##### Recommended

Also exists the recommended programs that Nirit can install, but these programs only would be installed in Normal Mode

###### Multimedia

[VLC_DOCS]: https://wiki.videolan.org/Documentation:Documentation
[FEH_DOCS]: https://feh.finalrewind.org

| Name | Description       | Used For                            | Documentation Link   |
| ---- | ----------------- | ----------------------------------- | -------------------- |
| vlc  | Multimedia Player | Video Player                        | [See Docs][VLC_DOCS] |
| feh  | Fast Image Viewer | Image Viewer and Wallpaper Selector | [See Docs][FEH_DOCS] |

###### Themes

[LX_DOCS]: https://github.com/lxde/lxappearance

| Name         | Description              | Used For                              | Documentation Link  |
| ------------ | ------------------------ | ------------------------------------- | ------------------- |
| lxappearance | Appearance Settings Tool | Main Theme, Icons and Cursor Selector | [See Docs][LX_DOCS] |

###### Office

[QALCULATE_DOCS]: https://qalculate.github.io
[EVINCE_DOCS]: https://help.gnome.org/users/evince/stable/
[LIBREOFFICE_DOCS]: https://documentation.libreoffice.org/en/english-documentation/
[ONLYOFFICE_DOCS]: https://github.com/ONLYOFFICE/DesktopEditors

| Name                       | Description                    | Used For              | Documentation Link           |
| -------------------------- | ------------------------------ | --------------------- | ---------------------------- |
| qalculate-gtk              | Advance Calculator             | Calculator            | [See Docs][QALCULATE_DOCS]   |
| evince                     | Document Viewer                | View PDF Files        | [See Docs][EVINCE_DOCS]      |
| libreoffice                | Free Office Suite              | Default Office Suite  | [See Docs][LIBREOFFICE_DOCS] |
| onlyoffice-desktop-editors | OnlyOffice Office Suite Editor | Optional Office Suite | [See Docs][ONLYOFFICE_DOCS]  |

##### Custom

Finally, here are custom programs that could be install optionally in Normal Mode

> [!IMPORTANT]
> These programs will **only** be installed if the user so wishes

###### Kernel

[HEADERS_DOCS]: https://packages.debian.org/bookworm/linux-headers-amd64
[IMAGE_DOCS]: https://packages.debian.org/bookworm/linux-image-amd64

| Name                | Description          | Used For                  | Documentation Link       |
| ------------------- | -------------------- | ------------------------- | ------------------------ |
| linux-headers-amd64 | Linux Kernel Headers | Nvidia Drivers Dependency | [See Docs][HEADERS_DOCS] |
| linux-image-amd64   | Linux Kernel Images  | Nvidia Drivers Dependency | [See Docs][IMAGE_DOCS]   |

###### Graphics

[MESA_DOCS]: https://packages.debian.org/bookworm/mesa-vulkan-drivers
[GLX_DOCS]: https://packages.debian.org/bookworm/libglx-mesa0
[MESA_32_DOCS]: https://packages.debian.org/bookworm/mesa-vulkan-drivers
[GL1_DOCS]: https://packages.debian.org/bookworm/libgl1-mesa-dri

| Name                     | Description                         | Used For         | Documentation Link       |
| ------------------------ | ----------------------------------- | ---------------- | ------------------------ |
| mesa-vulkan-drivers      | Mesa Vulkan Drivers                 | Steam Dependency | [See Docs][MESA_DOCS]    |
| libglx-mesa0:i386        | Mesa GLX Implementation (32-Bit)    | Steam Dependency | [See Docs][GLX_DOCS]     |
| mesa-vulkan-drivers:i386 | Mesa Vulkan Drivers (32-bit)        | Steam Dependency | [See Docs][MESA_32_DOCS] |
| libgl1-mesa-dri:i386     | Mesa OpenGL Implementation (32-bit) | Steam Dependency | [See Docs][GL1_DOCS]     |

###### Drivers

[DETECT_DOCS]: https://packages.debian.org/bookworm/nvidia-detect
[DRIVER_DOCS]: https://packages.debian.org/bookworm/nvidia-driver

| Name          | Description                    | Used For          | Documentation Link      |
| ------------- | ------------------------------ | ----------------- | ----------------------- |
| nvidia-detect | Nvidia Hardware Detection Tool | Detect Nvidia GPU | [See Docs][DETECT_DOCS] |
| nvidia-driver | Nvidia Graphics Drivers        | Nvidia Drivers    | [See Docs][DRIVER_DOCS] |

###### IDEs

[CODE_DOCS]: https://code.visualstudio.com

| Name | Description        | Used For    | Documentation Link    |
| ---- | ------------------ | ----------- | --------------------- |
| code | Source Code Editor | Programming | [See Docs][CODE_DOCS] |

###### Games Launchers

[STEAM_DOCS]: https://help.steampowered.com/en/faqs/view/099E-F5D1-8780-4778
[HEROIC_DOCS]: https://heroicgameslauncher.com

| Name                  | Description                       | Used For        | Documentation Link      |
| --------------------- | --------------------------------- | --------------- | ----------------------- |
| steam-installer       | Steam Client Installer            | Steam Installer | [See Docs][STEAM_DOCS]  |
| heroic-games-launcher | Epic Games and GOG Games Launcher | Games Launcher  | [See Docs][HEROIC_DOCS] |

#### Themes

[DARKMATTER_DOCS]: https://www.gnome-look.org/p/1603282
[ADWAITA_DOCS]: https://www.gnome-look.org/p/1247600
[COMIX_DOCS]: https://www.gnome-look.org/p/999996

| Name                      | Description                           | Used For     | Documentation Link          |
| ------------------------- | ------------------------------------- | ------------ | --------------------------- |
| Darkmatter                | Dark polished GRUB theme              | GRUB Theme   | [See Docs][DARKMATTER_DOCS] |
| Adwaita-dark              | Gnome Dark Mode Theme                 | Main Theme   | [See Docs][ADWAITA_DOCS]    |
| ComixCursors-Opaque-White | X11 mouse theme with a comics feeling | Cursor Theme | [See Docs][COMIX_DOCS]      |

#### Fonts

[UBUNTU_DOCS]: https://www.nerdfonts.com
[AGAVE_DOCS]: https://www.nerdfonts.com

| Name                  | Description                                | Used For       | Documentation Link      |
| --------------------- | ------------------------------------------ | -------------- | ----------------------- |
| Ubuntu Mono Nerd Font | Small, monospace, outline, simple font     | Qtile Bar Font | [See Docs][UBUNTU_DOCS] |
| Agave Nerd Font       | Latin characters as a base for design font | Main Font      | [See Docs][AGAVE_DOCS]  |

#### Settings

In this part, will explain the custom settings that Nirit install

##### Key Bindings

> [!NOTE]
> These Key Bindings Configurations are for Qtile

###### Windows Behavior in Layouts

| Key Binging   | What it do?                              |
| ------------- | ---------------------------------------- |
| SUPER KEY + J | Change Current Window to Previous Window |
| SUPER KEY + K | Change Current Window to Next Window     |

###### Windows Behavior Regardless of Layouts

| Key Binging    | What it do? |
| -------------- | ----------- |
| ALT GR KEY + W | Kill Window |

###### Change Between Layouts

| Key Binging      | What it do?            |
| ---------------- | ---------------------- |
| ALT GR KEY + TAB | Change Between Layouts |

###### Spawn Apps

| Key Binging        | What it do?              |
| ------------------ | ------------------------ |
| ALT GR KEY + F1    | Spawn Documentation Page |
| SUPER KEY + Return | Spawn Alacritty          |
| SUPER KEY + M      | Spawn Rofi Menu          |
| ALT GR KEY + F     | Spawn Browser            |
| ALT GR KEY + C     | Spawn Visual Studio Code |
| ALT GR KEY + S     | Make a Screenshot        |
| ALT GR KEY + T     | Spawn Thunar             |

###### Manage Volume

| Key Binging     | What it do?                   |
| --------------- | ----------------------------- |
| SUPER KEY + F9  | Mute Volume in Actual Sink    |
| SUPER KEY + F10 | Decrese Volume in Actual Sink |
| SUPER KEY + F11 | Increse Volume in Actual Sink |

###### Qtile Behavior

| Key Binging             | What it do?    |
| ----------------------- | -------------- |
| SUPER KEY + CONTROL + R | Restart Qtile  |
| SUPER KEY + CONTROL + Q | Shutdown Qtile |

##### Aliases

> [!IMPORTANT]
> These Aliases are CLI **only**, and only work with **fish** shell

| Name            | Execute                                                       | What it does?                                         |
| --------------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| ls              | exa --group-directories-first                                 | Shows the System Files Prettier and directories first |
| cat             | batcat                                                        | Shows the file prettier                               |
| tree            | exa -T                                                        | Shows the system files as a Tree                      |
| update-system   | sudo apt update && sudo apt upgrade -y && sudo apt autoremove | Updates the System Faster                             |
| install-program | sudo apt install                                              | Installs a Program                                    |
| poweroff-pc     | systemctl poweroff                                            | Shutdown the System                                   |
| restart-pc      | systemctl reboot                                              | Reboot the System                                     |

##### Functions

> [!IMPORTANT]
> These Functions are CLI **only**, and only work with **fish** shell

| Name              | What it does?                                        | Use                                          |
| ----------------- | ---------------------------------------------------- | -------------------------------------------- |
| set-wallpaper     | Set a Wallpaper for Qtile                            | set-wallpaper "Downloads/Mega Wallpaper.png" |
| set-sink          | Change the Actual Sink for Volumen Qtile Widget      | set-sink 3                                   |
| uninstall-program | Uninstall a Program and it configuration             | uninstall-program firefox-esr                |
| fix-opera         | Fix Opera's Video Codecs with updated "libffmpeg.so" | fix-opera                                    |

### <img src="https://emojiapi.dev/api/v1/new_moon/32.jpg" alt="TO_DO" height="18"/> Post Launch

Here the planned Post Launched will be shown

#### <img src="https://emojiapi.dev/api/v1/check_box_with_check/32.jpg" alt="TO_DO" height="16"/> To Do

- Add to Custom Installation the following Programs: Discord, Teams
- Add Nvidia GPU Sensor Widget in Qtile
- Make new modes to have an Only Core, Minimum, Default and Custom

#### <img src="https://emojiapi.dev/api/v1/hourglass_done/32.jpg" alt="UPDATES" height="16"/> Updates (Sorted from Newest to Oldest)

##### 1.0.0 (2024-07-19)

- Add Init Settings
- Add Nirit Installer
- Add GPL 3.0 License
- Add Readme File
- Add Nirit Documentation Page