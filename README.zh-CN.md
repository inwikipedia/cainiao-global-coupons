# 菜鸟集运优惠码多语言推广单页（静态版）

已经生成可部署的完整网站：**中文 + 英语 + 日语 + 泰语 + 俄语 + 加拿大法语**。每个语言版本都是一张独立的长页面，并包含美国、澳大利亚、加拿大、日本、新加坡、泰国、俄罗斯七个优惠码。手机端适配；可搜索、一键复制。无需服务器或数据库，浏览器端只有 HTML、CSS、原生 JavaScript。

**重要说明：** 优惠码和“85折”力度来自网站发布者提供的信息，尚未独立核实官方活动公告、有效期、适用地区、用户门槛与叠加规则。站点不能自称菜鸟官方授权或承诺折扣一定生效，使用前请在菜鸟实际结算页核验。

## 最快上线（GitHub → Cloudflare Pages）

### 1. 配置域名（上线前必须操作）

网站默认使用占位域名 `https://YOUR-DOMAIN.example`，用于生成 `canonical`、`hreflang`、分享链接、`sitemap.xml` 和 `robots.txt`。请替换成你自己真正要绑定的 HTTPS 域名。

在本项目文件夹打开 PowerShell，执行（需要 Windows 装有 Python 3）：

```powershell
python tools/set_domain.py https://deals.example.com
```

将 `deals.example.com` 替换成你的域名。如果还没注册域名，也可以先部署到 Cloudflare 的 `*.pages.dev` 测试，**但正式提交搜索引擎前务必修改为最终域名并重新部署**。

### 2. 上传 GitHub

1. 新建 GitHub 仓库，例如 `cainiao-global-coupons`。
2. 将解压后的全部内容上传，注意保留 `public/` 文件夹。
3. 可在 GitHub 仓库网页通过 Add file → Upload files 上传，也可以执行 Git 命令：

```powershell
git init
git add .
git commit -m "Initial static coupon site"
git branch -M main
git remote add origin https://github.com/你的用户名/cainiao-global-coupons.git
git push -u origin main
```

### 3. Cloudflare Pages 部署

1. 登录 [Cloudflare](https://dash.cloudflare.com/) → **Workers & Pages**。
2. 创建 **Pages** 项目 → **Connect to Git**，授权并选择刚才的 GitHub 仓库。
3. 框架选 **None**；生产分支 `main`；构建命令填写 `exit 0`（或留空）；**输出目录务必填写 `public`**。
4. 完成首次部署，打开平台提供的 `*.pages.dev` 地址检查页面。
5. 进入 Pages 项目的 **Custom domains → Set up a domain**，添加自定义域名，并按提示完成 DNS 设置。
6. 正式域名上线后，检查 `/en/`、`/ja/`、`/th/`、`/ru/`、`/fr-ca/`、`/sitemap.xml`。
7. 在 [Google Search Console](https://search.google.com/search-console/about) 提交 `https://你的域名/sitemap.xml`，也可以提交到 Bing Webmaster Tools。

**GitHub 仓库仅存储源码，Cloudflare Pages 负责提供 HTTPS 与网页托管。** 将来在 GitHub 提交更新，Cloudflare Pages 会自动重新部署。

### 4. 修改优惠码与内容

- 统一维护优惠码、国家名称、更新日期、域名：编辑 `site-data.json`。
- 修改六种语言的文案：编辑 `tools/build.py` 中的 `T` 字典。
- 修改后执行 `python tools/build.py`，生成的静态网页写入 `public/`。
- 可以直接修改 `public/` 下 HTML，但以后重新运行生成脚本会覆盖手工编辑。
- 可选本地预览：`python -m http.server 8080 --directory public`，浏览器打开 `http://localhost:8080`。

## 项目目录

```text
public/                 # 直接发布的完整静态网站
  index.html            # 中文首页
  en/index.html         # 英文
  ja/index.html         # 日文
  th/index.html         # 泰文
  ru/index.html         # 俄文
  fr-ca/index.html      # 加拿大法文
  assets/               # 页面样式、交互脚本、分享图和图标
  sitemap.xml           # 搜索站点地图
  robots.txt            # 搜索爬虫规则
  llms.txt              # 可选的 AI 可读信息摘要（不能保证收录）
  _headers              # Cloudflare Pages 静态 HTTP 响应头
site-data.json          # 网站信息与优惠码
README.zh-CN.md         # 本文件
tools/build.py          # 可选：离线生成静态 HTML
tools/set_domain.py     # 一键修改部署域名
```

## GEO / SEO 的边界

结构化数据、hreflang、站点地图、FAQ 和 `llms.txt` 能帮助内容被理解或发现，但**不能保证 AI 搜索引用，也不能保证 Google 排名**。后续增长的关键不是堆关键词，而是不断补充真实核验的使用条件、每个目的地的实际操作截图、结算案例、可靠来源与持续更新时间。

本项目不包含统计脚本、跟踪像素或任何第三方 SDK。如将来增加统计、广告、推广联盟追踪或用户表单，应补充相应的告知和隐私政策。
