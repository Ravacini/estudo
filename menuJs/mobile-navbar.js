class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass ="active";
    }
}

addClickEvent(){
    this.mobileMenu.addEventListenner('click', ()=>console.log )
}