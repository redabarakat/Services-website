/*themes color*/
let themesColor = () => {
    const hueSlider = document.querySelector(".js-hue-slider");
    let Html = document.querySelector("html");
    let jshue = document.querySelector(".js-hue");

    // check localstroge value
    if (window.localStorage.getItem("--hue")) {
        setHue(window.localStorage.getItem("--hue"));
        hueSlider.value = window.localStorage.getItem("--hue");
    } else {
        let vaue = getComputedStyle(Html).getPropertyValue("--hue")
        setHue(vaue);
        hueSlider.value = vaue;
    }

    // get hue slider
    hueSlider.addEventListener("input", function () {
        setHue(this.value);
        window.localStorage.setItem("--hue", this.value);
    });

    // setHue function
    function setHue(value) {
        Html.style.setProperty("--hue", value);
        jshue.innerHTML = value;
    }
}
themesColor();

// dark mode 
let darkmode = () => {
    let body = document.body
    let darkModeBtn = document.querySelector(".js-dark-mode");

    if(window.localStorage.getItem("darkMode") === "true") {
        body.classList.add("te-dark");
        darkModeBtn.checked = true;
    } else {
        body.classList.remove("te-dark");
    }

    if(body.classList.contains("te-dark")) {
        darkModeBtn.checked = true;
    }

    darkModeBtn.addEventListener("click", function(){
        trunMode(this.checked)
    })

    function trunMode(value){
        window.localStorage.setItem("darkMode", value)
        if(value === true) {
            body.classList.add("te-dark");
        } else {
            body.classList.remove("te-dark");
        }
    }

}
darkmode();

// settings function
let settings = ()=> {
    let switcherToggler = document.querySelector(".js-style-switcher-toggler");
    let styleSwitcher = document.querySelector(".js-style-switcher");
    switcherToggler.addEventListener("click", function(){
        styleSwitcher.classList.toggle("close")
        this.querySelector("i").classList.toggle("fa-times")
        this.querySelector("i").classList.toggle("fa-cog")
    })
}
settings();
