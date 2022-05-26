let draw = 0 // verify if there was a draw
let wins = [
    [0,1,2], //winning combinations
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function toPlace(){
    for (let i = 0;i < wins.length; i++){
        let arrayWins = wins[i] //receives the combinations

        let p1 = arrayWins[0] //receives the elements of combinations
        let p2 = arrayWins[1]
        let p3 = arrayWins[2]

        if (houses[p1] == houses[p2] && houses[p1] == houses[p3] && houses[p1] != ""){
            setTimeout(()=>{
                let phrase = "Os coelhos venceram"
                phrase = (playerTurn == 0)?"Os lobos venceram!":"Os coelhos venceram!"

                alert(`${phrase} Clique 'OK' para reiniciar`) 
                for (let count in houses){
                    houses[count] = ""
                    document.body.getElementsByClassName("boxes")[count].style.background = "chocolate"
                    document.body.getElementsByClassName("boxes")[count].innerHTML = ""
                }
                draw = 0
            }, 210)
        }else if (draw == 9){
            draw = 0
            setTimeout(()=>{
                alert("Empate! Clique 'OK' para reiniciar") 
                for (let count in houses){
                    houses[count] = ""
                    document.body.getElementsByClassName("boxes")[count].style.background = "chocolate"
                    document.body.getElementsByClassName("boxes")[count].innerHTML = ""
                }                
            }, 210)
        }
    }
}
