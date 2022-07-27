## About

A template for writing [NPM](https://www.npmjs.com/) packages for use in Nodejs and browser-based CDNs.

## Start

Look at all the files for the words `CHANGE_IT` - you need to replace them with your own.

## Uploading to [NPM](https://www.npmjs.com/)

- `.gitignore` ignores the build folder, and `.npmignore` ignores almost everything except it.
- The `npm run build` builds `index.js`, `index.min.js` and `index.d.ts` and `maps`.

```bash
$ npm install
$ npm run build
$ npm publish
```

Using CDN as an example [UNPKG](https://unpkg.com/), which takes an assembly from [NPM](https://www.npmjs.com/) package.

```html

<script src="https://unpkg.com/package-name"></script>
<!-- or -->
<script src="https://unpkg.com/package-name.mis.js"></script>
```
