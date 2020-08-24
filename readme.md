# <a name='nav'>Navigation</a>

- [Description](#description)
- [Quick start](#quickstart)
- [How to use](#howto)
---
## <a name='description'>Description</a>

This is a site constructor written by html, css and clean javascript.

**Put a picture here**

-----



[Return to navigation](#nav)

## <a name='quickstart'>Quick start</a>
To quick start you have to:

1. Clone this repository by written `git clone git@github.com:voverg/start-template.git` in your console or terminal
2. Set up **Node.js** and **npm** (sets up automatically with Node.js). You can download it on official web site <https://nodejs.org/> 
3. Open the folder with cloned project template in your console or terminal
4. Write `npm i` in your console and wait for dependences will downloaded
5. That's all. Now you are ready for start develop your new project
6. Write `npm run build` in your console to build production version your project 
7. Write `npm run dev` in your console to build development version of your project(in this case building is faster but javascript files art not optimized to ES5 standard)
8. Write `npm run watch` in your console to watch changes in your project and build development version automatically
9. Write `npm run start` to run your project with a real time server

[Return to navigation](#nav) 

## <a name='howto'>How to use</a>
#### File structure
In order to use this start template for correct building, you should keep this file structure in your project:
```
  Project
  |- .gitignore
  |- readme.md
  |- package.json
  |- webpack.config.js
  |- /docs
  |- /src
    |- index.html
    |- /css
      |- style.css
    |- /fonts
    |- /img
    |- /js
      |- app.js
  |- /node_modules
```
A little bit about some folders and files in this structure:
- The  .**gitignore** file contains names of folders and files excluded git tracking
- **readme.md** contains description of the app
- **package.json** contains an information about project, including dependences and supported browsers
- **webpack.config.js** contains webpack settings
- Into **docs** folder there will build the production version of the project (structure will be as the **src** folder). This folder named **docs** for GitHub Pages (GitHub Pages requires to call production folder the same way). 
- **src** folder contains sources structure of the project (it should be the same to correct build the project)
- **node_modules** folder will be after `npm i` command in your console and will contain dependences of the project development and production

[Return to navigation](#nav)

