let atletas = ["Rafael", "Manoel", "Daniel"]
let dani = atletas.indexOf ("Daniel")
function positions (atletas) {
let string = "Este é o pódio: "

    if (dani != 0) {
        
        atletas.splice (1, 0, "Daniel") //remove 0 e adiciona "daniel" a partir do índice 1 🤠
        atletas.splice (3, 1) //como foi adicionado um "daniel" na segunda posição, é necessário apagar o daniel clone, removendo 1 a partir do índice 3 🤠

        return string.concat (atletas) //juntando a string aos nomes ✍
    }
    else {
        return console.log ("O Daniel venceu! 🏆") //foi por pouco, dani 🥺 (quem sabe numa realidade paralela? ♾)
}

}

console.log (positions(atletas))