![Picture](http://static1.squarespace.com/static/57b77304b3db2bfb203fbf3f/t/581e02ade4fcb51e9e0bc4cd/1501254745108/?format=1500w)

# Hiring Assessment Application

* A hiring assessment application to determine whether an applicant is suitable for working remotely and fulfilling a strategy consultant role.

## Table of Contents

1. [Getting Started](#a)
    1. [Installing Atom text editor](#b)

        * [Windows / Linux Installation Instructions](#c)

          * [Installing Node.js](#d)

        * [OSX Installation Instructions](#e)

          * [Homebrew Installation](#f)

          * [Installing Node.js](#g)

    2. [Confirming Node.js installation](#h)

    3. [Installing Typescript](#i)

        1. [Node TypeScript Package](#j)

        2. [Atom TypeScript Package](#k)

2. [Viewing this Application](#l)

    1. [Clone down this application locally](#m)

    2. [Install the required dependencies](#n)

    3. [Take the application live](#o)

3. [Editing this Application](#p)

# <a name="a"></a>Getting Started

## <a name="b"></a> Installing Atom

### Atom

Atom was designed with the developer in mind by adding features and customization that help developers write their code more productively.

* Download the installer for your operating system here: https://atom.io/

## <a name="c"></a> Windows / Linux Installation Instructions

* Installing Node.js

To install Node on other systems, go to the Node website, then download and install the appropriate installer for your operating system.

## <a name="d"></a> OSX Installation Instructions

* Homebrew Installation

If you do not have Homebrew installed yet, you may install it now by copy and pasting this command:

> $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

This installs Homebrew on your device.

Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:

> $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

## Installing Git for Windows

* Download the installer to enable GitBASH on your standard command line: https://git-for-windows.github.io/

## Installing Git for Mac

> $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

> $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

> $ brew install git

## Installing Node.js

On OS X systems, install Node.js through Homebrew with the following command in your home directory:

> $ brew install node

Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):

> $ node -v

v6.2.0

> $ npm -v

3.10.5
(If you have an older version of Node already installed, upgrade through Homebrew by running

> $ brew upgrade node

)

# Node.js Confirmation

Confirm that node and npm are in place by checking versions:

Run the command

> $ node -v

in your home directory. You should receive an output of 4.0.x or higher.

Run the command

> $ npm -v

in your home directory. You should receive an output of 3.6.x or higher.

# TypeScript

To install TypeScript, Node.js and npm must be successfully installed first.

## Installing TypeScript

We need to install two packages to begin working in TypeScript:

* Node TypeScript Package

This contains the compiler and all necessary tools. We'll need Node.js and npm installed on our machines first.

We can install TypeScript globally via npm with the following command:

> $ npm install typescript -g

Then, we'll confirm the installation was successful by running:

> $ tsc -v

We should see something like this in response:

> $ Version 2.1.4

* Atom TypeScript Package

This is technically optional, but we absolutely cannot recommend it enough. This assists Atom in recognizing and properly highlighting TypeScript code, making it much easier to read.

We’ll run the following command to install

> $ apm install atom-typescript

Restart Atom for changes to take place.

- - - -

# Viewing the application

## Cloning the application locally

* Start by clicking on the Clone or Download button on this page: ![Picture](https://puu.sh/xdvNF/e0ddabb9f7.png)

* Copy the link and in your terminal enter the following:

> $ git clone https://github.com/elan0baharie/Artemis-Project.git

This clones the project into your current directory.

* In your terminal navigate to the project:

> $ cd Artemis-Project

* To install the required dependencies, open your terminal and run:

> $ npm install

> $ bower install

* Take the application live by running:

> $ ng serve

This will be hosted locally at localhost:4200 in your browser.

To stop hosting locally, use the command <kbd>Ctrl + C</kbd> on Windows or <kbd>⌘ + C</kbd> on OS X

- - - -

# Editing the Application

* Make sure you're in the project folder in your terminal

* Open the application in your Atom text editor with the following command:

> $ atom .

>> Note that there is a period following the atom command. This is telling the terminal to open all of the files in your current directory under atom.

This opens all files in the current folder in your Atom text editor

* Try modifying an assessment question:

  * In this project folder navigate to src/app/assessment like so:

  ![Picture](https://puu.sh/xdxoF/0e19087075.png)

  * Click on the assessment.component.html file, this will open it in a tab on Atom like so:

  ![Picture](https://puu.sh/xdyyj/0eab4baa8a.png)

  * Let's look at the first question in the assessment:

  ![Picture](https://puu.sh/xdyE7/da01965429.png)

  * You can change the text on this line here:

  ![Picture](http://puu.sh/xdyGF/c9b4ad7d86.png)

  * Save your changes by hitting <kbd>Ctrl + S</kbd> on Windows or <kbd>⌘ + S</kbd> on OS X

  * Host your application locally to see your changes reflected live at localhost:4200 :

  > $ ng serve
