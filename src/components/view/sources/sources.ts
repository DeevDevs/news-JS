import './sources.css';
import * as types from '../../types';
import { checkedHTMLTESelector, checkedElementSelector } from '../../checkSelector';

// type sourceItem = {
//     name: string;
//     id: string;
// };

class Sources implements types.ISources {
    draw(data: types.sourceItem[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        // const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const sourceItemTemp = checkedHTMLTESelector(document, '#sourceItemTemp');
        data.forEach((item: types.sourceItem) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
            // const sourceClone = checkedNode(sourceItemTemp.content.cloneNode(true));
            // const itemName = sourceClone.querySelector('.source__item-name') as Element;
            const itemName = checkedElementSelector(sourceClone, '.source__item-name');
            // const itemAttr = sourceClone.querySelector('.source__item') as Element;
            const itemAttr = checkedElementSelector(sourceClone, '.source__item');
            itemName.textContent = item.name;
            itemAttr.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const sourcesBox: Element = checkedElementSelector(document, '.sources');
        sourcesBox.append(fragment);
    }
}

export default Sources;
