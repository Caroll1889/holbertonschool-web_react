import immutable from "immutable";

const { fromJS } = immutable;

export default function getImmutableObject(object) {
    fromJS(object)
}
