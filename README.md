# A basic webpack template for Cloud 9 Workspaces
This template provides babel (es2015), jQuery, SASS/SCSS for
a basic HTML web app. Hot reloading is the key to
this beauty.

## Installation
Create a new workspace.
In the "Clone from Git or Mercorial URL" input,
cut and paste the URL of this repo:

> git@github.com:benjaminboruff/basic_webpack_c9.git

Then click the green Create Workspace button at the bottom.
Wait for the workspace to come up comletely (this may take 
a while, especially on a free account).

Then click into the bash console at the bottom of the
Cloud 9 IDE, and run:

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

This removes all of the webpack HRM stuff
from the bundle.

In the bash console run:

> npm run build

This creates an honest to goodness bundle.js file 
(uglyfied) in the /build directory. The bundle.js and index.html files
can now be run on the Cloud 9 Apache webserver, or downloaded
and run from any webserver.

## Support & Documentation

https://webpack.github.io/