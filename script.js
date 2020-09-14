'use strict';

function deriveValue() {  
    let result;  
    if (rng.value == 1) {
        result = sum.value * 1.04;
    } else if (rng.value == 2) {
        result = sum.value * 1.24;
    } else if (rng.value == 3) {        
        result = sum.value * 1.48;
    } else {
        result = sum.value * 4.8;
    }
    resultSum.value = result.toFixed(3);
};

function derivePercents() {
    if (rng.value == 1) {
        resultPercents.value = 4 * 1;
    } else if (rng.value == 2) {
        resultPercents.value = 4 * 6;
    } else if (rng.value == 3) {
        resultPercents.value = 4 * 12;
    } else {
        resultPercents.value = 4 * 120;
    }
};


let rng = document.getElementById('resultType');
function resType() {
    return Number(rng.value);
};

rng.addEventListener('change', function (e) {
    deriveValue();
    derivePercents();
});


const sendValues = document.querySelector('#rangeType');
sendValues.addEventListener('change', function (e) {
    deriveValue();
    derivePercents();
});

const sendValKey = document.querySelector('#sum');
sendValKey.addEventListener('keyup', function (e) {
    deriveValue();
    derivePercents();
});
