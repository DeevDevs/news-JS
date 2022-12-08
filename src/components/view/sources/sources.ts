import './sources.css';
import * as types from '../../types';
import { checkedHTMLTESelector, checkedElementSelector, checkClone } from '../../checkSelector';

class Sources implements types.ISources {
    draw(data: types.sourceItem[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = checkedHTMLTESelector(document, '#sourceItemTemp');
        data.forEach((item: types.sourceItem) => {
            const sourceClone: DocumentFragment = checkClone(sourceItemTemp);
            const itemName: Element = checkedElementSelector(sourceClone, '.source__item-name');
            const itemAttr: Element = checkedElementSelector(sourceClone, '.source__item');
            itemName.textContent = item.name;
            itemAttr.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        const sourcesBox: Element = checkedElementSelector(document, '.sources');
        sourcesBox.append(fragment);
    }
}

export default Sources;
