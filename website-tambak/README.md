## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

It uses Sass (with .scss). The styles are loaded at the template level with `node-sass-chokidar` css preprocessor

Dependencies are handled by **npm**.

## Installation

### Clone repo

```bash
# clone the repo
$ git clone https://github.com/coreui/coreui-free-react-admin-template.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

### Copy and Paste

Copy all your files to your project folder and then,

```bash
# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

### Usage

`npm i` - to install dependencies

## Scripts

`npm start` for developing (it runs webpack-dev-server)  
`npm run build` to run a dev build

see also:
[CRA docs](https://create-react-app.dev/docs/getting-started)

### Basic usage

```bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

```bash
# build for production with minification
$ npm run build
```

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## File Structure

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
website-tambak
├── public/          #static files
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/      #assets - js icons object
│   ├── containers/  #container source - template layout
|   │   ├── _nav.js  #sidebar config
|   │   └── ...
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── polyfill.js
│   ├── index.js
│   ├── routes.js    #routes config
│   └── store.js     #template state example
│
└── package.json
```

## Issues

Before opening an issue:

- [Search for duplicate or closed issues](https://github.com/coreui/coreui-free-react-admin-template/issues?utf8=%E2%9C%93&q=is%3Aissue)
- Prepare a [reduced test case](https://css-tricks.com/reduced-test-cases/) for any bugs

When asking general "how to" questions:

- Please do not open an issue here

When reporting a bug, include:

- Operating system and version (Windows, Mac OS X, Android, iOS, Win10 Mobile)
- Browser and version (Chrome, Firefox, Safari, IE, MS Edge, Opera, Android Browser)
- Reduced test cases and potential fixes using [CodePen](https://codepen.io/) or [JS Bin](https://jsbin.com/)

When suggesting a feature, include:

- As much detail as possible for what we should add and why it's important to CoreUI Admin Template
- Relevant links to prior art, screenshots, or live demos whenever possible
