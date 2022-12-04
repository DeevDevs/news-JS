import './sources.css';
import * as types from '../../types';

// type sourceItem = {
//     name: string;
//     id: string;
// };

class Sources {
    draw(data: types.sourceItem[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        data.forEach((item: types.sourceItem) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
            const itemName = sourceClone.querySelector('.source__item-name') as Element;
            const itemAttr = sourceClone.querySelector('.source__item') as Element;
            itemName.textContent = item.name;
            itemAttr.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const sourcesBox = document.querySelector('.sources') as HTMLElement;
        sourcesBox.append(fragment);
    }
}

export default Sources;
