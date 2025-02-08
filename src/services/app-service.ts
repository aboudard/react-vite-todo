export const getTitle = (): Promise<string> => {
  if (import.meta.env.VITE_APP_LOCAL === "true") {
    return fetch("http://localhost:3001/title")
      .then((response) => response.json())
      .then((data) => data.value);
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import.meta.env.VITE_APP_TITLE as string);
      }, 1000);
    });
  }
};
