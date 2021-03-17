export const getData = () => {
  return new Promise((resolve, reject) => {
    const cards = new XMLHttpRequest();
    cards.open("GET", "http://www.blackbullion.com/_dev/api/lessons");

    cards.onreadystatechange = () => {
      if (cards.readyState === 4) {
        if (cards.status === 200) {
          resolve(JSON.parse(cards.responseText).data);
        } else {
          reject(new Error(`Error loading courses`));
        }
      }
    };

    cards.send();
  });
};
