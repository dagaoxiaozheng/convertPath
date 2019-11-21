1. 在 yarn 官网 install yarn

2. yarn init

3. yarn install

4. 在 test 目录下添加自己要转化的 svg 文件

5. 修改 index.js 中 'SVGParser.parse('./test/**_要转化的 svg 文件文件名_**', {...})'

6. yarn run start

> 注意 : 该转化工具不支持 rx, cx, ry, cy 等参数为小数，只支持整数
