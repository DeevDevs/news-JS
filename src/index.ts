import App from './components/app/app';
import './global.css';

const app: App = new App();
app.start();

const arrowButtons = document.querySelectorAll('.btn-slide');
const sourcesBlock = document.querySelector('.sources') as HTMLElement;
let currentPosition = 0;
let sourcesWidth: number;
const windowWidth = window.innerWidth;
if (windowWidth >= 1260) sourcesWidth = 1140;
if (windowWidth < 1260 && windowWidth >= 980) sourcesWidth = 840;
if (windowWidth < 980 && windowWidth >= 640) sourcesWidth = 500;
if (windowWidth < 640) sourcesWidth = 210;
function slideSources(e: Event) {
    const btn = e.target as HTMLElement;
    if (btn.classList.contains('slide-right')) {
        currentPosition = currentPosition === -2100 ? -2100 : (currentPosition -= 100);
    }
    if (btn.classList.contains('slide-left')) {
        currentPosition = currentPosition === 0 ? 0 : currentPosition + 100;
    }
    sourcesBlock.style.transform = `translateX(${(currentPosition / 100) * sourcesWidth}px)`;
}

arrowButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        slideSources(e);
    });
});
