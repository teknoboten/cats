const fs = require('fs');

const breedDetailsFromFile = function(breed, callBack) {  //make this a callback

  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    if (!error) callBack(data); //if readFile returns w/o error, send data to callback (printToConsole)
  });
};

const printToConsole = (data) => {
  console.log(data);
}

const bombay = breedDetailsFromFile('Bombay', printToConsole);
//CHANGE: breedDetailsFromFile now takes a callback when we call it




























//this does NOT work

// const fs = require('fs');

// const breedDetailsFromFile = (breed) => {
//   console.log('breedDetailsFromFile: Calling readFile...'); // returns undefined as soon as it's called because readFile is slow

//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => { //readFile is an ASYNC function !
//     //expects a callback which will be executed once readFile has completed
  
//     console.log("In readFile's Callback: it has the data.");
  
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) return data;
//   });
// };

// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay);

