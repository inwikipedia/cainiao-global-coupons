"""Optional one-time social preview asset generator (not used in deployment)."""
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[1]
out=ROOT/'public/assets/social-card.png'
w,h=1200,630
im=Image.new('RGB',(w,h),'#fff6ef')
p=im.load()
for y in range(h):
  for x in range(w):
    blend=x/w*.35+y/h*.11
    p[x,y]=(int(255-6*blend),int(247-23*blend),int(240-25*blend))
d=ImageDraw.Draw(im)
d.ellipse((790,-175,1350,385),outline='#efc5ad',width=3)
d.ellipse((845,-121,1280,314),outline='#f4dfd1',width=2)
d.rounded_rectangle((65,65,1080,555),radius=40,fill='#ffffff')
d.rounded_rectangle((730,113,1032,492),radius=30,fill='#f36a35')
d.ellipse((925,88,1090,254),fill='#fb966e')
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
fb='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
F=lambda size,bold=False:ImageFont.truetype(fb if bold else font,size)
d.text((108,109),'SHIPSAVER  /  CAINIAO CODE GUIDE',font=F(22,True),fill='#de6038')
d.text((108,192),'Shipping promo codes',font=F(55,True),fill='#15263e')
d.text((108,268),'for 7 destinations',font=F(48,True),fill='#15263e')
d.text((108,368),'AU  US  CA  JP  SG  TH  RU',font=F(29,True),fill='#697a91')
d.text((108,433),'Independent guide  ·  Verify at checkout',font=F(18),fill='#8a96a6')
d.text((785,186),'15%',font=F(102,True),fill='white')
d.text((798,313),'OFF*',font=F(47,True),fill='white')
d.text((782,422),'CHECK AT CHECKOUT',font=F(13,True),fill='white')
im.save(out,optimize=True)
print(out)
