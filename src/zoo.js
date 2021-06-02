/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function getSpeciesByIds(...ids) {
  const search = ids.map((element) => (data.species.find((key) => key.id === element)));
  return search;
}
// Consegui retornar mais de uma chave com a ajuda do colega Rodrigo Facury que sugeriu o uso do map.

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((name) => name.name === animal);
  const every = getAnimal.residents.every((key) => key.age > age);
  return every;
}
// Fiz o encadeamento do every com o find baseada no código do colega Rodrigo Facury;

// console.log(getAnimalsOlderThan('lions', 20));

function getEmployeeByName(employeeName) {
  const getEmployee = data.employees.find((key) => key.firstName === employeeName || key.lastName
  === employeeName);
  if (getEmployee === undefined) {
    return {};
  }
  return getEmployee;
}

// console.log(getEmployeeByName());

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// console.log(createEmployee({id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1', firstName: 'Nigel', lastName: 'Nelson',}, {managers: ['burlId', 'olaId'],
//   responsibleFor: ['lionId', 'tigersId']}));

function isManager(id) {
  const manager = data.employees.map((key) => key.managers.some((value) => value === id));
  const ismanager = manager.some((verify) => verify === true);
  return ismanager;
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db834'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
