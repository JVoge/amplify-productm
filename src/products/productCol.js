import React from "react";
import VHI from './VHI.json';
import VAI from './VAI.json';
import VCI from './VCI.json';
import GL from './GL.json';
import STD from './STD.json';
import LTD from './LTD.json';
import VG from './VG.json';
import VAR from './VAR.json';

export default function prodCheck(currentHeaders, prod) {
    let returnCols=[];
    const VHICols = VHI;
    const VAICols = VAI;
    const VCICols = VCI;
    const GLCols = GL;
    const STDCols = STD;
    const LTDCols = LTD;
    const VGCols = VG;
    const VARCols = VAR;

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
    } else if (prod === 'VAR') {
        for (let entry of VARCols) {
            if (!currentHeaders.find(col=> col.name === entry.name)) {
                returnCols.push(entry)
            }
        }
    } else if (prod === 'VG') {
        for (let entry of VGCols) {
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
    } else if (prod === 'GL') {
        for (let entry of GLCols) {
            if (!currentHeaders.find(col=> col.name === entry.name)) {
                returnCols.push(entry)
            }
        }
    } else if (prod === 'STD') {
        for (let entry of STDCols) {
            if (!currentHeaders.find(col=> col.name === entry.name)) {
                returnCols.push(entry)
            }
        }
    } else if (prod === 'LTD') {
        for (let entry of LTDCols) {
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