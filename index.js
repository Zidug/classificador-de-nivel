let nomeHeroi = "Zidug"
let nivelHeroi = "Ferro"
let xpHeroi = 0

do {

    xpHeroi = xpHeroi + 1000

    if(xpHeroi<1001){
        nivelHeroi = "Ferro"
    }

    else if(xpHeroi<2001){
        nivelHeroi = "Bronze"
    }

    else if(xpHeroi<5001){
        nivelHeroi = "Prata"
    }

    else if(xpHeroi<7001){
        nivelHeroi = "Ouro"
    }
    
    else if(xpHeroi<8001){
        nivelHeroi = "Platina"
    }

    else if(xpHeroi<9001){
        nivelHeroi = "Ascendente"
    }

    else if(xpHeroi<10001){
        nivelHeroi = "Imortal"
    }
    
    else{
        nivelHeroi = "Radiante"
    }

    console.log ("Heroi " + nomeHeroi)
    console.log ("Nivel: " + nivelHeroi)
    console.log ("Exp: " + xpHeroi + "\n")
    

} while ( xpHeroi < 10001)   
