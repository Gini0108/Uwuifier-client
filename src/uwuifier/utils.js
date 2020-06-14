'use strict';
export const getElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};
export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getCapitalPercentage = (input) => {
    let totalLetters = 0;
    let upperLetters = 0;
    for (const currentLetter of input) {
        if (new RegExp(/^[a-zA-Z]+$/).test(currentLetter)) {
            totalLetters++;
            if (currentLetter === currentLetter.toUpperCase()) {
                upperLetters++;
            }
        }
    }
    return upperLetters / totalLetters;
};
export const InitModifierParam = () => {
    return (target, key) => {
        let value = target[key];
        let sum = 0;
        const getter = () => value;
        const setter = (next) => {
            if (typeof next === 'object') {
                sum = Object.values(next).reduce((a, b) => a + b);
            }
            if (next < 0 || sum < 0 || next > 1 || sum > 1) {
                throw new Error(`${key} modifier value must be a number between 0 and 1`);
            }
            value = next;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
};
export function isUri(value) {
    if (!value)
        return false;
    // check for illegal characters
    // eslint-disable-next-line
    if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value))
        return false;
    // check for hex escapes that aren't complete
    // eslint-disable-next-line
    if (/%[^0-9a-f]/i.test(value) || /%[0-9a-f](:?[^0-9a-f]|$)/i.test(value))
        return false;
    // directly from RFC 3986
    // eslint-disable-next-line
    const split = value.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    if (!split)
        return false;
    const [scheme, authority, path] = [split[1], split[2], split[3]];
    // scheme and path are required, though the path can be empty
    if (!(scheme && scheme.length && path.length >= 0))
        return false;
    // if authority is present, the path must be empty or begin with a /
    if (authority && authority.length) {
        // eslint-disable-next-line
        if (!(path.length === 0 || /^\//.test(path)))
            return false;
    }
    else {
        // if authority is not present, the path must not start with //
        // eslint-disable-next-line
        if (/^\/\//.test(path))
            return false;
    }
    // scheme must begin with a letter, then consist of letters, digits, +, ., or -
    // eslint-disable-next-line
    if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase()))
        return false;
    return true;
}