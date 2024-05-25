function videoopen(){
    window.open('https://www.youtube.com/watch?v=hyIh3dukPas', '_blank');
}
function twitteropen(){
    window.open('https://twitter.com/?lang=en', '_blank');
}
    
function added(){
   window.alert("Added to the cart!");
}
function navigateToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
let items = JSON.parse(localStorage.getItem('cartItems')) || [];
function add_cart(id) {
    var x = document.getElementById(id).getAttribute('value');
    items.push(x); 
    localStorage.setItem('cartItems', JSON.stringify(items));
}

function bill() {
    var x = "";
    if (items.length == 0) {
        return "<h1>No items in cart</h1>";
    } else {
        for (var i = 0; i < items.length; i++) {
            x += ("<li>" + items[i] + "</li>");
        }
        return x;
    }}
    function displaybill() {
        var billContent = bill();
         document.getElementById('ulitem').innerHTML = billContent;
     
     }
     function last(){
        displaybill();
        document.getElementById('price').innerHTML=550;
     }