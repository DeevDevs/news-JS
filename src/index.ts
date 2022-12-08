import App from './components/app/app';
import './global.css';

const app: App = new App();
app.start();

const arrowButtons = document.querySelectorAll('.btn-slide');
const sourcesBlock = document.querySelector('.sources') as HTMLElement;
let currentPosition = 0;
function slideSources(e: Event) {
    const btn = e.target as HTMLElement;
    if (btn.classList.contains('slide-right')) {
        currentPosition = currentPosition === -2100 ? -2100 : (currentPosition -= 100);
        sourcesBlock.style.transform = `translateX(${currentPosition}%)`;
    }
    if (btn.classList.contains('slide-left')) {
        currentPosition = currentPosition === 0 ? 0 : currentPosition + 100;
        sourcesBlock.style.transform = `translateX(${currentPosition}%)`;
    }
}

arrowButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        slideSources(e);
    });
});
