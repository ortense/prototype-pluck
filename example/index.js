require('../pluck');

console.log([{name:'Tony'},{name:'Matt'},{name:'Peter'}].pluck('name')); //['Tony', 'Matt', 'Peter']
console.log([1,11,111].pluck('toString', true)); //['1','11','111']
console.log(['Clint', 'Nick', 'Steve'].pluck('substring', true, 1, 4)); //['lin', 'ick', 'tev']
