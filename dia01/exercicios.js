// const employeesNames = (completeName, contact) => {
//     const obj = {
//         nome: completeName,
//         email: contact,
//     };
//     return obj
// }

// const newEmployees = (func) => {
//     const employees = {
//       id1: func('Pedro Guerra', 'pedro@hotmail.com'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: func('Luiza Drumond', 'luiza@hotmail.com'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: func('Carla Paiva', 'carla@hotmail.com'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   console.log(newEmployees(employeesNames));

//todo

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const comparacao = (respostaEscola, respostaAluno) => {
//     let soma = 0
//     for (const resposta1 of respostaEscola) {  
//         var respostao = resposta1
//         }
//         for (const resposta2 of respostaAluno) {
//             var respostas = resposta2
//         }
//         if (resposta === respostas) {
//             soma += 1
            
//         }
//         return soma
//     }
// console.log(comparacao(RIGHT_ANSWERS, STUDENT_ANSWERS));


// const gabarito = (respostaEscola, respostaAluno, func) => {
//     return pontuação
// }

//todo

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonDamage = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(dragonDamage(15,dragon.healthPoints ));

const warriorMaxDamage = () => { 
 let maxDmg = warrior.strength * warrior.weaponDmg
 return maxDmg
}

const mageMaxDamage = () => {
let maxDmg = mage.intelligence * 2
return maxDmg
}

const partyDamage = (min, max) => {
    result = Math.floor(Math.random() * (max - min +1)) + min;
    return result
}
// console.log(partyDamage(warrior.strength, warriorMaxDamage()));

// console.log(partyDamage(mage.intelligence, mageMaxDamage()));


const manaSpent = (hero) => {
    hero.mana -= 15
    hero.damage = partyDamage(mage.intelligence, mageMaxDamage())
    return hero
}

// console.log(manaSpent(mage));

// const gastoDeMana = (hero) => {
//     for (let index = hero.mana; index > 0; index -= 15) {
//         var manaRestante = index;
//     }
//     return manaRestante
// }

// console.log(gastoDeMana(mage));

let number = 150

const decrement = (counter) => {
    while (counter > 5) {
        return counter -= 15  
    }
    if (counter < 5) {
        return `Mana insuficiente`
    }
}

console.log(decrement(number));
