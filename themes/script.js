(() => {
    document.getElementById("theme-switcher").addEventListener('click', () => {
        const theme = document.getElementById("theme");

        console.log(theme.href.endsWith("light.css"))
        theme.setAttribute('href',
            theme.href.endsWith("light.css") ?
                "./theme1-dark.css"
                : "./theme1-light.css"
        );
    });
})()
