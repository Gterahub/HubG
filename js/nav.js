
let navcontent=document.getElementById('navbar-nav')
let navbtn=document.getElementById('hamburger-icon')
function opennav() {
    if(navcontent.style.display=='none'){
    navcontent.style.display='flex'
    navbtn.style.display='none'
    }else{
        navcontent.style.display='none'
        navbtn.style.display='block'
    }
}