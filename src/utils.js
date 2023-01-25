const setContent = (id, content) => {
    const elem = document.getElementById(id);
    elem.innerHTML = content;
}

const addClass = (id, newClass) => {
    const elem = document.getElementById(id);
    const classes = elem.className.split(" ");
    classes.push(newClass);
    elem.className = classes.join(" ");
}

const removeClass = (id, dropClass) => {
    const elem = document.getElementById(id);
    const classes = elem.className
        .split(" ")
        .filter(c => c !== dropClass);
    elem.className = classes.join(" ");
}
