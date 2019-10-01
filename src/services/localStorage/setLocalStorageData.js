export default function setLocalStorage(key, payload) {
    return Promise.resolve(localStorage.setItem(key, JSON.stringify(payload)));
}
