// fuction of headerBG reveal
const headerBG = () => {
    let header = document.querySelector(".header")
    window.addEventListener("scroll", ()=> {
        if(this.scrollY > 0) {
            header.classList.add("bg-reveal")
        } else {
            header.classList.remove("bg-reveal");
        }
    })
}
headerBG()

let navToggler  = ()=> {
    let toggler = document.querySelector(".js-nav-toggler");
    let nav = document.querySelector(".js-nav");
    let liItem = nav.querySelectorAll("li")
    toggler.addEventListener("click", changetoggle)
    function changetoggle(){
        toggler.classList.toggle("open")
        nav.classList.toggle("open")
    }
    liItem.forEach((li) => {
        li.querySelector("a").addEventListener("click", ()=> {
            if(window.innerWidth <= 767) {
                changetoggle();
            }
        })
    })
    
}
navToggler();

