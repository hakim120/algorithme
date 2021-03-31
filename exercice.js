

function change (a,b){
var temp;
temp=a;
a=b;
b=temp;
return "la nouvelle valeur de a est : " + a + " et la nouvelle valeur de b est : " + b
}
console.log("exvvvvv", change(1,2));

function affichage  (){
    var nom ='toto';
    var age =30;
    var homme =true;

return "homme est : " + nom + "l'age est "+ age + "homme est : " +homme
} 
console.log("ex2" ,affichage())


function puissance(p) {
let y=Math.pow(p,2)
    return "la valeur de puissance est :"+p +"est :"+y
}
console.log("ex3" ,puissance(4))
function addition (a,b){
    var x=a+b;
return "la valeur de l'addtion est :"+x
}
console.log ("ex4" ,addition(5,6))
function convertir (x){
    var x=x*60;
    return "lavaleur de minute"+x

}
console.log ("ex5",convertir(5))
function increment(x)
{
  var x=x+1
  return "la valeur increment "+x
}
console.log("ex6" ,increment(7))
function getsurface (x,y){
var z=(x*y)/2
return "la valeur surface"+z
} 
console.log("ex9",getsurface(7,3))
function reserve(str){

  return  str.split('').reverse().join('')
 

}
console.log("ex10", reserve('hello'))

function getmax(a,b,c)
{
  let  y=Math.max(a, b, c);
    return "la valeur maximale est "+y
    
    

}
console.log("ex14",getmax(8,7,6))
function maxtab (t){

    let tab=[12,15,13]
    return "le premier "+tab[0]

}
console.log("ex10",maxtab())
function restdivision(a,b){
    r=a%b
    return "le reste de division "+r
    
}
console.log("ex11",restdivision(9,3))

function sommesup(a,b){
    let som
if (a+b<100)
som = true
else
som = false
return "la somme est: " +som
}
console.log("Exc15",sommesup(50,40) )


