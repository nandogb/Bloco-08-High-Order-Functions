const wakeUp = () => `Acordando!!`
const eatTime = () => `Vamos tomer café!!`
const endOfTheDay = () => `Partiu Dormir!!`

const doingThings = (func) => func()
// Ao chamar a função doingThings:
// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

console.log(doingThings(eatTime));