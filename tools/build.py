#!/usr/bin/env python3
"""Offline authoring generator; the deployed site contains only static HTML/CSS/JS.
Run: python tools/build.py
"""
import json
import html
import pathlib
import xml.etree.ElementTree as ET

ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=ROOT
D=json.loads((ROOT/'site-data.json').read_text(encoding='utf-8'))
BASE=D['site_url'].rstrip('/')
LOCALES=['zh','en','ja','th','ru','fr-ca']
PATHS={'zh':'/','en':'/en/','ja':'/ja/','th':'/th/','ru':'/ru/','fr-ca':'/fr-ca/'}
LANG={'zh':'zh-CN','en':'en','ja':'ja','th':'th','ru':'ru','fr-ca':'fr-CA'}
LABEL={'zh':'简体中文','en':'English','ja':'日本語','th':'ไทย','ru':'Русский','fr-ca':'Français (CA)'}
T={
'zh':{
 'title':'菜鸟集运85折优惠码｜美国、澳洲、加拿大、日本、新加坡、泰国、俄罗斯',
 'description':'整理菜鸟集运发往美国、澳大利亚、加拿大、日本、新加坡、泰国、俄罗斯的优惠码，一键复制 AUONLY、USONLY、CAONLY、JPONLY、SG5BSE、THONLY、RUONLY。活动须以结算页为准。',
 'nav_codes':'查看优惠码','nav_how':'使用步骤','overline':'7 个目的地 · 优惠码速查','hero_a':'寄往海外，','hero_b':'运费85折*','hero_c':'优惠码参考','lead':'为海外淘宝购物和中国集运用户整理 7 个国家的运费优惠码。选择目的地、复制代码，并在菜鸟结算页面检查是否生效。',
 'benefit1':'7 个国家','benefit2':'一键复制','benefit3':'无需注册','cta_codes':'查看各国优惠码','cta_how':'如何使用','hero_disclaimer':'* 85折为提供者所述活动力度，尚未独立核实。是否可用、减免金额与适用线路均以实际结算页面为准。',
 'ticket_over':'SHIPPING PROMO GUIDE','ticket_discount':'运费参考折扣','ticket_code_label':'美国示例代码','kicker_codes':'目的地 / 优惠码','codes_title':'选择你要寄往的国家','codes_desc':'代码区分目的地，建议原样复制。此页面不要求提供订单号、手机号或登录凭据。',
 'search':'搜索国家或优惠码','discount_tag':'85折*','code_label':'运费优惠码','copy':'复制','card_note':'是否适用以结算页为准','nothing':'没有找到对应国家或优惠码。','code_note':'代码由页面发布者提供，未获得公开官方材料独立核实；请以菜鸟实际结算和活动细则为准，不保证优惠、有效期或可叠加使用。',
 'kicker_how':'使用指南','how_title':'如何尝试使用优惠码','how_desc':'下列步骤仅作操作参考，实际入口和规则可能随国家、线路及 App 版本变化。',
 'steps':[('打开菜鸟官方集运服务','访问菜鸟官方集运信息页面或在正规应用商店打开菜鸟 App。'),('选择收货目的地','确认目的国家、包裹合单及可用运输线路。'),('填写匹配的优惠码','如果结算页提供“优惠码 / Promo Code”输入框，粘贴对应代码并尝试应用。'),('付款前核对优惠','确认系统是否接受代码，并检查运费折扣、附加费用和最终应付金额。')],
 'official_title':'菜鸟官方服务信息','official_note':'外部链接将打开菜鸟自有域名；本优惠码指南为独立整理页面。','official_cta':'查看官方集运页面 ↗',
 'kicker_faq':'常见问题','faq_title':'使用前你可能想知道','faq':[
 ('这些优惠码确定有效吗？','目前没有独立核实这 7 个代码的有效期、使用门槛及资格限制。请在对应目的地的正式结算页面实际测试。'),
 ('菜鸟集运优惠码在哪里填写？','在可用的国际集运结算流程中，寻找“优惠码”“Promo Code”或同类入口；如未显示输入框，可能是当前服务、地区或账户不支持。'),
 ('85折可以与其他活动叠加吗？','无法保证。是否满减、封顶、适用新老用户以及可否与其他优惠叠加，应以菜鸟当期规则及结算结果为准。'),
 ('这是菜鸟官方网站或官方授权渠道吗？','不是。本页面是独立的优惠码信息指南，与菜鸟不存在已核实的官方隶属或授权关系。访问菜鸟实际服务请使用官方域名。')],
 'modified':'页面内容更新：2026-10-13（不代表优惠码当日已核验）','footer':'独立优惠码信息整理站，非菜鸟官方网站。本网站不收集订单信息，不处理支付。菜鸟及相关商标归其权利人所有。','footer_link':'官方服务网址','copied':'已复制：','copy_failed':'请手动复制：',
 },
'en':{
 'title':'Cainiao Shipping Promo Codes: Australia, USA, Canada, Japan & More',
 'description':'Cainiao shipping coupon codes for Australia AUONLY, USA USONLY, Canada CAONLY, Japan JPONLY, Singapore SG5BSE, Thailand THONLY, and Russia RUONLY. Check the offer at checkout.',
 'nav_codes':'Promo codes','nav_how':'How to use','overline':'7 destinations · Shipping code directory','hero_a':'Ship farther. ','hero_b':'15% off*','hero_c':'promo code guide','lead':'Find destination-specific Cainiao consolidated shipping promo codes for packages shipped from China. Copy a code and check whether it applies at checkout.','benefit1':'7 destinations','benefit2':'One-click copy','benefit3':'No sign-up','cta_codes':'Browse promo codes','cta_how':'How it works','hero_disclaimer':'* The advertised 15% discount is user-submitted and not independently verified. Eligibility, shipping routes, and final savings are determined at Cainiao checkout.','ticket_over':'SHIPPING PROMO GUIDE','ticket_discount':'Advertised shipping discount','ticket_code_label':'USA sample code','kicker_codes':'Destinations / codes','codes_title':'Choose your shipping destination','codes_desc':'Each destination has a different code. Copy the code as shown. We never ask for payment or account credentials.','search':'Search country or code','discount_tag':'15% off*','code_label':'Shipping promo code','copy':'Copy','card_note':'Confirm eligibility at checkout','nothing':'No matching destinations or codes.','code_note':'These codes were supplied to this guide, not verified against public official offer terms. Discount availability, duration, account eligibility and stacking are not guaranteed.','kicker_how':'Quick guide','how_title':'How to try a promo code','how_desc':'These steps are general guidance. The exact shipping flow and coupon field can vary by region, service, and app version.','steps':[('Open the Cainiao service','Visit Cainiao’s official consolidated shipping information site or open its app from an official app store.'),('Choose your destination','Select the delivery country and available international consolidation/shipping option.'),('Enter the matching code','If a “Promo Code” or coupon field appears during shipping checkout, paste the destination’s code.'),('Verify before payment','Check that the code is accepted and review shipping charges, other fees, and the final payable amount.')],
 'official_title':'Official Cainiao service information','official_note':'This link goes to a Cainiao-owned domain. This coupon guide is independent.','official_cta':'Visit official shipping site ↗','kicker_faq':'Frequently asked questions','faq_title':'What to know before using a code','faq':[
 ('Are these Cainiao shipping codes guaranteed to work?','No. We have not independently verified the codes, expiry dates, minimum spend, or account restrictions. Test the applicable code on the actual checkout page.'),
 ('Where do I enter the Cainiao promo code?','Look for a “Promo Code” or coupon field in the eligible international shipping checkout flow. Some regions, services or accounts may not display this field.'),
 ('Can I combine the 15% discount with other coupons?','It is not confirmed. Any cap, user restrictions, stacking rules, or route exclusions depend on Cainiao’s current checkout terms.'),
 ('Is this an official Cainiao website?','No. This is an independently maintained informational site, with no verified official affiliation or authorization from Cainiao. Please use the official domain for shipping transactions.')],
 'modified':'Page content updated: 2026-10-13 (not a code-verification date)','footer':'Independent shipping coupon information guide, not an official Cainiao website. No orders or payments are processed here. Trademarks belong to their owners.','footer_link':'Official service','copied':'Copied:','copy_failed':'Copy manually:',
 },
'ja':{
 'title':'菜鳥（Cainiao）国際配送クーポンコード｜日本・米国・豪州など7か国',
 'description':'Cainiao国際転送・まとめ配送向けクーポンコード一覧。日本JPONLY、米国USONLY、オーストラリアAUONLY、カナダCAONLY、シンガポールSG5BSE、タイTHONLY、ロシアRUONLY。割引は決済画面で要確認。',
 'nav_codes':'コード一覧','nav_how':'使い方','overline':'配送先7か国 · コード一覧','hero_a':'海外配送をもっとお得に。','hero_b':'15%割引*','hero_c':'コードガイド','lead':'中国からの国際まとめ配送で使えるとされる、配送先別のCainiaoクーポンコードをまとめました。コピーして、決済時に適用可否をご確認ください。','benefit1':'7か国対応','benefit2':'ワンクリックコピー','benefit3':'登録不要','cta_codes':'コードを見る','cta_how':'利用方法','hero_disclaimer':'* 15%割引は提供された情報に基づき、独立検証されていません。適用条件や実際の値引きはCainiao決済画面が優先されます。','ticket_over':'SHIPPING PROMO GUIDE','ticket_discount':'案内されている送料割引','ticket_code_label':'米国向けコード例','kicker_codes':'配送先 / コード','codes_title':'配送先を選択','codes_desc':'コードは配送先ごとに異なります。表示どおりコピーしてください。注文情報やログイン情報は取得しません。','search':'国名またはコードを検索','discount_tag':'15%割引*','code_label':'送料クーポンコード','copy':'コピー','card_note':'適用可否は決済時に確認','nothing':'一致する国やコードがありません。','code_note':'掲載コードの有効期限・公式な提供元・対象条件は独立検証できていません。実際の適用可否はCainiaoの最新ルールと決済画面をご確認ください。','kicker_how':'ご利用ガイド','how_title':'クーポンコードの試し方','how_desc':'操作は一般的な例です。国・配送方法・アプリのバージョンにより画面が異なる場合があります。','steps':[('Cainiao公式サービスへ','Cainiaoの公式集運案内ページ、または正規ストアから入手したアプリを開きます。'),('配送先を選ぶ','対象国と利用できる国際まとめ配送サービスを確認します。'),('コードを入力','決済画面にクーポン入力欄がある場合、該当国のコードを貼り付けます。'),('支払前に確認','適用された割引額、送料、追加費用、最終支払額を確認します。')],
 'official_title':'Cainiao公式サービス情報','official_note':'リンク先はCainiaoの公式ドメインです。本サイトは独立した情報ページです。','official_cta':'公式案内サイトを見る ↗','kicker_faq':'よくある質問','faq_title':'利用前の確認事項','faq':[
 ('掲載コードは必ず利用できますか？','いいえ。利用期限、最低利用額、アカウント条件などを独立検証できていません。実際の決済画面でお試しください。'),
 ('コードはどこに入力しますか？','対象の国際配送の決済時に「Promo Code」などの入力欄を探してください。サービスによっては表示されない場合があります。'),
 ('他の割引と併用できますか？','確認できていません。併用可否や割引上限はCainiaoの最新規約と決済結果に従います。'),
 ('Cainiaoの公式サイトですか？','いいえ。公式な提携・承認を確認できない独立情報サイトです。配送手続きにはCainiao公式ドメインをご利用ください。')],
 'modified':'ページ更新日：2026-10-13（コード検証日ではありません）','footer':'独立したクーポン情報ガイドです。Cainiao公式サイトではありません。注文・決済は取り扱いません。商標の権利は各所有者に帰属します。','footer_link':'公式サービス','copied':'コピーしました：','copy_failed':'手動でコピー：',
 },
 'th':{
 'title':'โค้ดส่วนลดค่าส่ง Cainiao | ไทย ญี่ปุ่น สิงคโปร์ สหรัฐฯ และอีก 3 ประเทศ',
 'description':'รวมรหัสส่วนลดค่าขนส่ง Cainiao สำหรับไทย THONLY ญี่ปุ่น JPONLY สิงคโปร์ SG5BSE สหรัฐฯ USONLY แคนาดา CAONLY ออสเตรเลีย AUONLY และรัสเซีย RUONLY ตรวจสอบสิทธิ์ที่หน้าชำระเงิน',
 'nav_codes':'รหัสส่วนลด','nav_how':'วิธีใช้','overline':'7 ประเทศปลายทาง · รวมรหัสส่วนลด','hero_a':'ส่งพัสดุระหว่างประเทศ ','hero_b':'ลด 15%*','hero_c':'คู่มือรหัสส่วนลด','lead':'รวมรหัสโปรโมชันการส่งพัสดุแบบรวมกล่องของ Cainiao จากจีนไปยัง 7 ประเทศ คัดลอกรหัส แล้วตรวจสอบส่วนลดจริงก่อนชำระเงิน','benefit1':'7 ประเทศ','benefit2':'คัดลอกในคลิกเดียว','benefit3':'ไม่ต้องสมัคร','cta_codes':'ดูรหัสส่วนลด','cta_how':'วิธีใช้งาน','hero_disclaimer':'* ส่วนลด 15% เป็นข้อมูลที่ได้รับมา ยังไม่ได้รับการตรวจสอบอย่างอิสระ เงื่อนไขและยอดส่วนลดจริงให้ยึดตามหน้าชำระเงิน Cainiao','ticket_over':'SHIPPING PROMO GUIDE','ticket_discount':'ส่วนลดค่าขนส่งที่แจ้งไว้','ticket_code_label':'ตัวอย่างรหัสสหรัฐฯ','kicker_codes':'ปลายทาง / รหัส','codes_title':'เลือกประเทศปลายทาง','codes_desc':'แต่ละประเทศใช้รหัสต่างกัน คัดลอกตามที่แสดง เว็บไซต์นี้ไม่ขอข้อมูลการชำระเงินหรือบัญชี','search':'ค้นหาประเทศหรือรหัส','discount_tag':'ลด 15%*','code_label':'รหัสส่วนลดค่าส่ง','copy':'คัดลอก','card_note':'ตรวจสอบสิทธิ์เมื่อชำระเงิน','nothing':'ไม่พบประเทศหรือรหัสที่ค้นหา','code_note':'ยังไม่มีการยืนยันอย่างอิสระว่ารหัสเป็นโปรโมชันทางการหรือมีผลใช้งาน เงื่อนไข วันหมดอายุ และการใช้ร่วมกับส่วนลดอื่นขึ้นกับ Cainiao','kicker_how':'วิธีใช้งาน','how_title':'วิธีลองใช้รหัสส่วนลด','how_desc':'ขั้นตอนเป็นแนวทางทั่วไป เมนูอาจต่างกันตามประเทศและบริการที่เลือก','steps':[('เปิดบริการ Cainiao','ไปยังเว็บไซต์ข้อมูลบริการรวมพัสดุอย่างเป็นทางการของ Cainiao หรือใช้แอปจากร้านแอปที่เชื่อถือได้'),('เลือกปลายทาง','เลือกประเทศที่รับพัสดุและตรวจสอบบริการขนส่งที่รองรับ'),('ใส่รหัสที่ตรงกัน','หากมีช่อง Promo Code ในขั้นตอนชำระเงิน ให้ใส่รหัสสำหรับประเทศนั้น'),('ตรวจสอบก่อนจ่าย','ดูว่ารหัสใช้ได้หรือไม่ พร้อมตรวจยอดค่าส่ง ค่าธรรมเนียม และยอดชำระทั้งหมด')],
 'official_title':'ข้อมูลบริการ Cainiao อย่างเป็นทางการ','official_note':'ลิงก์นำไปยังโดเมนของ Cainiao เว็บไซต์รวมรหัสนี้จัดทำอย่างอิสระ','official_cta':'ไปยังเว็บไซต์ทางการ ↗','kicker_faq':'คำถามที่พบบ่อย','faq_title':'สิ่งที่ควรรู้ก่อนใช้','faq':[
 ('รหัสเหล่านี้ใช้ได้แน่นอนหรือไม่?','ไม่สามารถรับประกันได้ ยังไม่ได้ตรวจสอบวันหมดอายุ ยอดขั้นต่ำ และข้อจำกัดของบัญชี โปรดลองที่หน้าชำระเงินจริง'),
 ('ต้องกรอกรหัส Cainiao ตรงไหน?','มองหาช่อง Promo Code หรือคูปองในขั้นตอนชำระค่าจัดส่งระหว่างประเทศ บางบริการอาจไม่มีช่องนี้'),
 ('ใช้ส่วนลด 15% ร่วมกับโปรอื่นได้ไหม?','ยังยืนยันไม่ได้ เงื่อนไขการใช้ซ้ำหรือส่วนลดสูงสุดขึ้นอยู่กับข้อกำหนดของ Cainiao'),
 ('เว็บไซต์นี้เป็นเว็บไซต์ทางการของ Cainiao หรือไม่?','ไม่ใช่ เป็นเว็บไซต์ข้อมูลอิสระ และยังไม่มีหลักฐานยืนยันการได้รับอนุญาตหรือการเป็นพันธมิตรทางการ กรุณาทำรายการผ่านเว็บไซต์ทางการ')],
 'modified':'ปรับปรุงเนื้อหา: 2026-10-13 (ไม่ใช่วันที่ยืนยันรหัส)','footer':'เว็บไซต์รวบรวมรหัสส่วนลดอิสระ ไม่ใช่เว็บไซต์ทางการของ Cainiao ไม่มีการรับคำสั่งซื้อหรือชำระเงิน เครื่องหมายการค้าเป็นของเจ้าของแต่ละราย','footer_link':'บริการทางการ','copied':'คัดลอกแล้ว:','copy_failed':'กรุณาคัดลอกเอง:',
 },
'ru':{
 'title':'Промокоды Cainiao на доставку: Россия, США, Япония и ещё 4 страны',
 'description':'Промокоды Cainiao для международной доставки: Россия RUONLY, США USONLY, Канада CAONLY, Австралия AUONLY, Япония JPONLY, Сингапур SG5BSE и Таиланд THONLY. Проверяйте скидку при оплате.',
 'nav_codes':'Промокоды','nav_how':'Как использовать','overline':'7 стран назначения · Список промокодов','hero_a':'Доставка из Китая. ','hero_b':'Скидка 15%*','hero_c':'справочник кодов','lead':'Промокоды для консолидированной доставки Cainiao из Китая в семь стран. Скопируйте код для страны назначения и проверьте его при оформлении заказа.','benefit1':'7 стран','benefit2':'Копирование в 1 клик','benefit3':'Без регистрации','cta_codes':'Посмотреть коды','cta_how':'Инструкция','hero_disclaimer':'* Указанная скидка 15% предоставлена составителю страницы и не подтверждена независимо. Действие кодов и сумма скидки определяются при оплате в Cainiao.','ticket_over':'SHIPPING PROMO GUIDE','ticket_discount':'Заявленная скидка на доставку','ticket_code_label':'Пример для США','kicker_codes':'Страны / промокоды','codes_title':'Выберите страну доставки','codes_desc':'Для каждой страны свой код. Копируйте без изменений. Мы не запрашиваем данные заказа или платежей.','search':'Поиск страны или кода','discount_tag':'−15%*','code_label':'Промокод на доставку','copy':'Копировать','card_note':'Проверьте при оплате','nothing':'Ничего не найдено.','code_note':'Официальный статус, сроки действия и условия кодов не подтверждены независимо. Наличие скидки и возможность совмещения определяются текущими правилами Cainiao.','kicker_how':'Инструкция','how_title':'Как проверить промокод','how_desc':'Это общая инструкция. Интерфейс может отличаться в зависимости от страны и способа доставки.','steps':[('Откройте Cainiao','Перейдите на официальный информационный сайт доставки Cainiao или откройте приложение из проверенного магазина.'),('Укажите страну','Выберите адрес доставки и доступную услугу объединения посылок.'),('Введите код','Если при оформлении есть поле Promo Code, вставьте код нужной страны.'),('Проверьте сумму','До оплаты убедитесь, что скидка применена, и проверьте все сборы и итоговую сумму.')],
 'official_title':'Официальная информация Cainiao','official_note':'Ссылка ведёт на домен Cainiao. Справочник промокодов является независимым.','official_cta':'Открыть сайт Cainiao ↗','kicker_faq':'Вопросы и ответы','faq_title':'Перед использованием промокода','faq':[
 ('Эти промокоды точно работают?','Нет гарантии. Срок действия, минимальная сумма и ограничения по аккаунту не проверены. Проверьте код при фактическом оформлении.'),
 ('Куда вводить промокод Cainiao?','Найдите поле Promo Code или «Купон» при оформлении международной доставки, если оно доступно для выбранной услуги.'),
 ('Можно ли совместить скидку с другими акциями?','Это не подтверждено. Ограничения и правила комбинирования зависят от актуальных условий Cainiao.'),
 ('Это официальный сайт Cainiao?','Нет. Это независимый информационный ресурс без подтверждённого официального партнёрства или разрешения Cainiao. Для оформления доставки используйте официальный сайт.')],
 'modified':'Материал обновлён: 2026-10-13 (коды не проверялись в эту дату)','footer':'Независимый справочник промокодов, не официальный сайт Cainiao. Мы не обрабатываем заказы и платежи. Товарные знаки принадлежат правообладателям.','footer_link':'Официальный сайт','copied':'Скопировано:','copy_failed':'Скопируйте вручную:',
 },
'fr-ca':{
 'title':'Codes promo Cainiao pour le transport international | Canada et 6 autres pays',
 'description':'Codes promo Cainiao : Canada CAONLY, États-Unis USONLY, Australie AUONLY, Japon JPONLY, Singapour SG5BSE, Thaïlande THONLY et Russie RUONLY. Vérifiez toute réduction à la caisse.',
 'nav_codes':'Codes promo','nav_how':'Mode d’emploi','overline':'7 destinations · Codes de livraison','hero_a':'Expédiez vos colis. ','hero_b':'15 % de rabais*','hero_c':'guide de codes promo','lead':'Un répertoire de codes promotionnels pour les envois groupés Cainiao depuis la Chine vers sept pays. Copiez le code et vérifiez son admissibilité avant de payer.','benefit1':'7 destinations','benefit2':'Copie en un clic','benefit3':'Sans inscription','cta_codes':'Voir les codes promo','cta_how':'Mode d’emploi','hero_disclaimer':'* Le rabais annoncé de 15 % provient d’une information fournie et n’a pas été vérifié indépendamment. L’admissibilité et le rabais final sont établis lors du paiement chez Cainiao.','ticket_over':'SHIPPING PROMO GUIDE','ticket_discount':'Rabais de livraison annoncé','ticket_code_label':'Exemple pour les É.-U.','kicker_codes':'Destinations / codes','codes_title':'Choisissez votre destination','codes_desc':'Chaque pays possède un code distinct. Copiez-le tel quel. Aucun renseignement de paiement ni identifiant n’est demandé.','search':'Rechercher un pays ou un code','discount_tag':'−15 %*','code_label':'Code promo de livraison','copy':'Copier','card_note':'À confirmer au paiement','nothing':'Aucun pays ou code correspondant.','code_note':'Ces codes n’ont pas été vérifiés auprès de modalités promotionnelles officielles publiques. La validité, les exclusions, la période et le cumul des rabais ne sont pas garantis.','kicker_how':'Guide pratique','how_title':'Comment essayer un code promo','how_desc':'Les étapes sont données à titre indicatif. L’interface et les règles peuvent varier selon le pays et le service.','steps':[('Ouvrir Cainiao','Consultez le site d’information officiel du service d’expédition Cainiao ou son application provenant d’une boutique officielle.'),('Choisir la destination','Sélectionnez le pays de livraison et le service de consolidation proposé.'),('Saisir le bon code','Si un champ « Promo Code » apparaît au paiement, collez le code du pays concerné.'),('Vérifier avant de payer','Confirmez l’acceptation du code, les frais supplémentaires et le montant total à payer.')],
 'official_title':'Information officielle de Cainiao','official_note':'Ce lien mène à un domaine de Cainiao. Le présent guide est indépendant.','official_cta':'Consulter le site officiel ↗','kicker_faq':'Questions fréquentes','faq_title':'À savoir avant d’utiliser un code','faq':[
 ('Ces codes Cainiao fonctionnent-ils à coup sûr?','Non. Nous n’avons pas vérifié indépendamment la date d’expiration, le montant minimal ou les restrictions de compte. Essayez le code au moment du paiement.'),
 ('Où faut-il entrer le code promo Cainiao?','Cherchez un champ « Promo Code » ou « Coupon » au paiement du service de livraison internationale admissible. Ce champ peut ne pas être offert.'),
 ('Peut-on cumuler le rabais avec d’autres offres?','Ce n’est pas confirmé. Les plafonds et règles de cumul dépendent des modalités courantes de Cainiao.'),
 ('S’agit-il d’un site officiel Cainiao?','Non. Il s’agit d’un guide d’information indépendant, sans affiliation ni autorisation officielle vérifiée. Effectuez vos transactions sur le domaine officiel de Cainiao.')],
 'modified':'Contenu mis à jour le 2026-10-13 (codes non vérifiés à cette date)','footer':'Guide indépendant de codes promo, non affilié officiellement à Cainiao. Aucun achat ni paiement n’est traité ici. Les marques appartiennent à leurs propriétaires.','footer_link':'Service officiel','copied':'Copié :','copy_failed':'Copiez manuellement :',
 }
}

def h(s):return html.escape(str(s),quote=True)
def u(locale):return BASE+PATHS[locale]
def svg_search():return '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8b95a4" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>'

def build(locale):
 t=T[locale]; current=PATHS[locale]; pageurl=u(locale)
 alt='\n'.join(f'<link rel="alternate" hreflang="{LANG[l]}" href="{h(u(l))}">' for l in LOCALES)+'\n<link rel="alternate" hreflang="x-default" href="'+h(u('en'))+'">'
 opts=''.join(f'<option value="{h(PATHS[l])}" {"selected" if l==locale else ""}>{h(LABEL[l])}</option>' for l in LOCALES)
 cards='\n'.join(f'''<article class="country-card" id="{h(c['slug'])}" data-search="{h(c['synonyms'])}">
 <div class="card-top"><div><span class="flag" aria-hidden="true">{c['flag']}</span><h3 class="dest">{h(c[locale])}</h3></div><span class="tag">{h(t['discount_tag'])}</span></div>
 <div class="code-label">{h(t['code_label'])}</div><div class="code-row"><code class="code">{h(c['code'])}</code><button type="button" class="copy" data-copy="{h(c['code'])}" aria-label="{h(t['copy']+' '+c['code'])}"><span aria-hidden="true">⧉</span><span class="copy-text">{h(t['copy'])}</span></button></div>
 <div class="card-line"></div><div class="card-foot">{h(t['card_note'])}</div></article>''' for c in D['destinations'])
 steps='\n'.join(f'<article class="step"><div class="step-no">{i:02}</div><h3>{h(a)}</h3><p>{h(b)}</p></article>' for i,(a,b) in enumerate(t['steps'],1))
 faq='\n'.join(f'<details><summary>{h(q)}</summary><p>{h(a)}</p></details>' for q,a in t['faq'])
 structured={"@context":"https://schema.org","@graph":[
  {"@type":"WebSite","name":"Cainiao Shipping Promo Guide","url":BASE+"/","inLanguage":[LANG[l] for l in LOCALES]},
  {"@type":"WebPage","name":t['title'],"description":t['description'],"url":pageurl,"inLanguage":LANG[locale],"dateModified":D['last_updated'],"isPartOf":{"@id":BASE+"/#website"},"about":{"@type":"Thing","name":"Cainiao consolidated shipping promo codes"}},
  {"@type":"FAQPage","inLanguage":LANG[locale],"mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in t['faq']]},
  {"@type":"ItemList","name":t['codes_title'],"itemListElement":[{"@type":"ListItem","position":i,"name":c[locale]+" - "+c['code'],"url":pageurl+"#"+c['slug']} for i,c in enumerate(D['destinations'],1)]}
 ]}
 structured['@graph'][0]['@id']=BASE+'/#website'
 data=json.dumps(structured,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
 markup=f'''<!doctype html>
<html lang="{LANG[locale]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="theme-color" content="#fff7f1">
<title>{h(t['title'])}</title>
<meta name="description" content="{h(t['description'])}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="{h(pageurl)}">
{alt}
<meta property="og:type" content="website"><meta property="og:site_name" content="Cainiao Shipping Promo Guide">
<meta property="og:title" content="{h(t['title'])}"><meta property="og:description" content="{h(t['description'])}">
<meta property="og:url" content="{h(pageurl)}"><meta property="og:locale" content="{h(LANG[locale].replace('-','_'))}">
<meta property="og:image" content="{h(BASE+'/assets/social-card.png')}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/style.css">
<script type="application/ld+json">{data}</script>
<script src="/assets/app.js" defer></script>
</head>
<body data-copied="{h(t['copied'])}" data-copy-failed="{h(t['copy_failed'])}">
<div class="topline"></div>
<header class="wrap"><nav class="nav" aria-label="Main navigation">
<a class="brand" href="/"><span class="brand-icon" aria-hidden="true">✦</span><span class="brand-name">Ship<span style="color:#f36a35">Saver</span><small>CAINIAO CODE GUIDE</small></span></a>
<div class="nav-right"><a class="nav-link" href="#codes">{h(t['nav_codes'])}</a><a class="nav-link" href="#how">{h(t['nav_how'])}</a>
<label for="lang-switch" class="sr-only">Language</label><select class="language" id="lang-switch" aria-label="Language">{opts}</select></div></nav></header>
<main>
<section class="hero"><div class="wrap hero-grid"><div class="hero-copy">
<div class="eyebrow">{h(t['overline'])}</div><h1>{h(t['hero_a'])}<span>{h(t['hero_b'])}</span><br>{h(t['hero_c'])}</h1>
<p class="lead">{h(t['lead'])}</p><div class="hero-steps"><span><span class="tick">✓</span>{h(t['benefit1'])}</span><span><span class="tick">✓</span>{h(t['benefit2'])}</span><span><span class="tick">✓</span>{h(t['benefit3'])}</span></div>
<div class="actions"><a href="#codes" class="btn btn-primary">{h(t['cta_codes'])} <span aria-hidden="true">→</span></a><a href="#how" class="btn btn-secondary">{h(t['cta_how'])}</a></div>
<p class="tiny-note">{h(t['hero_disclaimer'])}</p></div>
<div class="hero-art" aria-hidden="true"><div class="orbit"></div><div class="coupon-ticket"><div class="ticket-top"><div class="ticket-overline">{h(t['ticket_over'])}</div><div class="ticket-percent">15<small>% OFF</small></div><div class="ticket-sub">{h(t['ticket_discount'])}*</div></div><div class="ticket-divider"></div><div class="ticket-bottom"><div><small>{h(t['ticket_code_label'])}</small><strong>USONLY</strong></div><div class="ticket-stamp">✈</div></div></div></div>
</div></section>
<section class="section section-alt" id="codes"><div class="wrap"><div class="section-top"><div><div class="kicker">{h(t['kicker_codes'])}</div><h2>{h(t['codes_title'])}</h2><p class="desc">{h(t['codes_desc'])}</p></div>
<label class="searchbox">{svg_search()}<span class="sr-only">{h(t['search'])}</span><input id="country-search" type="search" placeholder="{h(t['search'])}" autocomplete="off" spellcheck="false"></label></div>
<div class="cards">{cards}</div><p class="nothing" id="no-results">{h(t['nothing'])}</p><p class="note-strip">ⓘ {h(t['code_note'])}</p></div></section>
<section class="section" id="how"><div class="wrap"><div class="kicker">{h(t['kicker_how'])}</div><h2>{h(t['how_title'])}</h2><p class="desc">{h(t['how_desc'])}</p><div class="steps-grid">{steps}</div>
<div class="source-panel"><div><strong>{h(t['official_title'])}</strong><p>{h(t['official_note'])}</p></div><a href="{h(D['official_info_url'])}" target="_blank" rel="noopener noreferrer">{h(t['official_cta'])}</a></div></div></section>
<section class="section section-alt" id="faq"><div class="wrap"><div style="text-align:center"><div class="kicker">{h(t['kicker_faq'])}</div><h2>{h(t['faq_title'])}</h2></div><div class="faq-list">{faq}</div><p class="last-updated">{h(t['modified'])}</p></div></section>
</main>
<footer class="footer"><div class="wrap"><div><strong>ShipSaver · Cainiao Code Guide</strong><p>{h(t['footer'])}</p></div><a href="{h(D['official_info_url'])}" target="_blank" rel="noopener noreferrer">{h(t['footer_link'])} ↗</a></div></footer>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
</body></html>
'''
 target=OUT/PATHS[locale].lstrip('/')/'index.html' if locale!='zh' else OUT/'index.html'
 target.parent.mkdir(parents=True,exist_ok=True)
 target.write_text(markup,encoding='utf-8')
 return target

def write_sitemap():
 # The xml sitemap uses static URLs. Each localized page has its own canonical URL.
 NS='http://www.sitemaps.org/schemas/sitemap/0.9'
 X='http://www.w3.org/1999/xhtml'
 ET.register_namespace('',NS);ET.register_namespace('xhtml',X)
 urlset=ET.Element('{%s}urlset'%NS)
 for locale in LOCALES:
  item=ET.SubElement(urlset,'{%s}url'%NS)
  ET.SubElement(item,'{%s}loc'%NS).text=u(locale)
  ET.SubElement(item,'{%s}lastmod'%NS).text=D['last_updated']
  for other in LOCALES:
   ET.SubElement(item,'{%s}link'%X,{'rel':'alternate','hreflang':LANG[other],'href':u(other)})
  ET.SubElement(item,'{%s}link'%X,{'rel':'alternate','hreflang':'x-default','href':u('en')})
 ET.ElementTree(urlset).write(OUT/'sitemap.xml',encoding='utf-8',xml_declaration=True)
 (OUT/'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: '+BASE+'/sitemap.xml\n',encoding='utf-8')
 llms = '# Cainiao Shipping Promo Code Guide — Independent Directory\n\n'
 llms += '> These promotional codes and the advertised 15% shipping discount are publisher-supplied, not independently verified. This site is not officially affiliated with Cainiao. Confirm all savings at checkout.\n\n'
 llms += '## Destinations and codes\n\n'
 for c in D['destinations']:
  llms += '- '+c['en']+': `'+c['code']+'`\n'
 llms += '\n## Language editions\n\n'
 for loc in LOCALES:
  llms += '- '+LABEL[loc]+': '+u(loc)+'\n'
 llms += '\n## Reference and scope\n\n'
 llms += '- Official Cainiao consolidated shipping information: '+D['official_info_url']+'\n'
 llms += '- Content last updated: '+D['last_updated']+' (not a date of coupon verification)\n'
 llms += '- No purchases, payments or shipping orders are processed on this independent guide.\n'
 (OUT/'llms.txt').write_text(llms,encoding='utf-8')

if __name__=='__main__':
 for l in LOCALES:print('Generated',build(l).relative_to(ROOT))
 write_sitemap()
 print('Generated sitemap.xml, robots.txt, and llms.txt')
