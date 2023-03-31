import React from "react";
// import GL from './GL.json';
// import STD from './STD.json';
// import LTD from './LTD.json';
// import VG from './VG.json';
// import VAR from './VAR.json';
import VHI from './VHI.json';
import VAI from './VAI.json';
import VCI from './VCI.json';

export default function removeCheck(currentHeaders, currentProducts, deletedObj) {
    let returnCols=[];
    const uniqueProducts = [];
    const VHICols = VHI;
    const VAICols = VAI;
    const VCICols = VCI;

    for (let row of currentProducts) {
        if (!uniqueProducts.some(item => item.product === row.product)) {
            uniqueProducts.push(row.product)
        }
    }
    //uniqueProducts now contains only the remaining products in an array
    for (let prod of uniqueProducts) {
        //loop through each unique product, grab its product name and push the columns to returnCols
        if (prod === 'VHI') {
            for (let entry of VHICols) {
                if (!returnCols.find(col=> col.name === entry.name)) {
                    returnCols.push(entry)
                }
            }
        } else if (prod === 'VAI') {
            for (let entry of VAICols) {
                if (!returnCols.find(col=> col.name === entry.name)) {
                    returnCols.push(entry)
                }
            }
        } else if (prod === 'VCI') {
            for (let entry of VCICols) {
                if (!returnCols.find(col=> col.name === entry.name)) {
                    returnCols.push(entry)
                }
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