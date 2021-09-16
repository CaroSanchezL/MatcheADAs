

const emojisAvaibles = ["🐊","🐆","🐘","🦏","🦣","🐑"]

//ELEMENTOS DEL DOM


const matrixContainer = document.querySelector(".matrix-container")



//FUNCIONES 

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



let stringInHtml = (array) => {
    let matrixInHtml = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
        matrixInHtml += `<div class="item">${array[i][j]}</div>`
        }
    }
    return matrixInHtml

}


let easyLevel = matrixMaker(9,9,emojisAvaibles);
let mediumLevel = matrixMaker(8,8,emojisAvaibles);
let hardLevel = matrixMaker(7,7, emojisAvaibles);




let columnMatch = (matriz) => {
  for (let j = 0; j < matriz[0].length; j++) {
    for (let i = 0; i < matriz.length-2; i++) {
      if (matriz[i][j] === matriz[i+1][j] && matriz[i][j] === matriz[i+2][j]) {
      return true
      }
    }
  }
  return false
}



let rowMatch = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length-2; j++) {
      if (matriz[i][j] === matriz[i][j+1] && matriz[i][j] === matriz[i][j+2]) {
        return true
      }
    }
  }
  return false
}



let grillaSinMatches = (cantidad) => {
  let grilla = matrixMaker(cantidad,cantidad,emojisAvaibles);
  while (rowMatch(grilla) || columnMatch(grilla)) {
    grilla = matrixMaker(cantidad,cantidad,emojisAvaibles);
  }
  return grilla
}

console.log(grillaSinMatches(9))



const level = prompt("Fácil, medio o difícil")



if (level == "facil") {
  let easyLevel = grillaSinMatches(9);
  matrixContainer.innerHTML = stringInHtml(easyLevel);
  const emojisInMatrix = document.querySelectorAll(".item");
  for (let i = 0; i < emojisInMatrix.length; i++) {
    emojisInMatrix[i].style.fontSize = "45px";
  }
}

if (level == "medio") {
  let mediumLevel = grillaSinMatches(8);
  matrixContainer.innerHTML = stringInHtml(mediumLevel);
  const emojisInMatrix = document.querySelectorAll(".item");
  for (let i = 0; i < emojisInMatrix.length; i++) {
    emojisInMatrix[i].style.fontSize = "55px";
    emojisInMatrix[i].style.width = "90px";
    emojisInMatrix[i].style.height = "90px"
  }
}

if (level == "dificil") {
  let hardLevel = grillaSinMatches(7);
  matrixContainer.innerHTML = stringInHtml(hardLevel);
  const emojisInMatrix = document.querySelectorAll(".item");
  for (let i = 0; i < emojisInMatrix.length; i++) {
    emojisInMatrix[i].style.fontSize = "60px";
    emojisInMatrix[i].style.width = "92px";
    emojisInMatrix[i].style.height = "92px";
  }
}

