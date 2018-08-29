(() => {
    let body = document.querySelector('body');
    let clickHandleFunction = (e) => {
        let theme = e.target.dataset.theme;
        body.setAttribute('theme', theme);
    }

    let buttons = document.querySelectorAll('button.theme-button');
    buttons.forEach(b => b.addEventListener('click', clickHandleFunction));
})()