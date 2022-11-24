import json from "../tack_one_promises/parser.js";
import read from "../tack_one_promises/read.js";
(async() =>{
    try {
        let buf= await read()
        console.log(await json (buf))
    }
    catch (err){
        console.log(err)
    }


})()