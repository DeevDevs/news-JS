import News from './news/news';
import Sources from './sources/sources';
import * as types from '../types';

export class AppView {
    private news: types.INews;
    private sources: types.ISources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: types.newsData): void {
        const values: types.dataExample[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: types.sourcesData): void {
        const values: types.sourceItem[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
