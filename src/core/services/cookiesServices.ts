export function setCookie(
  name: string,
  value: any,
  days: number = 60,
  secure = false
  // httpOnly = false
) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  let newCookie = `${encodeURIComponent(name)}=${
    value || ""
  }${expires}; path=/; SameSite=Strict`;
  if (secure) newCookie += "; Secure";
  // if (httpOnly) newCookie += '; HttpOnly'; // ! Should be done from BE.
  document.cookie = newCookie;
}
export function getCookie(name: string) {
  let nameEQ = `${encodeURIComponent(name)}=`;
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export function deleteCookie(name: string) {
  setCookie(encodeURIComponent(name), undefined, -1);
}
