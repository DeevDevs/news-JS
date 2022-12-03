import Loader from './loader';

// 33e4a597ac03401c87fa3f06d9c21498

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
