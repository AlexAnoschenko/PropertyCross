export default function getLocalStorageData(key) {
    if (localStorage.getItem(key)) {
        return Promise.resolve(JSON.parse(localStorage.getItem(key)));
    }
    return Promise.resolve([]);
}
