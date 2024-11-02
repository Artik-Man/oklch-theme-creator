{
    const theme = document.getElementById("theme");

    document.getElementById("theme-switcher").addEventListener('click', (evt) => {
        const button = evt.target;
        const selectedTheme = button.dataset.theme;
        if (selectedTheme) {
            theme.setAttribute('href', selectedTheme);
            evt.target.parentElement.querySelector('button.primary').classList.remove('primary');
            button.classList.add("primary");
        }
    });
}
