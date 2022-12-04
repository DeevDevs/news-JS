import * as types from '../types';

class Loader {
    readonly baseLink: string;
    readonly options: object;
    
    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: types.respObject,
        callback: types.callbackFnGetSources | types.callbackFnGetNews = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: types.responseObject) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: object, endpoint: string) {
        const urlOptions = { ...this.options, ...options } as object;
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach((entry: string[]) => {
            url += `${entry[0]}=${entry[1]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string,
        endpoint: string,
        callback: types.callbackFnGetSources | types.callbackFnGetNews,
        options = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
