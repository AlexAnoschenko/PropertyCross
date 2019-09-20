export default function getLocalStorageData(key) {
    if (localStorage.getItem(key)) {
        return Promise.resolve(localStorage.getItem(key).split(','));
    }
    return Promise.resolve([]);
}
