import React from "react";
import data from './products/mockuprowdata.json';
import VHICols from './products/VHI.json';
import VAICols from './products/VAI.json';
import VCICols from './products/VCI.json';
import GLCols from './products/GL.json';
import STDCols from './products/STD.json';
import LTDCols from './products/LTD.json';
import VGCols from './products/VG.json';
import VARCols from './products/VAR.json';

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
    } else if (productArg==="GL") {
        prodCols = GLCols;
    } else if (productArg==="STD") {
        prodCols = STDCols;
    } else if (productArg==="LTD") {
        prodCols = LTDCols;
    } else if (productArg==="VG") {
        prodCols = VGCols;
    } else if (productArg==="VAR") {
        prodCols = VARCols;
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