class Front {
    constructor() {
        this.navmenu = new NavMenu();
        this.output = document.getElementById("output");
        this.output.innerHTML=this.render();
    }

    render() {
        return this.navmenu.render();
    }
}
