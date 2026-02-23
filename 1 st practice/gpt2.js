let arr = [1,2,2,3,4,4,5,5,6]


//1
let temp1=[...arr].reverse()


//2
let temp2=[]
for (let i=0;i<arr.length;i++){
    let c=0

    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            c+=1
        }
    }
    if(c===1){
        temp2.push(arr[i])
    }
}
console.log(temp2)

//3
