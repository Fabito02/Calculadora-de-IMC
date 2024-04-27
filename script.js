function result() {
    let weight = Number(document.getElementById("weight").value)
    let heigth = Number(document.getElementById("heigth").value)
    let imc = document.getElementById("imc")
    if (weight <= 0 || heigth <= 0) {
        imc.innerHTML = ("Insira todos os valores corretamente primeiro")
    }
    else {
        let result = weight / (heigth * heigth)
        let tipoPeso
        if (result < 18.5) {
            tipoPeso = "abaixo do normal"
        }
        else if (result >= 18.5 && result <= 24.9) {
            tipoPeso = "normal"
        } 
        else if (result >= 25 && result <= 29.9) {
            tipoPeso = "em excesso"
        }
        else if (result >= 30 && result <= 34.9) {
            tipoPeso = "em nível de obesidade classe I"
        }
        else if (result >= 35 && result <= 39.9) {
            tipoPeso = "em nível de obesidade classe II"
        }
        else if (result >= 40 ) {
            tipoPeso = "em nível de obesidade classe III"
        }
        imc.innerHTML = (`O IMC aproximado é: ${result.toFixed(2)}<br>Seu peso está ${tipoPeso}`)
    }

}