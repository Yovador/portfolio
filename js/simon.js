const htmlButton = Array.from( document.getElementsByClassName('simonButton') ) // Récupère tout les boutons html avec la classe css "simonButton" et les stocks dans un array
const startButton = document.getElementById('startButton') // Bouton Start récupéré depuis le html
const stateGame = document.getElementById('stateGame') // div ou on affiche le statut de la partie

let playerSequence = [] // Liste stockant les boutons entrain par le joueur lors de son tour
let buttonList = [] // Liste de tout les SimonButton du jeu
let sequenceOn = false; //Est ce qu'une séquence de jeu est lancé ?
let canClick = false; //Le joueur peut il cliqué ?

/*

    La classe SimonButton est la classe des boutons jouables du Simon.
    Chaque instance de cette classe à 3 variables :
    
    button = la div html du bouton
    state = l'état du bouton, c'est à dire si il est activé ou non par l'ordinateur
    text = le text à affiché (cette variable va peut etre disparaitre dans le code final, elle est là pour tester avant tout)

    cette classe à aussi 3 fonction

    switchState() = Change la variable state, ce qu'il y a écrit sur le bouton et sa couleur
    init() = Init le bouton7
    activateHover(state) = Active le Hover du bouton

*/


class SimonButton {
    constructor(button, state){
        this.button = button;
        this.state = state;
        this.text = this.button.textContent;        
        this.init()
    }


    switchState(){
        this.state = !this.state
        this.button.textContent = this.text
        this.button.classList.toggle('activated')
    }

    init(){

        // Si le joueur me clic dessus, j'effectue ActionOnClick

        this.button.addEventListener('click', () =>{
            ActionOnCLick(this)
        })


        this.button.textContent = this.text
    }

    activateHover(state){
        if(state){
            this.button.classList.add('activateHover')
        }
        else{
            this.button.classList.remove('activateHover')
        }
    }
}


//                  GetRandomInt(max)                   //
//      Donne une valeur aléatoire entre 0 et max       //

const GetRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}


//                          ActionOnClick                                   //
// Liste des actions à effectué lorsque le joueur clic sur un SimonButton   //

const ActionOnCLick = (button) => {

    if(canClick){
        AddToPlayerSequence(button)
        EndGame()
    }
}

//                  SwitchAllHover(state)                                   //
//      Active le hover de tout les SimonButton                             //

const SwitchAllHover = (state) =>{
    for (let h = 0; h < buttonList.length; h++) {
        buttonList[h].activateHover(state)
    }
}

//                    GetRandomButton(size)                                 //
//Génére une suite de bouton sous la forme d'un array de SimonButton. La    //
//                 taille est déterminé par size                            //

const GetRandomButton = (size) => {
    
    let sequence = []
    
    for (let i = 0; i < size; i++) {
        sequence.push( buttonList[GetRandomInt(buttonList.length)])
    }
    
    return sequence
}

// Sleep(ms)
// Fait attendre pendant ms. Doit être utilisé dans une async 

const Sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ActivateSequence(sequence, timeStep, holdTime)
// Lance la séquence de l'ordinateur.  

async function ActivateSequence(sequence, timeStep, holdTime) {

    for (let k = 0; k < sequence.length; k++) {
            await Sleep(timeStep)
            sequence[k].switchState()
            await Sleep(holdTime)
            sequence[k].switchState()
            await Sleep(timeStep)
    }

    SequenceUnload()

}

//EndGame()
//Gère la fin du jeu

const EndGame = () => {
    if( playerSequence.length == RdmSequence.length && !CheckIfPlayerIsCorrect(playerSequence, RdmSequence) || !CheckIfPlayerIsCorrect(playerSequence, RdmSequence)){
        stateGame.textContent = "Perdu !"
        FreezeSimonButton(true)
    }
    else if( CheckIfPlayerIsCorrect(playerSequence, RdmSequence) && playerSequence.length == RdmSequence.length){
        stateGame.textContent = "Gagner !"
        FreezeSimonButton(true)
    }
    else{
        stateGame.textContent = "Pas fini !"
    }
}

//AddToPlayerSequence(button)
//Ajoute un SimonButton à playerSequence 

const AddToPlayerSequence = (button) => {
    playerSequence.push(button)
}

//CheckIfPlayerIsCorrect
//Retourne un booléen si les éléments actuellements d'accord dans la suite du joueur sont correct ou non (true si c'est le cas, false sinon)

const CheckIfPlayerIsCorrect = (playerArray, sequenceArray) => {

    let playerGood = false;

    for (let h = 0; h < playerArray.length; h++) {
        if(!playerGood && h != 0){
            break;
        }
        playerGood = sequenceArray[h] == playerArray[h]
    }

    return playerGood;

}

//FreezeSimonButton()
//Bloque ou non l'intéractivité des SimonButton

const FreezeSimonButton = (state) =>{
    canClick = !state
    SwitchAllHover(!state)
}

// GameInit()
// Met tout les variables de jeu dans leur position initial

const GameInit = () => {
    sequenceOn = true
    FreezeSimonButton(true)
    RdmSequence = GetRandomButton(3)
    playerSequence = []
}

// SequenceUnload()
// Désactive la séquence de l'ordinateur

const SequenceUnload = () => {

    sequenceOn = false
    FreezeSimonButton(false)

}

//GatherButton()
//Récupère tout les htmlButton et les "convertis" en SimonButton

const GatherButton = () => {
    for (let j = 0; j < htmlButton.length; j++) {
        buttonList.push(new SimonButton(htmlButton[j], false))
    }
}

GatherButton()

//Lance une partie si le joueur clique sur le bouton 

startButton.addEventListener('click', () =>{
    if(!sequenceOn){
        GameInit()
        ActivateSequence(RdmSequence, 200, 600)
    }
})
