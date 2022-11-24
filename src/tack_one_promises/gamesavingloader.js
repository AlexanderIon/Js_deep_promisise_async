import read from './read.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((dataFromBuffer) => json(dataFromBuffer))
        .then((data) => {
          resolve(data);
        });
    });
  }
}

// function load(){
//     return new Promise((resolve, reject) => {
//         read()
//         .then(dataFromBuffer => {
//           return json(dataFromBuffer)
//         })
//         .then(data => {
//           resolve(data)
//         })

//     })
// }
// read()
//           .then(dataFromBuffer => {
//             return json(dataFromBuffer)
//           })
//           .then(data => {
//             console.log(data)
//           })

// load().then((saving) => {
//     console.log(saving)
// })
