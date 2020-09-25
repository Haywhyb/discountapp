
let myButton = document.getElementById("btn");

myButton = addEventListener("click", calPro);
function calPro(e) {
    e.preventDefault();
let product_name= document.getElementById("pname").value;
let qty= document.getElementById("quantity").value;
// My Code begins here!

let price=300;
// let product_name="TigerNut";
// let qty=10;
let pamount=qty*price;
let dsct1_3=0.1*pamount;
let dsct4_6=0.2*pamount;
let dsct7_8=0.3*pamount;
let dsct9_10=0.4*pamount;


let dpayment1_3= pamount-dsct1_3;
let dpayment4_6= pamount-dsct4_6;
let dpayment7_8= pamount-dsct7_8;
let dpayment9_10=pamount-dsct9_10;
// This is the main programming;
if (qty>=1 && qty<=3) {
    console.log( `You just bought ${product_name} of ${qty} quantities, your amount is ${pamount}, your disounted bonus  price is ${dsct1_3}, 
    Your total amount is ${dpayment1_3}. Thank you for your patronage, we love you!`  );

}
else if (qty>=4&&qty<=6) {
    console.log( `You just bought ${product_name} of ${qty} quantities, your amount is ${pamount}, your disounted bonus  price is ${dsct4_6}, 
    Your total amount is ${dpayment4_6}. Thank you for your patronage, we love you!`  );

}
else if (qty>=7&&qty<=8) {
    console.log( `You just bought ${product_name} of ${qty} quantities, your amount is ${pamount}, your disounted bonus  price is ${dsct1_3}, 
    Your total amount is ${dpayment7_8}. Thank you for your patronage, we love you!`  );

}
else if (qty>=9&&qty<=10) {
    console.log( `You just bought ${product_name} of ${qty} quantities, your amount is ${pamount}, your disounted bonus  price is ${dsct1_3}, 
    Your total amount is ${dpayment9_10}. Thank you for your patronage, we love you!`  );
}

else {
    console.log(`You have not bought any product!!! Payment error!!! We don't have 2k urgently!!!`);
}
}