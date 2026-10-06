var v=10,box=document.getElementById('amts'),msg=document.getElementById('msg');
box.addEventListener('click',function(e){var b=e.target.closest('.amt');if(!b)return;
box.querySelectorAll('.amt').forEach(function(x){x.classList.remove('on')});b.classList.add('on');v=b.dataset.v;msg.textContent=''});
document.getElementById('go').addEventListener('click',function(){
msg.textContent='Təşəkkür edirik! 😻 '+v+' ₼ ilə pişiklərə qida bağışlayırsan. (Demo — real ödəniş qoşulmayıb)'});
