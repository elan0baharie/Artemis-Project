# Getting Started

## Windows / Linux Installation Instructions

* Installing Node.js

To install Node on other systems, go to the Node website, then download and install the appropriate installer for your operating system, as seen in the video associated with this lesson.

## OSX Installation Instructions

* Homebrew Installation

If you do not have Homebrew installed yet, you may install it now by copy and pasting this command:

> $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

This installs Homebrew on your device.

Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:

> $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

* Installing Node.js

On OS X systems, install Node.js through Homebrew with the following command in your home directory:

> $ brew install node

Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):

> $ node -v
v6.2.0
$ npm -v
3.10.5
(If you have an older version of Node already installed, upgrade through Homebrew by running $ brew upgrade node.)
