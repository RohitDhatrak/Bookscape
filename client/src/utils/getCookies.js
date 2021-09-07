export function getCookies() {
    const pairs = document.cookie.split(";");
    const cookies = {};
    for (const cookie of pairs) {
        const pair = cookie.split("=");
        cookies[(pair[0] + "").trim()] = pair.slice(1).join("=");
    }
    return cookies;
}
