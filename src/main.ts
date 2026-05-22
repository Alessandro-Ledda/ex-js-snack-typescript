// SNACK 1
// controllo dati proveninti da api 

let response: unknown;

if (typeof response === 'string') {
  console.log(response.toUpperCase());
} else if (typeof response === 'number') {
  const results = response * 2;
  console.log(results);
} else if (typeof response === 'boolean') {
  console.log(response ? "si" : "no");
} else if (response === null) {
  console.log('il dato è vuoto');
} else if (Array.isArray(response)) {
  console.log(response.length);
} else if (response instanceof Promise) {
  response.then((message) => console.log(message));
} else {
  console.log("Tipo nonn supportato")
}

// SNACK 2
// creazione type Alias 'Dipendente'
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniServizio: number[]
}