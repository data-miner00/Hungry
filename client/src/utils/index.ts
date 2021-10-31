export function setCookie<T>(cName: string, cValue: T, expDays: number) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/';
}

export function setLocalStorage(cName: string, cValue: string) {
  localStorage.setItem(cName, cValue);
}

export function getLocalStorage(cName: string): string | null {
  return localStorage.getItem(cName);
}

export function getCookie(cName: string) {
  const name = cName + '=';
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}
