/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log("Nr. 1---------------------------------------------------------")
let eur = Math.floor(Math.random() * 1000) + 1;

function giveDollars(eur) {
    console.log(`Eurai: ${eur}, doleriai: ${(eur * 1.07356).toFixed(2)}`);
}

giveDollars(eur);

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log("Nr. 2---------------------------------------------------------")
let usd = Math.floor(Math.random() * 1000) + 1;

function giveEuro(usd) {
    console.log(`Doleriai: ${usd}, eurai: ${(usd * 0.931482).toFixed(2)}`);
}

giveEuro(usd);


/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
console.log("Nr. 3---------------------------------------------------------")
function calcBMI(kg, m) {
    if ((kg / (m ** 2)) > 25) {
        console.log(`Ūgis: ${m} m, svoris: ${kg} kg, BMI: ${(kg / (m ** 2)).toFixed(2)}. Viršsvoris.`);
    } else if ((kg / (m ** 2)) >= 18.5 && (kg / (m ** 2)) < 25) {
        console.log(`Ūgis: ${m} m, svoris: ${kg} kg, BMI: ${(kg / (m ** 2)).toFixed(2)}. Normalus svoris.`);
    } else {
        console.log(`Ūgis: ${m} m, svoris: ${kg} kg, BMI: ${(kg / (m ** 2)).toFixed(2)}. Per mažas svoris.`);
    }
}

calcBMI(80, 1.75);
calcBMI(60, 1.75);
calcBMI(54, 1.75);

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log("Nr. 4---------------------------------------------------------")
function ageToTime(age) {
    let hours = age * 8766;
    let minutes = hours * 60;
    let seconds = minutes * 60;

    console.log(`Amžius: ${age}. Amžius valandomis: ${hours}, minutėmis: ${minutes}, sekundėmis: ${seconds}`);
}

ageToTime(25);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log("Nr. 5---------------------------------------------------------")
function convertDegrees(deg, toWhich) {
    if (toWhich === "C") {
        console.log(`Farenheitas: ${deg}, Celsijus: ${5 / 9 * (deg - 32)}`);
    } else if (toWhich === "F") {
        console.log(`Celsijus: ${deg}, Farenheitas: ${9 / 5 * deg + 32}`);
    } else {
        console.log("Netinkami parametrai");
    }
}

convertDegrees(20, "F");
convertDegrees(68, "C");

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
console.log("Nr. 6---------------------------------------------------------")
let str = "";
for (let i = 1; i < 11; i++) {
    if (i === 10) {
        str += `${i}`;
        break;
    }
    str += `${i}-`;
}
console.log(str);

// arba

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join("-"));

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
console.log("Nr. 7---------------------------------------------------------")
for (let i = 1; i < 6; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "*";
    }
    console.log(line);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log("Nr. 8---------------------------------------------------------")
let now = new Date(Date.now());
let christmas = new Date(now.getFullYear(), 11, 25);

console.log(`Iki Kalėdų liko ${((christmas - now) / (1000 * 60 * 60 * 24)).toFixed(1)} diena(-os)`);



// Diena priklauso nuo apvalinimo, nežinojau ar jei lieka dešimtoji dalis apvalint į didžiąją pusę, t.y. math.ceil naudoti,
// ar palikt mažesnę reikšmę. Tikrinausi, ką google sako, tai ten apvalinama iki didesnio sveikojo skaitmens, aš palikau su
// kableliu.




/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log("Nr. 9---------------------------------------------------------")
let arr = ["Tomas", "Dainius", "Paulius", "Jonas"];

console.log(arr.join(","));
console.log(arr.join("+"));

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
console.log("Nr. 10--------------------------------------------------------")

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?', ',', '~', '>', '<', '{', '}', '[', ']', '/', ')', '(', '+', '-', '=', '.'];

// sudedamos privalomos reikšmės
let password = [String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48),
String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65),
String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97),
symbols[Math.floor(Math.random() * symbols.length)]];

// masyvas užpildomas iki galo
for (let i = 0; i < 8; i++) {
    password.push(String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33));
}

// masyvo random sort'inimas
for (let i = 0; i < password.length; i++) {
    let randomIndex = Math.floor(Math.random() * password.length);
    let swap = password[randomIndex];

    password[randomIndex] = password[i];
    password[i] = swap;

}

console.log(password.join(""));



