(function(){
  'use strict';
  var input=document.getElementById('country-search');
  var cards=Array.from(document.querySelectorAll('.country-card'));
  var empty=document.getElementById('no-results');
  if(input){input.addEventListener('input',function(){var q=input.value.trim().toLocaleLowerCase();var seen=0;cards.forEach(function(card){var match=card.textContent.toLocaleLowerCase().includes(q)||card.getAttribute('data-search').toLocaleLowerCase().includes(q);card.hidden=!match;if(match)seen++;});if(empty)empty.style.display=seen?'none':'block';});}
  var toast=document.getElementById('toast');
  var timeout;
  function notify(s){if(!toast)return;toast.textContent=s;toast.classList.add('show');clearTimeout(timeout);timeout=setTimeout(function(){toast.classList.remove('show');},1900);}
  function legacyCopy(value){var ta=document.createElement('textarea');ta.value=value;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy');}catch(e){}ta.remove();return ok;}
  document.querySelectorAll('[data-copy]').forEach(function(button){button.addEventListener('click',async function(){var val=button.getAttribute('data-copy');var success=false;try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(val);success=true;}else{success=legacyCopy(val);}}catch(e){success=legacyCopy(val);}if(success){button.classList.add('copied');notify(document.body.getAttribute('data-copied')+' '+val);setTimeout(function(){button.classList.remove('copied');},1500);}else{notify(document.body.getAttribute('data-copy-failed')+' '+val);}});});
  var switcher=document.getElementById('lang-switch');if(switcher){switcher.addEventListener('change',function(){var route=switcher.value;if(route)window.location.assign(route);});}
})();
