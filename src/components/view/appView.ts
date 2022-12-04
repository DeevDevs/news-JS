import News from './news/news';
import Sources from './sources/sources';
import * as types from '../types';

// type sourceItem = {
//     name: string;
//     id: string;
// };

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

// type newsData = {
//     articles: dataExample[];
// };
// type sourcesData = {
//     sources: sourceItem[];
// };

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: types.newsData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: types.sourcesData): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
