class NavMenu {
    constructor () {
        this.iconName = "menu";
    }
    toggleIcon () {
        this.iconName = this.iconName === "menu" ? "close" : "menu";
    }
    handleToggle () {
        console.log('handleToggle')
    }
    renderContent () {
        const buttons = [{text:"one"},{text:"two"},{text:"three"}];
        const linkArray = buttons.map(b => (
            `<button>${b.text}</button>`
        ));
        return `
            <i class="material-icons" onclick="this.handleToggle">${this.iconName}</i>
            ${linkArray.join("")}
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
