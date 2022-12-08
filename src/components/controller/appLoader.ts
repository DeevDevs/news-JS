import Loader from './loader';

// 33e4a597ac03401c87fa3f06d9c21498

class AppLoader extends Loader {
    constructor() {
        // super('https://newsapi.org/v2/', {
        super('https://newsapi-redirect-production.up.railway.app/', {
            apiKey: '33e4a597ac03401c87fa3f06d9c21498', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
