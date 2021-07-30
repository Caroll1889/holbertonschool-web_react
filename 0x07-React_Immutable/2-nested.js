import {fromJS, getIn } from 'immutable';


const accessImmutableObject = (object, array) => getIn(fromJS(object), array);

export default accessImmutableObject;
