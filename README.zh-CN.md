# 菜鸟集运优惠码多语言推广单页（静态版）

已经生成可部署的完整网站：**中文 + 英语 + 日语 + 泰语 + 俄语 + 加拿大法语**。每个语言版本都是一张独立的长页面，并包含美国、澳大利亚、加拿大、日本、新加坡、泰国、俄罗斯七个优惠码。手机端适配；可搜索、一键复制。无需服务器或数据库，浏览器端只有 HTML、CSS、原生 JavaScript。

**重要说明：** 优惠码和“85折”力度来自网站发布者提供的信息，尚未独立核实官方活动公告、有效期、适用地区、用户门槛与叠加规则。站点不能自称菜鸟官方授权或承诺折扣一定生效，使用前请在菜鸟实际结算页核验。

## 最快上线（GitHub Pages 直接发布）

### 1. 配置域名（上线前必须操作）

网站默认使用占位域名 `https://YOUR-DOMAIN.example`，用于生成 `canonical`、`hreflang`、分享链接、`sitemap.xml` 和 `robots.txt`。请替换成你自己真正要绑定的 HTTPS 域名。

在本项目文件夹打开 PowerShell，执行（需要 Windows 装有 Python 3）：

```powershell
python tools/set_domain.py https://deals.example.com
```

将 `deals.example.com` 替换成你的域名。如果还没注册域名，也可以先用 GitHub Pages 的 `*.github.io` 地址测试，**但正式提交搜索引擎前务必修改为最终域名并重新部署**。

### 2. 上传 GitHub

1. 新建 GitHub 仓库，例如 `cainiao-global-coupons`。
2. 将全部内容上传到仓库根目录——**根目录就是网站根目录**（`index.html` 直接放在根目录），注意保留各级文件夹结构。
3. 可在 GitHub 仓库网页通过 Add file → Upload files 上传，也可以执行 Git 命令：

```powershell
git init
git add .
git commit -m "Initial static coupon site"
git branch -M master
git remote add origin https://github.com/你的用户名/cainiao-global-coupons.git
git push -u origin master
```

### 3. GitHub Pages 部署（无需构建）

1. 打开 GitHub 仓库 → **Settings → Pages**。
2. **Build and deployment → Source** 选择 **Deploy from a branch**。
3. 分支选 `master`（或 `main`），目录选 **`/ (root)`**，点击 **Save**。
4. 等待约 1 分钟，站点发布在 `https://你的用户名.github.io/cainiao-global-coupons/`，顺便检查 `/en/`、`/ja/` 等子页面。
5. 仓库中的 `.nojekyll` 文件会关闭 Jekyll 处理，`_headers` 等所有文件都会原样发布。
6. 页面内部链接与资源均使用相对路径（`assets/...`、`../en/`），github.io 子路径和自定义域名根路径都能正常访问；但 canonical、hreflang、sitemap 中的 URL 仍是绝对地址，正式上线前请先运行 `set_domain.py`，再在 **Settings → Pages → Custom domain** 绑定与 `site-data.json` 一致的自定义域名。
7. 正式域名上线后，检查 `/en/`、`/ja/`、`/th/`、`/ru/`、`/fr-ca/`、`/sitemap.xml`，并在 [Google Search Console](https://search.google.com/search-console/about) 提交 `https://你的域名/sitemap.xml`，也可以提交到 Bing Webmaster Tools。

**以后向该分支推送更新，GitHub Pages 会自动重新部署。**

**也可以继续使用 Cloudflare Pages：** 框架预设选 **None**、构建命令填 `exit 0`（或留空）、**输出目录填 `/`（仓库根目录）**，再在 Pages 项目中绑定自定义域名。

### 4. 修改优惠码与内容

- 统一维护优惠码、国家名称、更新日期、域名：编辑 `site-data.json`。
- 修改六种语言的文案：编辑 `tools/build.py` 中的 `T` 字典。
- 修改后在仓库根目录执行 `python tools/build.py`，生成的静态网页直接写入仓库根目录。
- 可以直接修改根目录下的 HTML，但以后重新运行生成脚本会覆盖手工编辑。
- 可选本地预览：在仓库根目录执行 `python -m http.server 8080`，浏览器打开 `http://localhost:8080`。

## 项目目录

```text
（仓库根目录即网站根目录，可直接用 GitHub Pages 发布）
index.html              # 中文首页（/）
en/index.html           # 英文
ja/index.html           # 日文
th/index.html           # 泰文
ru/index.html           # 俄文
fr-ca/index.html        # 加拿大法文
assets/                 # 页面样式、交互脚本、分享图和图标
sitemap.xml             # 搜索站点地图
robots.txt              # 搜索爬虫规则
llms.txt                # 可选的 AI 可读信息摘要（不能保证收录）
_headers                # 静态 HTTP 响应头（Pages / Cloudflare）
.nojekyll               # 关闭 GitHub Pages 的 Jekyll 处理
site-data.json          # 网站信息与优惠码
README.zh-CN.md         # 本文件
tools/build.py          # 可选：离线生成静态 HTML（输出到根目录）
tools/set_domain.py     # 一键修改部署域名
```

## GEO / SEO 的边界

结构化数据、hreflang、站点地图、FAQ 和 `llms.txt` 能帮助内容被理解或发现，但**不能保证 AI 搜索引用，也不能保证 Google 排名**。后续增长的关键不是堆关键词，而是不断补充真实核验的使用条件、每个目的地的实际操作截图、结算案例、可靠来源与持续更新时间。

本项目不包含统计脚本、跟踪像素或任何第三方 SDK。如将来增加统计、广告、推广联盟追踪或用户表单，应补充相应的告知和隐私政策。
