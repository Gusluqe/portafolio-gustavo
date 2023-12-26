const colores = ['bluesky', 'green', 'yellowgreen','pink','purple', 'orange', 'brown', 'black']

function randomColor(length) {  
   
    return Math.floor(math.random() * length)
}

const btn = document.getElementById('btn')

btn.onclick = function () {
    document.body.style.backgroundColor = colores[randomColor(colores.length)]
}