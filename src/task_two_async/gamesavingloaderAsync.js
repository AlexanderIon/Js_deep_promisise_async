import json from "../tack_one_promises/parser.js";
import read from "../tack_one_promises/read.js";

export default class GameSavingLoader {
    static async load() {
        
            let buf= await read()
            return await json (buf)
        
        }

    }
  

