这是一个相对全面的react全家桶项目

## 运行项目

### `npm start` 或者 `npm run start`

项目默认在浏览器中打开[localhost:5050](localhost:5050)

如果需要修改默认端口号,进入node_modules目录,找到react-script包,修改相关配置文件.

### `npm run build`

打包命令

### `npm run eject`

**执行后是不可逆的,生成scripts目录,导出项目相关配置文件,轻易别尝试,尽量在node_modules目录中修改**

## 关于 antd
config-overrides.js文件是关于antd按需引入的配置文件.
需要安装的包:

`npm i -S react-app-rewired`;

`npm i -S babel-plugin-import`

修改的相关文件有:
##### 1.新建config-overrides.js

```
const { injectBabelPlugin } = require('react-app-rewired');
 
 module.exports = function override(config, env) {
   config = injectBabelPlugin(
     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
      config,
   );
   return config;
 };
 ```
 
 ##### 2.package.json
 ```
  "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    }
  ```
  改为:
 
 ```
 "scripts": {
     "start": "react-app-rewired start",
     "build": "react-app-rewired build",
     "test": "react-app-rewired test",
     "eject": "react-app-rewired eject"
   }
 ```
 
 ##### 3.需要引用antd组件的地方
 `import {Button} from 'antd'`
 
 ## 项目中引用less
 由于默认是sass,需要使用less时,进入react-scripts进行安装配置,跟使用webpack单独配置文件是一样的.
 安装相应的loader,配置rolues规则.