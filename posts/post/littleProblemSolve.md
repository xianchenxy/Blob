Q: idea webstorm识别vite别名路径方法

A:在项目根目录下的tsconfig.json,或者jsconfig.json添加如下代码，没有这两个文件就新建一个
如添加对于`@posts`的别名路径识别
```json
{
  "paths": {
    "@/*": ["src/*"],
    "@posts/*": ["posts/*"]
  }
}
```