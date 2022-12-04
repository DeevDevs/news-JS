import AppController from '../controller/controller';
import { AppView } from '../view/appView';
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

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourcesContainer = document.querySelector('.sources') as HTMLElement;
        sourcesContainer.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: types.newsData) => this.view.drawNews(data))
        );
        this.controller.getSources((data: types.sourcesData) => this.view.drawSources(data));
    }
}

export default App;
