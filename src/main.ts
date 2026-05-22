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
} else {
  console.log("Tipo nonn supportato")
}