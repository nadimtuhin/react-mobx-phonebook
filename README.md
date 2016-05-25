# Try doing everything yourself from react hot boilerplate

## run in console
```sh
git clone git@github.com:gaearon/react-hot-boilerplate.git
cd react-hot-boilerplate
git checkout next
npm i babel-plugin-transform-decorators-legacy --save-dev
npm install mobx mobx-react --save
npm install
```

## add in .babelrc
```json
{
    "plugins": ["babel-plugin-transform-decorators-legacy"]
}
```