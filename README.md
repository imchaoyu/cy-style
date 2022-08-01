<!-- @format -->

# cy-style

基于[@umijs/fabric](https://github.com/umijs/fabric)代码规范修改，感谢umijs团队。

# Use

安装

```bash
npm i cy-style --save-dev
yarn add cy-style -D
```

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('cy-style/dist/eslint')],

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```js
module.exports = {
  extends: [require.resolve('cy-style/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```js
const cyStyle = require('cy-style');

module.exports = {
  ...cyStyle.prettier,
};
```
