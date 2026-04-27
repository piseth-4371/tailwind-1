const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-mobile');
const btn_img = btn.querySelector('img');
btn.addEventListener('click', () =>{

    // menu.classList.toggle('hidden')
    if(!menu.classList.toggle('hidden')){
        btn_img.src= 'src/images/arrow-left.png';
    }else{
        btn_img.src= 'src/images/menu-burger.png';
    }
});
