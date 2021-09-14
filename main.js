

const emojisAvaibles = ["🐊","🐆","🐅","🐃","🐂","🐄", "🦬", "🐪","🦙","🐘","🦏","🦛","🦣","🐐","🐑", "🐎", "🐖", "🦇", "🐓","🦃","🕊","🦅","🦆"]

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




const level = prompt("Fácil, medio o difícil")




if (level == "facil") {
  matrixContainer.innerHTML = stringInHtml(easyLevel)
  const emojisInMatrix = document.querySelectorAll(".item");
  for (let i = 0; i < emojisInMatrix.length ; i++) {
    emojisInMatrix[i].style.fontSize = "12px";
  }
}

if (level == "medio") {
  matrixContainer.innerHTML = stringInHtml(mediumLevel);
  const emojisInMatrix = document.querySelectorAll(".item");
  for (let i = 0; i < emojisInMatrix.length ; i++) {
    emojisInMatrix[i].style.fontSize = "15px";
    emojisInMatrix[i].style.width ="22px"
  }
}

if (level == "dificil") {
  matrixContainer.innerHTML = stringInHtml(hardLevel);
  const emojisInMatrix = document.querySelectorAll(".item");
  for (let i = 0; i < emojisInMatrix.length ; i++) {
    emojisInMatrix[i].style.fontSize = "17px";
    emojisInMatrix[i].style.width = "25px";
  }
}






