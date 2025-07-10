function nav() {
    
    const navBars = document.getElementById('navBars');
    const navOptions = document.getElementById('navOptions');
    const navLog = document.getElementById('navLog');

    navBars.addEventListener('click', () => {
        navOptions.classList.toggle('show');
        navLog.classList.toggle('show');
    })

}

nav();