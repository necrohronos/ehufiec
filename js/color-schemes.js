let barwy31 = document.getElementById('scheme1');
let barwy32 = document.getElementById('scheme2');
let barwy160 = document.getElementById('scheme3');
let barwy211 = document.getElementById('scheme4');
let barwy295 = document.getElementById('scheme5');
let barwy296 = document.getElementById('scheme6');
let barwy297 = document.getElementById('scheme7');
let barwy420 = document.getElementById('scheme8');
let tlo = document.getElementById('exbody');
let nazwa = document.getElementById('extitle');
let numer = document.getElementById('nr');
let aktywny = document.getElementById('exactivelink');

barwy31.addEventListener('click', function () {
   tlo.style.background = "radial-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7) )";
    nazwa.style.color ="#fff";
    numer.innerText= "31";
});

barwy32.addEventListener('click', function () {
   tlo.style.background = "radial-gradient( rgba(128, 0, 0, 1), rgba(128, 0, 0, 0.7) )";
    nazwa.style.color ="#fff";
    aktywny.style.color = "#800000 !important"
    numer.innerText= "32";
});
barwy160.addEventListener('click', function () {
   tlo.style.background = "radial-gradient( rgba(127, 194, 65, 1), rgba(127, 194, 65, 0.7) )";
    nazwa.style.color ="#fff";
    numer.innerText= "160";
});
barwy211.addEventListener('click', function () {
   tlo.style.background = "radial-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7) )";
    nazwa.style.color ="#ff780e";
    numer.innerText= "211";
});
barwy295.addEventListener('click', function () {
   tlo.style.background = "radial-gradient( rgba(242, 47, 33, 1), rgba(242, 47, 33, 0.7) )";
    nazwa.style.color ="#fff";
    numer.innerText= "295";
});

barwy296.addEventListener('click', function () {
   tlo.style.background = "radial-gradient( rgba(20, 158, 225, 1), rgba(20, 158, 225, 0.7) )";
    nazwa.style.color ="#ff780e";
    aktywny.style.color = "#800000 !important"
    numer.innerText= "296";
});
barwy297.addEventListener('click', function () {
   tlo.style.background = "radial-gradient( rgba(0, 0, 65, 1), rgba(0, 0, 65, 0.7) )";
    nazwa.style.color ="#fff";
    numer.innerText= "297";
});
barwy420.addEventListener('click', function () {
   tlo.style.background = "radial-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7) )";
    nazwa.style.color ="#149ee1";
    numer.innerText= "420";
});
