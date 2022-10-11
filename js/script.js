/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

const nomeCognome = prompt("Inserisci nome e cognome")
const kmDaPercorrere = parseInt(prompt("Quanti km vuoi percorrere?"));
const etaPasseggero = parseInt(prompt("Quanti anni hai?"));


const prezzoPerKm = (0.21);
const scontoMin = (0.20);
const scontoOver65 = (0.40);
const prezzoBiglietto = (kmDaPercorrere * prezzoPerKm);
let scontoApplicato;
let prezzoSContato;
let prezzoFinale;

if(etaPasseggero >=18 && etaPasseggero <=65 + (kmDaPercorrere * prezzoPerKm));