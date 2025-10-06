const readline = require('readline-sync');

const hurufKecil = "abcdefghijklmnopqrstuvwxyz";
const hurufBesar = hurufKecil.toUpperCase();
const angka = "1234567890";
const symbol = "!@#$%^&*()_+-="
let passLength;
let wSymb;
let wNumber;

console.log("======PASSGEN======");
while(true){
    passLength = parseInt(readline.question("Masukkan panjang password: "));
    if(isNaN(passLength)){
        console.log("Panjang Password Harus angka!");
    } else {
        break;
    }
}


while(true){
    wNumber = readline.question("Sertakan Angka? (Y/N) ").toLowerCase();
    if(wNumber != "y" && wNumber != "n"){
        console.log("Masukkan jawaban Y Atau N!");
    } else {
        break;
    }
} 

while(true){
    wSymb = readline.question("Sertakan Symbol? (Y/N) ").toLowerCase();
    if(wSymb != "y" && wSymb != "n"){
        console.log("Masukkan jawaban Y Atau N!");
    } else {
        break;
    }
}

let poolOfKeys = "" + hurufKecil + hurufBesar;
if(wNumber === "y"){
    poolOfKeys = poolOfKeys + angka;
} else if (wNumber === "n") {
} 

if(wSymb === "y"){
    poolOfKeys = poolOfKeys + symbol;
} else if (wSymb === "n"){
}

let finalPass = "";
let index;
const poolLength = poolOfKeys.length;

for (let i = 0; i < passLength; i++) {
    index = Math.floor(Math.random() * poolLength);
    finalPass = finalPass + poolOfKeys[index];
}

console.log(finalPass);