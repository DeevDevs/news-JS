import AppLoader from './appLoader';
import * as types from '../types';
import { checkParentNode, checkIfString, checkEventCurTg, checkEventTarget } from '../checkSelector';

class AppController extends AppLoader {
    public getSources(callback: types.callbackFnGetSources) {
        super.getResp({ endpoint: 'sources' }, callback);
    }
    public getNews(e: MouseEvent, callback: types.callbackFnGetNews) {
        let target: HTMLElement = checkEventTarget(e);
        const newsContainer: HTMLElement = checkEventCurTg(e);

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = checkIfString(target.getAttribute('data-source-id'));
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = checkParentNode(target);
        }
    }
}

export default AppController;
