window.onload = () => {
    const menuButton = document.getElementById("menu-bttn")
    menuButton.onclick = (e) => {
        e.preventDefault()
        const menuBox = document.getElementById("menu-box")
        const navBarTittle = document.getElementById("navbar-bttn")
        if(menuButton.classList.contains("transform")){
            document.body.setAttribute("style", "overflow: auto;")
            menuBox.classList.remove("drop-down-menu")
            navBarTittle.removeAttribute("hidden")
            menuButton.classList.remove("transform")
        }
        else {
            document.body.setAttribute("style", "overflow: hidden;")
            menuBox.classList.add("drop-down-menu")
            navBarTittle.setAttribute("hidden", "true")
            menuButton.classList.add("transform")
        }
    }
}