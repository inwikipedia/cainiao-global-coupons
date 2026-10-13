#!/usr/bin/env python3
"""Update the canonical domain then regenerate all static pages. Requires only Python 3.
Run: python tools/set_domain.py https://discounts.example.com
"""
import json
import pathlib
import sys
from urllib.parse import urlparse
import subprocess

if len(sys.argv)!=2:
    raise SystemExit('Usage: python tools/set_domain.py https://yourdomain.com')
new=sys.argv[1].strip().rstrip('/')
parsed=urlparse(new)
if parsed.scheme!='https' or not parsed.netloc or parsed.path not in ('','/') or parsed.query or parsed.fragment:
    raise SystemExit('Please provide an HTTPS domain only, without a path, e.g. https://example.com')
root=pathlib.Path(__file__).resolve().parents[1]
data_file=root/'site-data.json'
data=json.loads(data_file.read_text(encoding='utf-8'))
data['site_url']=new
data_file.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
subprocess.check_call([sys.executable,str(root/'tools'/'build.py')])
print('Canonical domain updated to',new)
