import {fromJS, getIn } from 'immutable';

// export default function accessImmutableObject(object, array) {
//   return getIn(fromJS(object), array);
// }

const accessImmutableObject = (object, array) => getIn(fromJS(object), array);

export default accessImmutableObject;