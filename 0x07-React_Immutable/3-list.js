import immutable from 'immutable';
const { List } = immutable;

export function getListObject(array) {
    return List(array);
}

export function addElementToList(list, element) {
    return list.push(element);
}
