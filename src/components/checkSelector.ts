export const checkedHTMLTESelector = (element: Element | Document, selector: string): HTMLTemplateElement => {
    const selectedElement = element.querySelector(selector);
    if (!(selectedElement instanceof HTMLTemplateElement))
        throw new Error(`There is no element with "${selector}" selector`);
    return selectedElement;
};

export const checkedElementSelector = (element: Element | Document, selector: string): Element => {
    const selectedElement = element.querySelector(selector);
    if (!(selectedElement instanceof Element)) throw new Error(`There is no element with "${selector}" selector`);
    return selectedElement;
};
export const checkedHTMLElementSelector = (element: Element | Document, selector: string): HTMLElement => {
    const selectedElement = element.querySelector(selector);
    if (!(selectedElement instanceof HTMLElement)) throw new Error(`There is no element with "${selector}" selector`);
    return selectedElement;
};

// export const checkedNode = (element: Node): Element => {
//     if (!(element instanceof Element)) throw new Error(`There is no such element`);
//     return element;
// };
