let playerTurn = 0

for (let count = 1; count != 10; count++){
    document.getElementById("general").appendChild(document.createElement("div")).setAttribute("class", "boxes")
    let block = document.body.querySelectorAll("div")[count]
    block.addEventListener("click", player)
    block.setAttribute("id", count - 1) //add event and selectors 
    document.getElementsByTagName("div")[count].appendChild(document.createElement("i")) //CSS efect 
}
let houses = ["", "", "", "", "", "", "", "", ""] // array relative with the number of houses of the game

function player (event){  
    //verify player turn 
    if (houses[event.target.id] == ''){
        win = false
        if (playerTurn == 0){
            playerTurn = 1
            if (houses[event.target.id]== ""){ //checks if arrays is null for to plarce position elements
                houses[event.target.id] = "x"
                event.target.style.background = "blue"
                event.target.innerHTML = "&#x1F430"
                draw ++   // add point for the draw
    
            }
        }else {
            playerTurn = 0
            if (houses[event.target.id]== ""){
            houses[event.target.id] = "o"
            event.target.style.background = "red"
            event.target.innerHTML = "&#x1F43A"
            draw ++   //add point for the draw 
            }
        }  
    }
    toPlace()
}




            
