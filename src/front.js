

const navmenu = new NavMenu();

let currentPage = PageHome;

const render = () => {
    const content = `
        ${navmenu.render()}
        ${currentPage.render()}
    `;
    setContent("output", content);
}

render();
