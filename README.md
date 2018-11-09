# electron-vue-pro

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test

# install  windows-build-tools

npm install --global --production windows-build-tools

# install ffi
npm install ffi@gavignus/node-ffi#torycl/forceset-fix --save

# rebuild ref ffi
node-gyp rebuild -target=1.8.7 -arch=x64 -dist-url=https://atom.io/download/atom-shell
```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[4c6ee7b](https://github.com/SimulatedGREG/electron-vue/tree/4c6ee7bf4f9b4aa647a22ec1c1ca29c2e59c3645) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
