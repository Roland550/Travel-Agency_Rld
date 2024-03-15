

const name = document.getElementById('name')
const buea = document.getElementById('buea').value
const douala = document.getElementById('douala').value
const price = document.getElementById('price')

function calculateSum() {
   

const sum = parseInt(buea) + parseInt(douala)

 document.getElementById('price').value = sum
}


price.addEventListener('keyup', ()=>{
    const sum = parseInt(buea) + parseInt(douala)

 document.getElementById('price').value = sum

})
