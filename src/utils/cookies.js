function getCookies(key) {
    if (process.browser) {
        const cookies = document.cookie.split(';');
        const cookieObj = {};
        cookies.forEach(c => {
            const [key, value] = c.split('=');
            cookieObj[key.trim()] = value;
        });
        if (key) {
            return cookieObj[key] ? cookieObj[key] : null;
        }
        return cookieObj;
    }

}

function setCookie(key, value) {
    document.cookie = `${key}=${value}`;
}

export { getCookies, setCookie };