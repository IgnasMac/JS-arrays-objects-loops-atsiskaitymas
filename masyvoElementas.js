
const skaiciai = [10, 20, 30, 40, 50];


function gautiElementa(pozicija) {
    if (pozicija >= 0 && pozicija < skaiciai.length) {
        return skaiciai[pozicija];
    } else {
        return "Nurodyta pozicija yra už masyvo ribų.";
    }
}


console.log(gautiElementa(2)); 
console.log(gautiElementa(5)); 