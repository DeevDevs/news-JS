import './sources.css';

type sourceItem = {
    name: string;
    id: string;
};

class Sources {
    draw(data: sourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as any;
        data.forEach((item: sourceItem) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const sourcesBox = document.querySelector('.sources') as HTMLElement;
        sourcesBox.append(fragment);
    }
}

export default Sources;
