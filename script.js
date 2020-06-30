let isDraculaTheme = true;

const draculaTheme = {
    titleCard: "#50FA7B",
    background: "#282A36",
    backgroundCard: "#44475A",
    title: "#FFB86C",
    foreground: "#F8F8F2"
}
const winterIsCommingTheme = {
    titleCard: "#296d31",
    background: "#ffffff",
    backgroundCard: "#cee1f0",
    title: "#b1108e",
    foreground: "#828282"
}

function setColors(query, color, backgroundColor) {
    document.querySelectorAll(query).forEach(element => {
        element.setAttribute('style',
            `color: ${color};
            ${backgroundColor ? 'background-color: ' + backgroundColor:  null };`)
    })
}

function switchTheme() {
    if (isDraculaTheme) {
        setColors("section>article>h3", winterIsCommingTheme.titleCard)
        setColors("header>article>h1", winterIsCommingTheme.title)
        setColors("a", winterIsCommingTheme.foreground)
        setColors("section>article", null, winterIsCommingTheme.backgroundCard)
        setColors("body", winterIsCommingTheme.foreground, winterIsCommingTheme.background)
        isDraculaTheme = false
    } else {
        init()
    }
}

function init() {
    setColors("section>article>h3", draculaTheme.titleCard)
    setColors("header>article>h1", draculaTheme.title)
    setColors("a", draculaTheme.foreground)
    setColors("section>article", null, draculaTheme.backgroundCard)
    setColors("body", draculaTheme.foreground, draculaTheme.background)

    isDraculaTheme = true;
}

init();