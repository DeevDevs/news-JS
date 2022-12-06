export type respObject = {
    endpoint: string;
    options?: object;
    callback?: Function;
};

export type responseObject = {
    ok: boolean;
    status: number;
    statusText: string;
    json: Function;
};

export type dataExample = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
};

export type sourceItem = {
    name: string;
    id: string;
};

export type newsData = {
    articles: dataExample[];
};

export type sourcesData = {
    sources: sourceItem[];
};

export type callbackFnGetNews = (arg0: newsData) => void;
export type callbackFnGetSources = (arg0: sourcesData) => void;

export interface ILoader {
    baseLink: string;
    options: object;
    load(method: string, endpoint: string, callback: callbackFnGetSources | callbackFnGetNews, options: {}): void;
    makeUrl(options: object, endpoint: string): string;
    errorHandler(res: responseObject): responseObject;
    getResp({ endpoint, options = {} }: respObject, callback: callbackFnGetSources | callbackFnGetNews): void;
}

export interface INews {
    draw(data: dataExample[]): void;
}

export interface ISources {
    draw(data: sourceItem[]): void;
}
