import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import * as types from '../types';
import { checkedHTMLElementSelector } from './../checkSelector';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourcesContainer: HTMLElement = checkedHTMLElementSelector(document, '.sources');
        sourcesContainer.addEventListener('click', (e) => this.controller.getNews(e, (data: types.newsData) => this.view.drawNews(data)));
        this.controller.getSources((data: types.sourcesData) => this.view.drawSources(data));
    }
}

export default App;
