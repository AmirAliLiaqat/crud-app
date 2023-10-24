
export const setLocalStorageValue = (key: string, value: string) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorageValue = (key: string) => {
    const data = localStorage.getItem(key);

    if(data) {
        return JSON.parse(data);
    }
}

export const deleteLocalStorageValue = (key: string) => {
    return localStorage.removeItem(key);
}