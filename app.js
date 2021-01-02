function tambah() {
    var element = document.getElementById('tambah'); 
    value = parseInt(element.getAttribute('value'), 10)+1; 
    element.setAttribute('value', value);
    element.innerHTML = value;
}
function kurang() {
    var element = document.getElementById('tambah'); 
    value = parseInt(element.getAttribute('value'), 10)-1; 
    element.setAttribute('value', value);
    element.innerHTML = value;
}

function tambah2() {
    var element = document.getElementById('tambah2'); 
    value = parseInt(element.getAttribute('value'), 10)+1; 
    element.setAttribute('value', value);
    element.innerHTML = value;
}
function kurang2() {
    var element = document.getElementById('tambah2'); 
    value = parseInt(element.getAttribute('value'), 10)-1; 
    element.setAttribute('value', value);
    element.innerHTML = value;
}

function tambah3() {
    var element = document.getElementById('tambah3'); 
    value = parseInt(element.getAttribute('value'), 10)+1; 
    element.setAttribute('value', value);
    element.innerHTML = value;
}
function kurang3() {
    var element = document.getElementById('tambah3'); 
    value = parseInt(element.getAttribute('value'), 10)-1; 
    element.setAttribute('value', value);
    element.innerHTML = value;
}

function tambah4() {
    var element = document.getElementById('tambah4'); 
    value = parseInt(element.getAttribute('value'), 10)+1; 
    element.setAttribute('value', value);
    element.innerHTML = value;
}
function kurang4() {
    var element = document.getElementById('tambah4'); 
    value = parseInt(element.getAttribute('value'), 10)-1; 
    element.setAttribute('value', value);
    element.innerHTML = value;
}


function total() {

var tambah1 = document.getElementById('tambah'); 
var tambah2 = document.getElementById('tambah2'); 
var tambah3 = document.getElementById('tambah3');
var tambah4 = document.getElementById('tambah4');

var item1 = document.getElementById('item1');
item1.innerHTML = parseInt(tambah1.getAttribute('value'));
var item2 = document.getElementById('item2');
item2.innerHTML = parseInt(tambah2.getAttribute('value'));
var item3 = document.getElementById('item3');
item3.innerHTML = parseInt(tambah3.getAttribute('value'));
var item4 = document.getElementById('item4');
item4.innerHTML = parseInt(tambah4.getAttribute('value'));

var harga1 = 8000 * parseInt(tambah1.getAttribute('value'));
var harga2 = 5000 * parseInt(tambah2.getAttribute('value'));
var harga3 = 10000 * parseInt(tambah3.getAttribute('value'));
var harga4 = 8000 * parseInt(tambah4.getAttribute('value'));

var jumlah_harga = harga1 + harga2 + harga3 + harga4;

sub_total1 = document.getElementById('harga');
sub_total1.innerHTML = harga1;
sub_total2 = document.getElementById('harga2');
sub_total2.innerHTML = harga2;
sub_total3 = document.getElementById('harga3');
sub_total3.innerHTML = harga3;
sub_total4 = document.getElementById('harga4');
sub_total4.innerHTML = harga4;

var total = document.getElementById('total');
total.innerHTML = jumlah_harga;
}