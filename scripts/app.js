// DOM elements
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__item');
const background = document.querySelector('.nav__dropdown-bg');

links.forEach(link => {
    link.addEventListener('mouseenter', handleEnter);
    link.addEventListener('mouseleave', handleLeave);
});

function handleEnter(e) {
    console.log('Entered!!');

    this.classList.add('show');
    background.classList.add('bg-show');
    setTimeout(() => {
        this.classList.add('fade');
        background.classList.add('bg-fade');
    }, 100);

    const dropdown = this.querySelector('.nav__dropdown--content');
    
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('top', `${coords.top}px`);
    background.style.setProperty('left', `${coords.left}px`);
    // console.log(linkCoords);
}

function handleLeave(e) {
    console.log('Left!!');
    this.classList.remove('show');
    setTimeout(() => {
        this.classList.remove('fade');
    }, 100);
}