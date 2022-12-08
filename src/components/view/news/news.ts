import './news.css';
import * as types from '../../types';
import { checkedHTMLTESelector, checkedElementSelector, checkedHTMLElementSelector, checkClone } from '../../checkSelector';

class News implements types.INews {
    draw(data: types.dataExample[]): void {
        const news: types.dataExample[] = data.length >= types.ConstValues.numberOfNews ? data.filter((_item, idx) => idx < types.ConstValues.numberOfNews) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = checkedHTMLTESelector(document, '#newsItemTemp');
        news.forEach((item: types.dataExample, idx: number) => {
            const newsClone: DocumentFragment = checkClone(newsItemTemp);
            if (idx % 2) {
                checkedElementSelector(newsClone, '.news__item').classList.add('alt');
            }
            checkedHTMLElementSelector(newsClone, '.news__meta-photo').style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            checkedElementSelector(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
            checkedElementSelector(newsClone, '.news__meta-date').textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            checkedElementSelector(newsClone, '.news__description-title').textContent = item.title;
            checkedElementSelector(newsClone, '.news__description-source').textContent = item.source.name;
            checkedElementSelector(newsClone, '.news__description-content').textContent = item.description;
            checkedHTMLElementSelector(newsClone, '.news__read-more a').setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        const newsBox: HTMLElement = checkedHTMLElementSelector(document, '.news');
        newsBox.innerHTML = '';
        newsBox.appendChild(fragment);
    }
}

export default News;
