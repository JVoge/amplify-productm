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
import GLData from './products/GLDB.json';
import STDData from './products/STDDB.json';
import LTDData from './products/LTDDB.json';
import VGData from './products/VGDB.json';
import VARData from './products/VARDB.json';
import VCIData from './products/VCIDB.json';
import VAIData from './products/VAIDB.json';
import VHIData from './products/VHIDB.json';

export default function rowGen(stateArg, productArg) {
    let returnObj={};
    let queryResult = false;
    let prodCols;

    if (productArg==="VAI") {
        queryResult = VAIData.find(t=> t.state === stateArg && t.product === productArg)
        prodCols = VAICols;
    } else if (productArg==="VCI") {
        queryResult = VCIData.find(t=> t.state === stateArg && t.product === productArg)
        prodCols = VCICols;
    } else if (productArg==="VHI") {
        queryResult = VHIData.find(t=> t.state === stateArg && t.product === productArg)
        prodCols = VHICols;
    } else if (productArg==="GL") {
        queryResult = GLData.find(t=> t.state === stateArg && t.product === productArg)
        prodCols = GLCols;
    } else if (productArg==="STD") {
        queryResult = STDData.find(t=> t.state === stateArg && t.product === productArg)
        prodCols = STDCols;
    } else if (productArg==="LTD") {
        queryResult = LTDData.find(t=> t.state === stateArg && t.product === productArg)
        prodCols = LTDCols;
    } else if (productArg==="VG") {
        queryResult = VGData.find(t=> t.state === stateArg && t.product === productArg)
        prodCols = VGCols;
    } else if (productArg==="VAR") {
        queryResult = VARData.find(t=> t.state === stateArg && t.product === productArg)
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