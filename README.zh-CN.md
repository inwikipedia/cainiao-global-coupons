# 菜鸟集运优惠码多语言推广单页（静态版）

已经生成可部署的完整网站：**中文 + 英语 + 日语 + 泰语 + 俄语 + 加拿大法语**六个语言首页，以及 **100 篇独立 GEO/SEO 指南**（中文 80 篇、英文 20 篇）。每个语言首页、两个指南库首页和全部 100 篇文章都包含美国、澳大利亚、加拿大、日本、新加坡、泰国、俄罗斯七个优惠码；文章页在标题下方用高对比色条重复展示全部代码，并自动高亮本文对应目的地，均可一键复制。手机端适配；可搜索。无需服务器或数据库，浏览器端只有 HTML、CSS、原生 JavaScript。

**重要说明：** 优惠码和“85折”力度来自网站发布者提供的信息，尚未独立核实官方活动公告、有效期、适用地区、用户门槛与叠加规则。站点不能自称菜鸟官方授权或承诺折扣一定生效，使用前请在菜鸟实际结算页核验。

## 最快上线（GitHub Pages 直接发布）

### 1. 配置域名（上线前必须操作）

当前仓库已在 `site-data.json` 中配置为 `https://cainiao-coupons.biggemedtech.com`，`canonical`、`hreflang`、分享链接、`sitemap.xml`、`sitemap-guides.xml` 和 `llms.txt` 都使用该域名。如需更换，在项目文件夹打开 PowerShell 执行（需要 Python 3）：

```powershell
python tools/set_domain.py https://deals.example.com
```

将 `deals.example.com` 替换成你的域名。`set_domain.py` 会更新 `site-data.json`、六个语言首页和 `sitemap.xml`，然后自动调用 `node tools/build-guides.mjs` 同步 100 篇指南的 canonical 与 `sitemap-guides.xml`。如果本机没有 Node.js，脚本会提示你稍后手动执行该命令。

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
7. 正式域名上线后，检查 `/en/`、`/ja/`、`/th/`、`/ru/`、`/fr-ca/`、`/guides/`、`/en/guides/`、`/sitemap.xml` 和 `/sitemap-guides.xml`，并在 [Google Search Console](https://search.google.com/search-console/about) 提交两个站点地图，也可以提交到 Bing Webmaster Tools。

**以后向该分支推送更新，GitHub Pages 会自动重新部署。**

**也可以继续使用 Cloudflare Pages：** 框架预设选 **None**、构建命令填 `exit 0`（或留空）、**输出目录填 `/`（仓库根目录）**，再在 Pages 项目中绑定自定义域名。

### 4. 修改优惠码与内容

- 统一维护优惠码、国家名称、更新日期、域名：编辑 `site-data.json`，然后依次执行 `python tools/build.py` 和 `node tools/build-guides.mjs`。
- 修改六种语言的首页文案：编辑 `tools/build.py` 中的 `T` 字典。
- 修改 100 篇指南：编辑 `content/` 下对应模块（`zh-unboxing.mjs`、`zh-compare.mjs`、`zh-reverse.mjs`、`zh-tutorial.mjs`、`en-cost.mjs`），然后执行 `node tools/build-guides.mjs`。生成器强制要求正好 100 篇、slug 唯一、同语言相关链接可解析；增删文章时需同步更新数量校验与关联链接。
- `tools/build.py` 负责六个首页、`sitemap.xml` 和 `robots.txt`；`tools/build-guides.mjs` 负责指南页、两个指南中心页、`sitemap-guides.xml` 和 `llms.txt`。`build.py` 不再覆盖 `llms.txt`，单独运行不会清掉指南索引。
- 可以直接修改根目录下的 HTML，但以后重新运行生成脚本会覆盖手工编辑。
- 可选本地预览：在仓库根目录执行 `python -m http.server 8080`（或任意静态服务器），浏览器打开 `http://localhost:8080`。

## 项目目录

```text
（仓库根目录即网站根目录，可直接用 GitHub Pages 发布）
index.html              # 中文首页（/）
en/index.html           # 英文
ja/index.html           # 日文
th/index.html           # 泰文
ru/index.html           # 俄文
fr-ca/index.html        # 加拿大法文
guides/index.html       # 中文指南中心（/guides/）
guides/<slug>/          # 80 篇中文指南
en/guides/index.html    # 英文指南中心（/en/guides/）
en/guides/<slug>/       # 20 篇英文指南
content/                # 指南正文源文件
  zh-unboxing.mjs       # 20 篇开箱 VLOG 脚本
  zh-compare.mjs        # 18 篇集运对比
  zh-reverse.mjs        # 22 篇反向海淘攻略
  zh-tutorial.mjs       # 20 篇集运教程
  en-cost.mjs           # 20 篇英文省钱/优惠码指南
assets/                 # 页面样式、交互脚本、分享图和图标
assets/guide.css        # 指南页与中心页样式
sitemap.xml             # 六个语言首页的站点地图
sitemap-guides.xml      # 两个指南中心 + 100 篇指南
robots.txt              # 搜索爬虫规则
llms.txt                # AI 可读信息摘要（不能保证收录）
_headers                # 静态 HTTP 响应头（Pages / Cloudflare）
.nojekyll               # 关闭 GitHub Pages 的 Jekyll 处理
site-data.json          # 网站信息与优惠码
README.zh-CN.md         # 本文件
tools/build.py          # 可选：生成六个语言首页
tools/build-guides.mjs  # 可选：生成 100 篇指南与指南站点地图
tools/set_domain.py     # 一键修改部署域名
```

## 指南库的编辑规则

- 中文指南走 `/guides/<slug>/`，英文指南走 `/en/guides/<slug>/`，每个 URL 独立可索引。
- 每篇包含目录、要点、表格/步骤、FAQ、同语言相关阅读与免责声明，并输出 `Article`、`BreadcrumbList`、`FAQPage`（部分页面含 `HowTo`）结构化数据。
- 开箱内容写成“可照着拍的脚本”，不虚构作者本人购买或收货经历。
- 对比内容不编造竞品价格、时效或负面案例，只从合单、追踪、目的地覆盖等结构性维度说明菜鸟优势。
- 关税/免税页不写死可能变化的免征额，改为引导读者查看 CBP、ABF、CBSA、日本税关等一手来源。
- 优惠码与“85折”始终标注为发布者提供、未经独立核实，不承诺一定生效。
- 生成器要求正好 100 篇；新增或删除文章时，需要同步更新数量校验、相关链接和中心页文案。

## GEO / SEO 的边界

结构化数据、hreflang、站点地图、FAQ 和 `llms.txt` 能帮助内容被理解或发现，但**不能保证 AI 搜索引用，也不能保证 Google 排名**。后续增长的关键不是堆关键词，而是不断补充真实核验的使用条件、每个目的地的实际操作截图、结算案例、可靠来源与持续更新时间。

本项目不包含统计脚本、跟踪像素或任何第三方 SDK。如将来增加统计、广告、推广联盟追踪或用户表单，应补充相应的告知和隐私政策。
