# LZY-HomePage 部署说明

## 1. 静态部署（推荐：GitHub Pages、阿里云OSS、腾讯云COS、Vercel等）

本项目为纯静态网站，无需后端，直接部署即可。

### 目录结构
- 所有页面均为 HTML 文件
- 样式统一在 `styles.css`
- 交互脚本在 `js/` 文件夹
- 图片、资源在各自文件夹

### 部署步骤
1. **推送到 GitHub 仓库**
   - 推荐仓库名：`LZY-HomePage`
2. **启用 GitHub Pages**
   - 仓库设置 → Pages → 选择 `main` 分支和根目录
   - 等待几分钟，访问 `https://用户名.github.io/LZY-HomePage/`
3. **如需自定义域名**
   - 在仓库根目录添加 `CNAME` 文件，内容为你的域名
   - 在域名服务商设置 CNAME 解析到 `用户名.github.io`
4. **其他平台部署**
   - 直接上传所有文件到云存储或静态托管平台
   - 保证 `index.html` 为首页

## 2. 本地预览

```bash
# 进入项目目录
cd LZY-HomePage
# 启动本地服务器（Python3）
python -m http.server 8000
# 浏览器访问 http://localhost:8000/Main.html
```

## 3. 部署注意事项
- 已添加 `.nojekyll` 文件，确保 GitHub Pages 支持 js/css 文件夹
- 所有资源路径均为相对路径，适合任意静态托管
- 如需 HTTPS，建议使用云平台或自定义域名

## 4. 目录说明
- `Main.html`：主页
- 其他 HTML：各功能页面
- `styles.css`：全局样式
- `js/`：交互脚本
- `people/`、`publications/`：资源文件夹

## 5. 问题反馈
如有部署问题，请联系项目维护者或在 GitHub Issues 提交反馈。
