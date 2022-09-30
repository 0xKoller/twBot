//github.com/plhery/node-twitter-api-v2/blob/HEAD/doc/examples.md

import rwClient from "./twitterClient.js";
import { CronJob } from "cron";

const possitiveMessages = [
  "sos el guru del mercado",
  "te levantas a analizar el mercado no?",
  "ojala fueras mi contador",
  "a gastar la plata en STEAM mi wacho",
  "sale ese MC?",
  "vas a poder comprar la Patagonia.",
  "directo a Disney.",
];

const negativeMessages = [
  "No mi negro, te cagaron.",
  "Si compraste antes, te las mandaste.",
  "No compres sin analizarlo!",
  "Ya volvera a bajar...",
];

const tweet = async () => {
  try {
    await rwClient.v1.tweet("Hola");
  } catch (error) {
    console.log(error);
  }
};
const jobDaily = new CronJob("0 9 * * 1-5");

const jobDiario = new CronJob("0 10-16 * * 1-5");

const jobFinish = new CronJob("0 17 * * 1-5");

// let dolar;
// let message;

// const value = async () => {
//   try {
//     const res = await fetch(
//       "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
//     );
//     const datos = await res.json();
//     const casa = datos["1"]["casa"];
//     dolar = {
//       nombre: casa["nombre"],
//       venta: parseFloat(casa["venta"]),
//       variacion: parseFloat(casa["variacion"].replace(",", ".")),
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };

// const doMagic = (valor) => {
//   console.log("hola", valor);
//   let valorActual = valor.venta;
//   let valorAnterior = 0;
//   if (valor.variacion < 0) valorAnterior = 0;
// };

// function valores() {
//   value().then(() => {
//     let answer = dolar["variacion"];
//     if (answer > 0) {
//       message = `El dolar blue subio a $${dolar.venta}, ${
//         negativeMessages[Math.floor(Math.random() * negativeMessages.length)]
//       }`;
//     } else {
//       message = `El dolar blue bajo a $${dolar.venta}, ${
//         possitiveMessages[Math.floor(Math.random() * possitiveMessages.length)]
//       }`;
//     }
//     console.log(message);
//   });
// }

// var nextDate = new Date();
// console.log("Entro acaaa");
// nextDate.setHours(nextDate.getHours());
// nextDate.setMinutes(nextDate.getMinutes() + 1);
// nextDate.setSeconds(nextDate.getSeconds()); // I wouldn't do milliseconds too ;)
// console.log(nextDate);
// var difference = nextDate - new Date();
// console.log(difference);
// setInterval(valores, difference);
