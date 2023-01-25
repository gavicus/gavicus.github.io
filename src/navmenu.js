class NavMenu {
    constructor () {
    }
    renderContent () {
        const buttons = [{text:"one"},{text:"two"},{text:"three"}];
        const linkArray = buttons.map(b => (
            `<button>${b.text}</button>`
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
