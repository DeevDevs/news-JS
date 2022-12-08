import * as types from './types';

export const checkedHTMLTESelector: types.ICheckSelector<HTMLTemplateElement> = (el, selector) => {
    const selectedEl = el.querySelector(selector);
    if (!(selectedEl instanceof HTMLTemplateElement)) throw new Error(`There is no element with "${selector}" selector`);
    return selectedEl;
};

export const checkedElementSelector: types.ICheckSelector<Element> = (el, selector) => {
    const selectedEl = el.querySelector(selector);
    if (!(selectedEl instanceof Element)) throw new Error(`There is no element with "${selector}" selector`);
    return selectedEl;
};

export const checkedHTMLElementSelector: types.ICheckSelector<HTMLElement> = (el, selector) => {
    const selectedEl = el.querySelector(selector);
    if (!(selectedEl instanceof HTMLElement)) throw new Error(`There is no element with "${selector}" selector`);
    return selectedEl;
};

export const checkEventTarget = (el: MouseEvent): HTMLElement => {
    const tgEl = el.target;
    if (!(tgEl instanceof HTMLElement)) throw new Error(`There is no targeted element`);
    return tgEl;
};

export const checkEventCurTg = (el: MouseEvent): HTMLElement => {
    const tgEl = el.currentTarget;
    if (!(tgEl instanceof HTMLElement)) throw new Error(`There is no targeted element`);
    return tgEl;
};

export const checkParentNode = (el: HTMLElement): HTMLElement => {
    const tgEl = el.parentNode;
    if (!(tgEl instanceof HTMLElement)) throw new Error(`There is no parent`);
    return tgEl;
};

export const checkIfString = (el: string | null): string => {
    if (typeof el !== 'string') throw new Error(`It is not a string`);
    return el;
};

export const checkClone = (el: HTMLTemplateElement): DocumentFragment => {
    const tgEl = el.content.cloneNode(true);
    if (!(tgEl instanceof DocumentFragment)) throw new Error(`It is not an Element`);
    return tgEl;
};
