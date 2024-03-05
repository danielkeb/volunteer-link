export function getCookie(name: string) {
  if (typeof document === "undefined") {
    return undefined;
  }

  const value = `; `;
  const parts = document.cookie.split(value);

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].split("=");
    if (part[0].trim() === name) {
      return part[1].trim();
    }
  }

  return null;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}
