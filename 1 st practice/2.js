function calculatetotalprice(price,tax=0.18){
    let total=price+(price*tax)
    return total
}
let r1=calculatetotalprice(1000)
let r2=calculatetotalprice(1000,0.10)

console.log(r1)
console.log(r2)