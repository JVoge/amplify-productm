import React from "react";
// import GL from './GL.json';
// import STD from './STD.json';
// import LTD from './LTD.json';
// import VG from './VG.json';
// import VAR from './VAR.json';
import VHI from './VHI.json';
import VAI from './VAI.json';
import VCI from './VCI.json';

export default function prodCheck(currentHeaders, prod) {
    let returnCols=[];
    const VHICols = VHI;
    const VAICols = VAI;
    const VCICols = VCI;

    if (prod === 'VHI') {
        for (let entry of VHICols) {
            if (!currentHeaders.find(col=> col.name === entry.name)) {
                returnCols.push(entry)
            }
        }
    } else if (prod === 'VAI') {
        for (let entry of VAICols) {
            if (!currentHeaders.find(col=> col.name === entry.name)) {
                returnCols.push(entry)
            }
        }
    } else if (prod === 'VCI') {
        for (let entry of VCICols) {
            if (!currentHeaders.find(col=> col.name === entry.name)) {
                returnCols.push(entry)
            }
        }
    }
    returnCols.sort((a,b)=>{
        return a.sortingIndex - b.sortingIndex;
      })

    return (
            returnCols
    )
}