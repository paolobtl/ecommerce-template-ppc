const gaSunset = new Date('July 1, 2023 00:00:00').getTime();
const ga360Sunset = new Date(gaSunset);
ga360Sunset.setFullYear(ga360Sunset.getFullYear() + 1);
var isga360 = false;

const button = document.getElementById('isGA360');
const innerDays = document.querySelector('.innerDays');
const innerHours = document.querySelector('.innerHours');
const innerMinutes = document.querySelector('.innerMinutes');
const innerSeconds = document.querySelector('.innerSeconds');
const outerContainer = document.querySelector('.outer-container');

button.addEventListener('click', () => {
    isga360 = !isga360;
    console.log(isga360);
    button.innerText = (button.innerText === 'Utilizzi GA360?') ? 'Utilizzi GA?' : 'Utilizzi GA360?';
});
setInterval(function () {
    const now = new Date().getTime();;
    var difference = isga360 ? ga360Sunset - now : gaSunset - now;
    var days = Math.floor(difference / 86400000);
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1;
    var minutes = Math.floor((difference % 3600000) / 60000);
    var seconds = Math.floor((difference % 60000) / 1000);
    //console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    innerDays.innerText = days;
    innerHours.innerText = hours;
    innerMinutes.innerText = minutes;
    innerSeconds.innerText = seconds;

    if (difference <= 0) {
        outerContainer.innerText = 'Google Analytics is ded';
        document.querySelectorAll('.outer').forEach(e => e.remove());
        button.remove();
    }
}, 1000);