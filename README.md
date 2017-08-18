![Picture](http://static1.squarespace.com/static/57b77304b3db2bfb203fbf3f/t/581e02ade4fcb51e9e0bc4cd/1501254745108/?format=1500w)

# Hiring Assessment Application

* A hiring assessment application to determine whether an applicant is suitable for working remotely and fulfilling a strategy consultant role.

## Table of Contents

1. Getting Started
    1. Installing Atom text editor

        * Windows / Linux Installation Instructions

          * Installing Node.js

        * OSX Installation Instructions

          * Homebrew Installation

          * Installing Node.js

    2. Confirming Node.js installation

    3. Installing Typescript

        1. Node TypeScript Package

        2. Atom TypeScript Package

    4. 



# Getting Started

## Installing Atom

### Atom

Atom was designed with the developer in mind by adding features and customization that help developers write their code more productively.

* Download the installer for your operating system here: https://atom.io/

## Windows / Linux Installation Instructions

* Installing Node.js

To install Node on other systems, go to the Node website, then download and install the appropriate installer for your operating system.

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
