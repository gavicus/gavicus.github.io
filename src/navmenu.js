class NavMenu {
    constructor () {}
    renderContent () {
        const buttons = [{text:"Home", action:"goHome()"},{text:"Other", action:"goOther()"},{text:"Planet", action:"goPlanet()"}];
        const linkArray = buttons.map(b => (
            `<button onclick="${b.action}">${b.text}</button>`
        ));
        return `
            <i id="toggleIcon" class="material-icons" onclick="handleNavMenuToggle()">menu</i>
            <div id="navmenuButtonRow" class="buttons hide">
                ${linkArray.join("")}
            </div>
        `;
    }
    render () {
        return `
            <div class="navmenu">
                ${this.renderContent()}
            </div>
        `;
    }
}

const handleNavMenuToggle = () => {
    this.iconName = this.iconName === "close" ? "menu" : "close";
    setContent("toggleIcon", this.iconName);
    if (this.iconName === "close") {
        removeClass("navmenuButtonRow", "hide")
    } else {
        addClass("navmenuButtonRow", "hide")
    }
}

const goHome = () => {
    currentPage = PageHome;
    handleNavMenuToggle.iconName = "menu";
    render();
}

const goOther = () => {
    currentPage = PageOther;
    handleNavMenuToggle.iconName = "menu";
    render();
}

const goPlanet = () => {
    currentPage = PagePlanet;
    handleNavMenuToggle.iconName = "menu";
    currentPage.setup();
    render();
}
