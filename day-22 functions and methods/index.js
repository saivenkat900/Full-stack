function myaddition(a,b){
    console.log(Number(a)+Number(b))
    console.log("The addition of ",a,"and ",b,"is ",(a+b))
}

a=15
b=35
myaddition(a,b)
myaddition(10,10)

function mysubraction(a,b){
    console.log(Number(a)-Number(b))
    console.log("The subraction of",a, "and",b,"is",(a-b))
}

a=30
b=20
mysubraction(a,b)
mysubraction(100,40)
mysubraction(30,40)

function mydivision(a,b){
    console.log(Number(a)/Number(b))
    console.log("The subraction of",a, "and",b,"is",(a/b))
    if(a<=0){
        console.warn("A cannot be zero or less than 0")
        alert('b cannot be less than 0')
    }
    else
    console.log("The division of ",a,"and ",b,"is ", a/b)

}

a=-2
b=3
mydivision(a,b)
mydivision(30,10)

function mymultiplication(a,b){
    console.log(Number(a)/Number(b))
    console.log("The subraction of",a, "and",b,"is",(a*b))
}

a=5
b=5
mymultiplication(a,b)
mymultiplication(20,20)

