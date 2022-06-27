module.exports = {
  write: true,
  prefix: '^',
  test: [],
  dep: ['@babel/core', '@babel/eslint-parser','@babel/plugin-proposal-class-properties','@babel/plugin-proposal-decorators','@babel/preset-env','@babel/preset-react','@babel/preset-typescript','@typescript-eslint/eslint-plugin','@typescript-eslint/parser','chalk','eslint','eslint-config-prettier','eslint-formatter-pretty','eslint-plugin-prettier','eslint-plugin-babel','eslint-plugin-jest','eslint-plugin-promise','eslint-plugin-react','eslint-plugin-react-hooks','eslint-plugin-unicorn','fast-glob','os-locale','prettier','prettier-plugin-organize-imports','prettier-plugin-packagejson','prettier-plugin-two-style-order','stylelint','stylelint-config-css-modules','stylelint-config-prettier','stylelint-config-standard','stylelint-declaration-block-no-ignored-properties','typescript'],
  devdep: ['copyfiles', 'cross-env', 'np', 'rimraf'],
  exclude: ['./test/fixtures', './dist'],
};
