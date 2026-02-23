n=Number(prompt("enter a number"))
if(n%2==0){
    console.log("even")
}
else{
    console.log("odd")
}
for (i=1;i<=n;i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("fizz")
    }
    else if(i%5==0){
        console.log("buzz")
    }
    else{
            console.log(i)
    }
}