export type sourceItem = {
    name: string;
    id: string;
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

export type newsData = {
    articles: dataExample[];
};
export type sourcesData = {
    sources: sourceItem[];
};

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

export type callbackFnGetNews = (arg0: newsData) => void;
export type callbackFnGetSources = (arg0: sourcesData) => void;
