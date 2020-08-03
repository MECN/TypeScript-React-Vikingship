#### 创建项目:
```js
npx  create-react-app vikingship --typescript
```
#### 设置vscode自动检查ts代码办法
在项目目录里创建.vscode/settings.json
```js
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```
