import {scoreMax} from './../config/app';

function moneyFormat(data){
    const dollarUSLocale = Intl.NumberFormat('en-US');
    return `$${dollarUSLocale.format(data)}`;
}

const startFormat = (starts)=>{
    const startsCount = scoreMax;
    let output = "";
    for(let i=0; i<startsCount; i++){
      if(starts>i){
        output += "⭐";
      }else{
        output += "✩";
      }  
    }
    return output;
}


module.exports = {
    moneyFormat,
    startFormat
}