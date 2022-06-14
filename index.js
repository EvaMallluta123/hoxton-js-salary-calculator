/* eslint-disable @typescript-eslint/no-unused-vars */
let brutsalary=500;
let taxableamount=500-(500*0.05);
if (taxableamount>0 && taxableamount>80) {
   let taxUnder80EUR=(80-0)*0;
}
if (taxableamount>80 && taxableamount>250) {
    let taxUnder450EUR=(250-80)*0.04;
 }
 if (taxableamount>250 && taxableamount>450) {
    let taxUnder450EUR=(450-250)*0.08;
 
 }
 if (taxableamount>450) {
    let taxabout450EUR=(taxableamount-450)*0.10;
 
 }
 function netsalary() {
  
return  taxableamount - (taxUnder80EUR+taxUnder250EUR+ taxUnder450EUR+taxabout450EUR);;

}
console.log(netsalary());
