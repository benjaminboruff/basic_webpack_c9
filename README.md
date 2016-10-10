# A basic webpack template for Cloud 9 Workspaces
This template provides babel (es2015), jQuery, SASS/SCSS for
a basic web app. Hot reloading is the key to
this beauty.

## Installation
Create a new workspace.

### Option A
In the "Clone from Git or Mercurial URL" input,
cut and paste the URL of this repo:

> https://github.com/benjaminboruff/basic_webpack_c9

Then click the green Create Workspace button at the bottom.
Wait for the workspace to come up completely (this may take 
a while).

### Option B
1. Log into Cloud9
2. [![Open in Cloud9](https://img.shields.io/badge/Open%20in-Cloud9-blue.svg?style=flat-square)](https://c9.io/auth/github?r=https%3A%2F%2Fc9.io%2Fopen%2F%3Fclone_url%3Dhttps%253A%252F%252Fgithub.com%252Fbenjaminboruff%252Fbasic_webpack_c9.git)

I recommend using Node.js Current; it seems faster installing and
running Node modules, but Cloud 9's installed version works fine.

#### (*** Optional Node.js Current installation ***) 
To install Node Current, click into the bash console at
the bottom of the Cloud 9 IDE, and run:

> nvm install node

#### (*** End Option ***)

## Install required Node modules
In the bash console run:

> npm install

It will take a while for all the Node modules to download
and install.

## Run the development server with hot reload
In the bash console run:

> npm run dev

At the top of the Cloud 9 IDE, click the
Preview button (between Support and Run) and
select Preview Running Application

Modify the files in /src and enjoy!

## Create a "production" build that can be run on a webserver

The "build" script uses a different webpack config file than
"dev". This creates a bundle.js file devoid of webpack's HMR
code that is only needed for development using the dev-server
in hot reload mode.

In the bash console run:

> npm run build

This creates an honest to goodness bundle.js file 
in /build. The bundle.js and index.html files
can now be run on the Cloud 9 Apache webserver, or downloaded
and served from any webserver.

## Support & Documentation

https://webpack.github.io/
