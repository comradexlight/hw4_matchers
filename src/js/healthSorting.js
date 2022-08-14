function healthSorting(chararchetrsArray) {
  return chararchetrsArray.sort((char1, char2) => (char1.health < char2.health ? 1 : -1));
}

module.exports = {
  healthSorting,
};
