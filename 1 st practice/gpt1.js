let numbers =[1,2,3,4,5,6,7,8,9,10]
let s=0
for(i=0;i<numbers.length;i++){
    console.log(numbers[i])
    s+=numbers[i]
    if(numbers[i]%2==0){
        console.log(numbers[i])
    }
}
console.log(s)

//2
let num1=[1,2,3,4,5]
let mi=num1[0]
let ma=num1[0]
for(i=0;i<num1.length;i++){
    if(num1[i]>ma){
        ma =num1[i]
    }
    if(num1[i]<mi){
        mi =num1[i]
    }
}
console.log(mi)
console.log(ma)

//3
let num2=[1,2,3,4,5]
let num3=[]
for(i=num2.length-1;i>=0;i--){
    num3.push(num2[i])
}
console.log(num3)

//4
let arr1 = [1,2,3,2,4,2,5]
let target = 2
let t1=0
for(let i=0;i<arr1.length;i++){
    if(arr1[i]===target){
        t1+=1
    }
}
console.log(t1)

//5
let arr = [1,2,2,3,4,4,5]
let unique = []
for(let i = 0; i < arr.length; i++){
    if(!unique.includes(arr[i])){
        unique.push(arr[i])
    }
}
console.log(unique)