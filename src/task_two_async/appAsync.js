import json from "../tack_one_promises/parser.js";
import read from "../tack_one_promises/read.js";
import GameSavingLoader from "./gamesavingloaderAsync.js"
(async() =>{
    try {
        console.log(await GameSavingLoader.load())
    }
    catch (err){
        console.log(err)
    }


})()

