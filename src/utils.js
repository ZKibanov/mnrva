const getRandomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1)) + min;

export const getAsyncData = async () => {
const delay = ms =>
  new Promise((res, rej) =>
    setTimeout(getRandomInt(1, 5) > 2 ? res : rej, ms)
  );
await delay(getRandomInt(500, 2000));
const res=JSON.parse(localStorage.getItem('words'))
return res;
};

export const setAsyncData = async data => {
    const delay = ms =>
      new Promise((res, rej) =>
        setTimeout(getRandomInt(1, 5) > 2 ? res : rej, ms)
      );
    await delay(getRandomInt(500, 2000));

    localStorage.setItem('words',JSON.stringify(data));
    return {status:'ok'}
    };