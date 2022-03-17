a=Number(prompt("enter the number"))
b=Number(prompt("enter the second number"))
c=prompt("give progress what you want")
if(c == "+"){
    console.log("adding of",a, "and" ,b, " : " ,a+b)
}
else if (c =="-"){
    console.log("subtracting of",a, "and" ,b, " : " ,a-b)
}
else if (c =="/"){
    console.log("diving of" ,a, "and" ,b, " : " ,a/b)
}
else if (c =="*"){
    console.log("multiplication  of" ,a, "and" ,b, " : " ,a*b)
}
else{
    console.log(alert("enter only number to calculate only"))
}