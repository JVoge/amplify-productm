import React from "react";
import data from './products/mockuprowdata.json';
import VHICols from './products/VHI.json';
import VAICols from './products/VAI.json';
import VCICols from './products/VCI.json';

export default function rowGen(stateArg, productArg) {
    let returnObj={};
    let queryResult = data.find(t=> t.state === stateArg && t.product === productArg)
    let prodCols;

    if (productArg==="VAI") {
        prodCols = VAICols;
    } else if (productArg==="VCI") {
        prodCols = VCICols;
    } else if (productArg==="VHI") {
        prodCols = VHICols;
    }

    if (queryResult) {
        prodCols.forEach(
            obj=> {
                returnObj[obj.name]=queryResult[obj.name] ? queryResult[obj.name] : "No variation"
            }
        )
    } else {
        prodCols.forEach(
            obj=> {
                if (obj.name==="state") {
                    returnObj[obj.name] = stateArg;
                } else if (obj.name==="product") {
                    returnObj[obj.name] = productArg;
                } else {
                    returnObj[obj.name]="No variation"
                }
            }
        )
    }

    return (
            returnObj
    )
}