const randomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
};

export default randomNumber;
