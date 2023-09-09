var pontuação = 0;

function sis_pont(pontuação){
    console.log(pontuação)
    return pontuação + 1
};

function trofeu(pontuação) {

    if (pontuação<=4){
        console.log("Você pode melhorar.")
        pontuação = pontuação + 2
        return
    }
    else if (pontuação>4 && pontuação<=7){
        console.log("Você foi bem.")
        return
    }
    console.log("Parabéns, você foi excelente!")
    
};
