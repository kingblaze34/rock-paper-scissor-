

 function getUserChoice (userInput){
userInput = userInput.toLowerCase()
 
if(userInput === `rock` || userInput === `scissors` || userInput === `paper`){
    return userInput
} else{console.log(`Chose one of the three options`)}

}
 function getComputerChoice(){

    var computerInput = Math.floor(Math.random() * 3)

        if(0 === computerInput){
            return `rock`
        }
        else if(1 === computerInput){
            return `scissors`
        }
        else if(2 === computerInput){
            return `paper`
        }
        else{console.log(`error in choices of the 3`)}
    }

    function determineWinner(userChoice, computerChoice){
        
        if(userChoice === computerChoice){
            return `tie game`
        } 

        if(userChoice === `rock`){
            if(computerChoice === `paper`){
                return `computer won`
             }else { 
                return `user won`
             }
            
            }
            if(userChoice === `paper`){
                if(computerChoice === `scissor`){
                    return `computer won`
                } else{
                    return `user won`
                }
            }
            if(userChoice === `scissor`){
                if(computerChoice === `paper`){
                    return `user won`
                } else{
                    return `computer won`
                }
            }
           







        } 

        function playGame(){

            var userChoice = getUserChoice(`rock`)
                console.log(userChoice)
            
                var computerChoice = getComputerChoice()
                console.log(computerChoice)

                console.log(determineWinner(userChoice, computerChoice))
        
        }
            playGame()
             
        
