// let arr = [{id: '1',imgUrl: './img1.jpg',title: 'branded shose',rs: '2000', des: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},{},{}]

// var sidenav= document.getElementById('sidenav');
// var menubar= document.getElementById('menubar');

// sidenav.style.width="0px";
// menubar.onclick=function(){
//     if(sidenav.style.width=="0px"){
//         sidenav.style.width="250px";
//     }
//     else{
//         sidenav.style.width="0px";
//     }
// }




function myfunction() {
    window.location = "shoes.html";
}

function cal() {
    var shoeAmt = 5000;
    var qtyOfPrd = document.getElementById('val').value;
    var show = qtyOfPrd * shoeAmt;
    document.getElementById("bill").innerHTML = (`Your Total Bill is Rs.${show}`);

}
// For ADD TO CART
function myCart(no) {
    localStorage.setItem('id',JSON.stringify( no))
    window.location = "cart.html";
}



//Array for store Items

const items = [{
    id: "1",
    name: 'item 001',
    image: './img1.jpg',
    price: 5000,
    quantity: 0

}, {
    id: "2",
    name: 'item 002',
    image: './img2.jpg',
    price: 10000,
    quantity: 0

}, {
    id: "3",
    name: 'item 003',
    image: './img3.jpg',
    price: 2000,
    quantity: 0

}, {
    id: "4",
    name: 'item 004',
    image: './img4.jpg',
    price: 2000,
    quantity: 0

}, {
    id: "5",
    name: 'item 005',
    image: './img5.jpg',
    price: 5000,
    quantity: 0

}, {
    id: "6",
    name: 'item 006',
    image: './img6.jpg',
    price: 1000,
    quantity: 0

}, {
    id: "7",
    name: 'item 007',
    image: './img7.jpg',
    price: 12000,
    quantity: 0

}, {
    id: "8",
    name: 'item 008',
    image: './img8.jpg',
    price: 5000,
    quantity: 0
}];
