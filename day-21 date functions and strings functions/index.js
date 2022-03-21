a=25.09
console.log(typeof(a))
b="sai venkata krishna"
console.log(typeof(b))
c=["hello","hi",32,56.86]
console.log(typeof(c))


/// date functions 

 c = new Date();
console.log(c.getTime());

 b = new Date();
console.log(b.getFullYear())

d = new Date();
console.log(d.getMonth())

a = new Date();
console.log(a.getDate())

e = new Date();
console.log(e.getHours())

f = new Date();
console.log(f.getMinutes())

g = new Date();
console.log(g.getSeconds())

h = new Date();
console.log(h.getMilliseconds())

i = new Date();
console.log(i.getDay())

days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 l = new Date();
 console.log(days[l.getDay()])

 /// date set methods

a = new Date();
console.log(a.setFullYear(2020))

b = new Date();
console.log(b.setFullYear(2020, 11, 3))

b= new Date();
console.log(b.setMonth(11))

