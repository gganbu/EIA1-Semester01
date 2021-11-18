console.log("EIA-Aufgabe 6");
window.addEventListener("load", function () {
var eu2008:number = 4965.7;
var eu2018:number = 4209.3;

var na2008:number = 6600.4;
var na2018:number = 6035.6;

var sa2008:number = 1132.6;
var sa2018:number = 1261.5;

var af2008:number = 1028;
var af2018:number = 1235.5;

var as2008:number = 12954.7;
var as2018:number = 16274.1;

var au2008:number = 1993;
var au2018:number = 2100.5;

var w2008:number = eu2008+na2008+sa2008+af2008+as2008+au2008;
var w2018:number = eu2018+na2018+sa2018+af2018+as2018+au2018;

var euworld:number = eu2018/w2018*100;
var euprozent :number = (eu2018/eu2008-1)*100;
var euabsolute:number = eu2018-eu2008;

var naworld:number = na2018/w2018*100;
var naprozent :number = (na2018/na2008-1)*100;
var naabsolute:number = na2018-na2008;

var saworld:number = sa2018/w2018*100;
var saprozent :number = (sa2018/sa2008-1)*100;
var saabsolute:number = sa2018-sa2008;

var afworld:number = af2018/w2018*100;
var afprozent :number = (af2018/af2008-1)*100;
var afabsolute:number = af2018-af2008;

var asworld:number = as2018/w2018*100;
var asprozent :number = (as2018/as2008-1)*100;
var asabsolute:number = as2018-as2008;

var auworld:number = au2018/w2018*100;
var auprozent :number = (au2018/au2008-1)*100;
var auabsolute:number = au2018-au2008;


console.log (
    "Emission absolute of Europe in 2018:", eu2018.toFixed(2), "kg CO2 \n",
    "Relative to total world's emission:", euworld.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (in %):", euprozent.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (absolute):", euabsolute.toFixed(0), "kg CO2 \n",
)

console.log (
    "Emission absolute of North America in 2018:", na2018.toFixed(2), "kg CO2 \n",
    "Relative to total world's emission:", naworld.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (in %):", naprozent.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (absolute):", naabsolute.toFixed(0), "kg CO2 \n",
)

console.log (
    "Emission absolute of South America in 2018:", sa2018.toFixed(2), "kg CO2 \n",
    "Relative to total world's emission:", saworld.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (in %):", saprozent.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (absolute):", saabsolute.toFixed(0), "kg CO2 \n",
)

console.log (
    "Emission absolute of Africa in 2018:", af2018.toFixed(2), "kg CO2 \n",
    "Relative to total world's emission:", afworld.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (in %):", afprozent.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (absolute):", afabsolute.toFixed(0), "kg CO2 \n",
)

console.log (
    "Emission absolute of Asia in 2018:", as2018.toFixed(2), "kg CO2 \n",
    "Relative to total world's emission:", asworld.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (in %):", asprozent.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (absolute):", asabsolute.toFixed(0), "kg CO2 \n",
)

console.log (
    "Emission absolute of Australia in 2018:", au2018.toFixed(2), "kg CO2 \n",
    "Relative to total world's emission:", auworld.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (in %):", auprozent.toFixed(1), "% \n",
    "Growth rate between 2008 and 2018 (absolute):", auabsolute.toFixed(0), "kg CO2 \n",
)


var europe = "Europe";
document.querySelector(".eu").addEventListener("click", function() {country(europe, eu2018, euworld, euprozent, euabsolute); });
var northamerica = "Northamerica";
document.querySelector(".na").addEventListener("click", function() {country(northamerica, na2018, naworld, naprozent, naabsolute); });
var southamerica = "Southamerica";
document.querySelector(".sa").addEventListener("click", function() {country(southamerica, sa2018, saworld, saprozent, saabsolute); });
var africa = "Africa";
document.querySelector(".af").addEventListener("click", function() {country(africa, af2018, afworld, afprozent, afabsolute); });
var asia = "Asia";
document.querySelector(".as").addEventListener("click", function() {country(asia, as2018, asworld, asprozent, asabsolute); });
var australia = "Australia";
document.querySelector(".au").addEventListener("click", function() {country(australia, au2018, auworld, auprozent, auabsolute); });


function country(ccountry, country2018, countryworld, countryprozent, countryabsolute) {

document.querySelector(".emission").innerHTML = country2018.toFixed(2);
document.querySelector(".relative").innerHTML = countryworld.toFixed(2) + "%";
document.querySelector(".growth").innerHTML = countryprozent.toFixed(2) + "%";
document.querySelector(".absolute").innerHTML = countryabsolute.toFixed(2);
document.querySelector("#titleRegion").innerHTML = ccountry;
document.querySelector("#subtitleRegion").innerHTML = ccountry;

var pos = <HTMLElement>document.querySelector(".chart");
pos.style.height = countryworld + "px";

}
});
