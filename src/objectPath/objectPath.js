/**
 * Get nested obj or value by path
 * @param {object} obj 
 * @param {string} path 
 */
function getObject(obj, path) {
    
    const pathArr = path.split('.');
    let res = obj;

    for (const s of pathArr) {
        if (s in res) {
            res = res[s];
        } else {
            return undefined;
        }
    }

    return res;

}   

const obj = {
    a: {
        b: {
            c: 'test'
        }
    },
    x: {
        d: null
    }
};

console.log(getObject(obj, 'a.b'));