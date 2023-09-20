const getFirstNames = require("../utilities/utils/index");
const namesList = require("../country/state/city/index");

const getPeopleInCity = (namesList) => {
  return getFirstNames(namesList);
};
console.log(getPeopleInCity(namesList));

module.exports = getPeopleInCity;
