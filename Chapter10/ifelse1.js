var user = prompt("Please any one to know cateogery 1. Cat 2.Snake 3.Parrot");
var cat,snake,parrot;
cat="cat";
snake="snake";
parrot="parrot";

var lower = user.toLowerCase();

if (lower == cat ){
    document.write("Your Entered &nbsp" +user+ ",&nbsp" +user+ "&nbsp is Animal");
}
else if (lower == snake  ){
    document.write("Your Entered &nbsp" +user+ ",&nbsp" +user+ "&nbsp is Reptile");
}
else if (lower == parrot  ){
    document.write("Your Entered &nbsp" +user+ ",&nbsp" +user+ "&nbsp is Bird");
}
else
document.write("Please Enter any one");
