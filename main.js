
const emojisAvaibles = ["🐊","🐆","🐅","🐃","🐂","🐄", "🦬", "🐪","🦙","🐘","🦏","🦛","🦣","🐐","🐑", "🐎", "🐖", "🦇", "🐓","🦃","🕊","🦅","🦆"]


let matrixMaker = (rows, columns, array) => {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let subArray = [];


    for (let j = 0; j < columns; j++) {
      subArray.push(array[Math.trunc(Math.random()*array.length)])

    }
    matrix.push(subArray)


  }
  return matrix
}

console.log(matrixMaker(3,3, emojisAvaibles))




let stringInHtml = (array) => {
    let matrixInHtml = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
        matrixInHtml += `<div class="item">${array[i][j]}</div>`
        }
    }
    return matrixInHtml

}





const matrixContainer = document.querySelector(".matrix-container")
matrixContainer.innerHTML = stringInHtml(matrixMaker(5,5, emojisAvaibles))



// /* const generarStringHTML = (array) => {
//   let resultado = ""

//   for (let i = 0; i < array.length; i++) {
//     resultado = resultado + `<div class="item">${array[i]}</div>`
    
//   }
//   return resultado
// }


// const grilla = document.querySelector(".grilla")

// grilla.innerHTML = generarStringHTML(["🍋", "🍋","🍋", "🍋","🍋","🍋",])
//  