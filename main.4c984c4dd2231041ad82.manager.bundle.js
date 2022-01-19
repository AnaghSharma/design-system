(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1023:function(module,exports,__webpack_require__){"use strict";__webpack_require__(65).addons.setConfig({refs:{"rich-text-editor":{id:"rich-text-editor",title:"Rich Text Editor",url:"https://innovaccer.github.io/mds-rich-text-editor",type:"server-checked"},"mds-helpers":{id:"mds-helpers",title:"MDS Helpers",url:"https://innovaccer.github.io/mds-helpers",type:"server-checked"}}})},1035:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var public_api=__webpack_require__(65),create=__webpack_require__(546),package_0=__webpack_require__(545),primary=Object(create.create)({base:"light",colorPrimary:"#0000001a",colorSecondary:"deepskyblue",appBg:"white",appContentBg:"white",appBorderColor:"#0000001a",appBorderRadius:4,fontBase:'"Nunito Sans", "Open Sans", sans-serif',fontCode:"monospace",textColor:"black",textInverseColor:"rgba(255,255,255,0.9)",barTextColor:"silver",barSelectedColor:"black",barBg:"white",inputBg:"white",inputBorder:"silver",inputTextColor:"black",inputBorderRadius:4,brandTitle:"Masala Design System v".concat(package_0.version),brandUrl:"https://github.com/innovaccer/design-system/"});public_api.default.setConfig({theme:primary})},545:function(module){module.exports=JSON.parse('{"name":"@innovaccer/design-system","version":"2.8.1-0","description":"React components library project for Innovaccer Design System","main":"dist/index.umd.js","module":"dist/index.esm.js","types":"dist/core/index.type.d.ts","directories":{"css":"css"},"scripts":{"chromatic":"chromatic","test":"jest --coverage","test:ci":"jest --onlyChanged","start":"start-storybook -p 5000","dev":"concurrently --kill-others --raw \\"npm run watch-css\\" \\"npm run start\\"","storybook":"start-storybook","build-storybook":"build-storybook -c .storybook -o .dist --loglevel error","deploy-storybook":"storybook-to-ghpages","setup-css-dev":"./scripts/setup-local-css.sh","pre-commit":"lint-staged","lint:check":"eslint ./core --ext .tsx,.ts","lint":"npm run lint:check -- --fix","prettier:check":"prettier --config ./.prettierrc --check","prettier":"prettier --config ./.prettierrc --write \'css/src/**/*.css\'","build-css":"gulp --gulpfile css/gulpfile.js build","clean-css":"gulp --gulpfile css/gulpfile.js clean","watch-css":"gulp --gulpfile css/gulpfile.js build && gulp --gulpfile css/gulpfile.js watch","build-js":"rm -rf dist/.lib && rollup -c","build-type":"rm -rf .lib && tsc -b tsconfig.type.json","build":"npm run build-css && npm run build-js","version":"./scripts/version.sh","prepare":"husky install","generate-types":"node node_modules/.bin/dts-bundle-generator --config dts.config.js"},"author":"Innovaccer","license":"MIT","devDependencies":{"@babel/cli":"^7.8.4","@babel/core":"^7.8.7","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/preset-env":"^7.8.7","@babel/preset-typescript":"^7.8.3","@commitlint/cli":"^12.1.4","@commitlint/config-conventional":"^12.1.4","@rollup/plugin-alias":"^3.0.1","@rollup/plugin-commonjs":"^11.0.2","@rollup/plugin-json":"^4.0.2","@rollup/plugin-node-resolve":"^7.1.1","@rollup/plugin-replace":"^2.3.3","@rollup/plugin-typescript":"^5.0.2","@storybook/addon-a11y":"6.4.8","@storybook/addon-actions":"6.4.8","@storybook/addon-backgrounds":"6.4.8","@storybook/addon-controls":"6.4.8","@storybook/addon-docs":"6.4.8","@storybook/addon-essentials":"6.4.8","@storybook/addon-knobs":"6.1.21","@storybook/addon-toolbars":"6.4.8","@storybook/addon-viewport":"6.4.8","@storybook/preset-typescript":"3.0.0","@storybook/react":"6.4.8","@storybook/storybook-deployer":"2.8.10","@testing-library/jest-dom":"^5.14.1","@testing-library/react":"^10.4.7","@types/jest":"^24.9.1","@types/js-beautify":"^1.13.3","@types/lz-string":"^1.3.34","@types/react-dom":"^16.9.4","@types/throttle-debounce":"^2.1.0","@typescript-eslint/eslint-plugin":"^5.0.0","@typescript-eslint/parser":"^5.0.0","all-contributors-cli":"^6.20.0","autoprefixer":"^9.7.3","babel-loader":"^8.0.6","babel-plugin-transform-object-rest-spread":"^6.26.0","brotli":"^1.3.2","chromatic":"^5.9.0","commitlint":"^12.1.4","concurrently":"^5.1.0","dts-bundle-generator":"5.9.0","eslint":"^7.31.0","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-prettier":"^4.0.0","eslint-plugin-react":"^7.26.1","eslint-plugin-react-hooks":"^4.2.0","fork-ts-checker-webpack-plugin":"^4.0.0-beta.4","gulp":"^4.0.2","gulp-clean":"^0.4.0","gulp-concat":"^2.6.1","gulp-postcss":"^8.0.0","gulp-sourcemaps":"^2.6.5","husky":"^7.0.1","install":"^0.13.0","jest":"^24.9.0","jest-environment-jsdom-fifteen":"^1.0.2","lint-staged":"^10.5.4","lz-string":"^1.4.4","npm":"^6.14.7","postcss-color-mod-function":"^3.0.3","prettier":"^2.3.2","react":"^16.12.0","react-docgen-typescript-loader":"^3.6.0","react-is":"^16.12.0","react-live":"^2.2.2","rollup":"^2.0.6","rollup-plugin-babel":"^4.4.0","rollup-plugin-gzip":"^2.5.0","rollup-plugin-node-builtins":"^2.1.2","rollup-plugin-uglify":"^6.0.4","ts-jest":"^24.3.0","ts-loader":"^6.2.1","tslint":"^6.0.0-beta0","tslint-config-airbnb":"^5.11.2","tslint-config-prettier":"^1.18.0","tslint-react":"^4.1.0","ttypescript":"^1.5.10","typescript":"^3.7.4","typescript-eslint-parser":"^22.0.0","typescript-transform-paths":"^1.1.14","immer":">=9.0.6","trim":">=0.0.3","node-notifier":">=8.0.1","bl":">=1.2.3"},"dependencies":{"classnames":"^2.3.1","core-js":"^3.9.1","js-beautify":"1.10.3","react-dom":"^16.8.6","react-dynamic-virtual-scroll":"^1.3.0","react-popper":"^1.3.7","throttle-debounce":"^2.1.0","utility-types":"^3.10.0"},"bugs":"https://github.com/innovaccer/design-system/issues","homepage":"https://innovaccer.github.io/design-system","keywords":["React","Design System","Typescript","Innovaccer"],"repository":"github:innovaccer/design-system","lint-staged":{"core/**/*.{tx,tsx}":["npm run lint:check"],"css/src/**/*.css":["npm run prettier:check"]}}')},573:function(module,exports,__webpack_require__){__webpack_require__(574),__webpack_require__(1035),__webpack_require__(1025),__webpack_require__(1036),__webpack_require__(1032),__webpack_require__(1030),__webpack_require__(1029),__webpack_require__(1031),__webpack_require__(1028),__webpack_require__(1033),__webpack_require__(1034),__webpack_require__(1027),__webpack_require__(979),module.exports=__webpack_require__(1023)},640:function(module,exports){}},[[573,3,4]]]);