' use strict '

document.addEventListener('DOMContentLoaded',()=>{
    const p = document.querySelectorAll('p')
    console.log(p);

    // script faylni qo'shish

    function loadScript(src){
        const script = document.createElement('script');
        script.src = src;
        // async attributi avtomatik qo'shiladi. Uni o'chirish amali quyida
        script.async = 'false';
        document.body.append(script);
    }
    loadScript('./second.js');
    loadScript('./third.js');
})