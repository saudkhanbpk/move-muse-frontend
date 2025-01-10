export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    console.log("Debounce function called");
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("Debounce timeout finished, executing function");
      func.apply(this, args);
    }, wait);
  };
};
