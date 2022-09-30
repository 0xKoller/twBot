import { CronJob, job } from "cron";
import rwClient from "./twitterClient.js";
import fetch from "node-fetch";

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

let dolar;
let message;

const value = async () => {
  try {
    const res = await fetch(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    const datos = await res.json();
    const casa = datos["1"]["casa"];
    dolar = {
      nombre: casa["nombre"],
      venta: parseFloat(casa["venta"]),
      variacion: parseFloat(casa["variacion"].replace(",", ".")),
    };
  } catch (err) {
    console.log(err);
  }
};

const tweet = async (momento) => {
  try {
    await rwClient.v1.tweet(momento);
  } catch (error) {
    console.log(error);
  }
};

const tweetApi = async () => {
  try {
    await value();
    await rwClient.v1.tweet(
      `El ${dolar.nombre}, se encuentra en $${dolar.venta}`
    );
  } catch (e) {
    console.log(e);
  }
};

const jobDaily = new CronJob(
  "0 9 * * 1-5",
  tweet("maniana"),
  null,
  null,
  "America/Argentina/Buenos_Aires"
);

const jobDiario = new CronJob(
  "0 10-16 * * 1-5",
  function () {
    const hora = new Date();
    tweet(`${hora.getHours()}:${hora.getMinutes()}`);
  },
  null,
  null,
  "America/Argentina/Buenos_Aires"
);

const jobFinish = new CronJob(
  "0 17 * * 1-5",
  tweet("final"),
  null,
  null,
  "America/Argentina/Buenos_Aires"
);

const jobTest = new CronJob(
  "* * * * *",
  function () {
    const hora = new Date();
    tweet(`${hora.getHours()}:${hora.getMinutes()}`);
  },
  null,
  null,
  "America/Argentina/Buenos_Aires"
);

jobDaily.start();
jobDiario.start();
jobFinish.start();
jobTest.start();

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

// tweetApi();
