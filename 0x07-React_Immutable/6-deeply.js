import immutable from 'immutable';

const { Map } = immutable;

export function mergeDeeplyElements(page1, page2) {
    const obj1 = Map(page1);
    const obj2 = Map(page2);
    const obj3 = obj1.mergeDeep(obj2)
    return obj3
}
