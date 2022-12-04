import './news.css';
import * as types from '../../types';

// type dataExample = {
//     author: string;
//     content: string;
//     description: string;
//     publishedAt: string;
//     source: {
//         id: string;
//         name: string;
//     };
//     title: string;
//     url: string;
//     urlToImage: string;
// };

class News {
    draw(data: types.dataExample[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element;
            // if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');
            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item') as Element;
                newsItem.classList.add('alt');
            }
            const photo = newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement;
            photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const author = newsClone.querySelector('.news__meta-author') as HTMLTemplateElement;
            author.textContent = item.author || item.source.name;
            const date = newsClone.querySelector('.news__meta-date') as HTMLTemplateElement;
            date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const title = newsClone.querySelector('.news__description-title') as HTMLTemplateElement;
            title.textContent = item.title;
            const source = newsClone.querySelector('.news__description-source') as HTMLTemplateElement;
            source.textContent = item.source.name;
            const content = newsClone.querySelector('.news__description-content') as HTMLTemplateElement;
            content.textContent = item.description;
            const readMore = newsClone.querySelector('.news__read-more a') as HTMLTemplateElement;
            readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const newsBox = document.querySelector('.news') as HTMLElement;
        newsBox.innerHTML = '';
        newsBox.appendChild(fragment);
    }
}

export default News;
