export function arrToMap(arr) {
    return arr.reduce((acc, entity) => ({
        ...acc, [entity.id]: entity
    }), {})
}

export function mapToArr(obj) {
    return Object.keys(obj).map(id => obj[id])
}

export function omitKey(obj, omitKey) {
    return Object.keys(obj).reduce((result, key) => {
        if(key !== omitKey) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}