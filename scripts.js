document.addEventListener("DOMContentLoaded", () => {
//numeroCuatro();
  //determinarPar();
  //determinarDigitos()
  //enteroNegativo()
// paresImprimir();
//ultimoDigito();
// primerosDos();
 //primerDigito();
//ambosPares();
 //sumaDosDigitos();
 //sumaEnteros()
 //cuatroDigitosSuma()
 //determinarTresDigitos()
 //penultimoTres()
 //ultimoTres()
 //cuatroPares()
 //cuatroImpares()
 tresPrimos()
});
//Leer un numero entero y determinar si es un numero terminado en 4
function numeroCuatro() {
  let num = parseInt(prompt("Ingrese un numero"));
  const cuatro = 4;
  num = num - Math.trunc(num / 10) * 10;
  console.log(num);
  if (num === cuatro) {
    alert('Termina en 4')
  } else {
    alert('No termina')
  }
}

//Leer un numero de 2 digitos, determinar si ambos digitos son pares 

function ambosPares(){
    let dig1 = 0;
    let dig2 = 0;
    let num = parseInt(prompt('Ingrese un numero de dos digitos')) 

    if(num < 10  || num >= 100 || num == 0  || isNaN(num)){
        window.location.reload()
        return
    }

    dig1 = num * 10 / 100
    dig2 = num - Math.trunc(num / 10) * 10
    if(Math.trunc(dig1) % 2 === 0){
        alert(`El numero ${Math.trunc(dig1)} es par`)
    } else{
        alert(`El numero ${Math.trunc(dig1)} no es par`)
    }

    if(dig2 % 2 === 0){
        alert(`El numero ${dig2} es par`)
    } else {
        alert(`El numero ${dig2} no es par`)
    } 
   
}
//FizzBuzz
// for (let i = 1; i < 100 ; i++) {
//     if(i % 15 === 0){
//         console.log(`${i} Fizz buzz!`)
//     } else if(i % 3 === 0){
//         console.log(`${i} Fizz!`)
//     } else if(i % 5 === 0){
//         console.log(`${i} Buzz!`)
//     }
// }


//Numeros primos
// let numeroPrimo = 43
// let contador = 0;
// for(let i = 1; i < 43; i++){
//     if(numeroPrimo % i === 0){
//      contador++
//     }
//     if(contador > 2){
//         console.log('El numero no es primo')
//     } else {
//         console.log('El numero es primo')
//     }
// console.log(contador)
// }

//23. Leer un número entero de tres dígitos y determinar cuántos dígitos primos tiene.

function tresPrimos(){
    let num1 = parseInt(prompt('Ingrese un primer numero de tres digitos'))
    let primos = [2, 3, 5, 7]
    let digitos = []
    if(num1 < 10 || num1 < 100 ){
        window.location.reload()
        return
    }
    let dig1 = Math.trunc(num1 / 100 ) % 10
    let dig2= Math.trunc(num1 / 10) % 10
    let dig3 = Math.trunc(num1 % 10)
    if(primos.includes(dig1)){
       digitos.push(dig1)
    }

    if(primos.includes(dig2)){
        digitos.push(dig2)
     }

     if(primos.includes(dig3)){
        digitos.push(dig3)
     }
     alert(`La cantidad de digitos primos que tien este numero es ${digitos.length}`)

}

//Leer un número entero de 4 dígitos y determinar si tiene mas dígitos pares o impares
function cuatroImpares(){
    let pares = []
    let impares = []
    let num = parseInt(prompt('Ingrese un numero de cuatro digitos')) 

    if(num <=10  || num <= 100 || num == 0 || num <=999 || num > 9999 ){
        window.location.reload()
        return
    }

    let dig1 = Math.trunc(num / 1000) % 10
    let dig2 =  Math.trunc(num / 100) % 10 
    let dig3 =  Math.trunc(num / 10) % 10 
    let dig4 = Math.trunc(num % 10)

    if(dig1 % 2 === 0){
        pares.push(dig1)
    } else {
        impares.push(dig1)
    }

    if(dig2 % 2 === 0){
        pares.push(dig2)
    } else {
        impares.push(dig2)
    }

    if(dig3 % 2 === 0){
        pares.push(dig3)
    } else {
        impares.push(dig3)
    }

    if(dig4 % 2 === 0){
        pares.push(dig4)
    } else {
        impares.push(dig4)
    }
   if(pares.length > impares.length){
    alert('Tiene mas digitos pares que impares')
   } else {
    alert('Tiene mas digitos impares que pares')

   }

}

//Leer un numero  de dos digitos y determinar a cuanto es igual la suma de sus digitos

function sumaDosDigitos(){
    let dig1 = 0;
    let dig2 = 0;

    let num = parseInt(prompt('Ingrese un numero de dos digitos')) 

    if(num < 10  || num >= 100 || num == 0  || isNaN(num)){
        window.location.reload()
        return
    }
        dig1 = num * 10 / 100
        alert(`El primer digito es ${Math.trunc(dig1)}`)
        dig2 = num - Math.trunc(num / 10) * 10
        alert(`El segundo digito es ${dig2}`)
        let suma = Math.trunc(dig1 + dig2) 
        alert(`La suma de los digitos es ${suma}`)
  }

  //Leer tres números enteros y determinar si el último dígito de los tres números es igual.

  function ultimoTres(){
    let num1 = parseInt(prompt('Ingrese un numero'))
    let num2 = parseInt(prompt('Ingrese un segundo numero'))
    let num3 = parseInt(prompt('Ingrese un tercer numero'))

    let dig1 = Math.trunc(num1 % 10)
    let dig2 = Math.trunc(num2 % 10)
    let dig3 = Math.trunc(num3 % 10)

    if(dig1 === dig2 && dig1 === dig3 && dig2 === dig3){
        alert('El ultimo digito de los tres numeros es igual!!')
        return
    } else {
        alert('No es igual')
    }
  
    
  }

//Leer tres números enteros y determina si el penúltimo dígito de los tres números es igual

function penultimoTres(){
    let num1 = parseInt(prompt('Ingrese un numero'))
    let num2 = parseInt(prompt('Ingrese un segundo numero'))
    let num3 = parseInt(prompt('Ingrese un tercer numero'))

    let dig1 =  Math.trunc(num1 / 10) % 10 
    let dig2 =  Math.trunc(num2 / 10) % 10 
    let dig3 =  Math.trunc(num3 / 10) % 10 

    if(dig1 === dig2 && dig1 === dig3 && dig2 === dig3){
        alert('El penultimo digito de los tres numeros es igual!!')
        return
    } else {
        alert('No es igual')
    }


}

function determinarPar(){
let numero = 8

let resultado = Math.trunc(numero / 2) * 2 
console.log(resultado)
if(resultado === numero){
    console.log('Par')
} else {
    console.log('No Par')
}
}

//imprimir numeros pares en pantalla
function paresImprimir(){
for(let i = 1; i < 100; i++){
    if(i % 2 === 0){
        console.log('Numeros pares', i)
    }
}
}
//Leer un número entero de cuatro dígitos y determinar a cuanto es igual la suma de sus dígitos

function cuatroDigitosSuma(){
    let num = parseInt(prompt('Ingrese un numero de cuatro digitos')) 
    if(num < 10  || num < 100 || num == 0 || num <=999 || num > 9999 ){
        window.location.reload()
        return
    }
    let dig1 = Math.trunc(num / 1000) % 10
    let dig2 =  Math.trunc(num / 100) % 10 
    let dig3 =  Math.trunc(num / 10) % 10 
    let dig4 = Math.trunc(num % 10)

    let suma = dig1 + dig2 + dig3 + dig4 
    alert(`La suma es de los digitos es ${suma}`)


    

}
//Leer un número entero de cuatro dígitos y determinar cuántos dígitos pares tiene.

function cuatroPares(){
    let pares = []
    let num = parseInt(prompt('Ingrese un numero de cuatro digitos')) 
    if(num <=10  || num <= 100 || num == 0 || num <=999 || num > 9999 ){
        window.location.reload()
        return
    }
    let dig1 = Math.trunc(num / 1000) % 10
    let dig2 =  Math.trunc(num / 100) % 10 
    let dig3 =  Math.trunc(num / 10) % 10 
    let dig4 = Math.trunc(num % 10)

    if(dig1 % 2 ===0){
        pares.push(dig1)
    } 
    if(dig2 % 2 ===0){
        pares.push(dig2)
    } 
    if(dig3 % 2 ===0){
        pares.push(dig3)
    } 
    if(dig4 % 2 ===0){
        pares.push(dig4)
    } 
    alert(`Este numero tiene ${pares.length} digitos pares`)
}

// Leer dos números enteros de dos dígitos y determinar si la suma de los dos números origina un numero par
function sumaEnteros(){

    let num = parseInt(prompt('Ingrese un numero de dos digitos')) 
    let num2 = parseInt(prompt('Ingrese un numero de dos digitos')) 

    if(num < 10  || num >= 100 || num == 0 || num2 < 10  || num2 >= 100 || num2 == 0  ){
        window.location.reload()
        return
    }


    let esPar = num + num2
    if(esPar % 2 === 0){
        alert(`El numero ${esPar} es par` )
    } else {
        alert(`El numero ${esPar} no es par`)
    }

}

//obtener ultimo digito de un numero
function ultimoDigito(){

let ud1= 0;
let num1 = 854
ud1 = Math.trunc(num1 % 10 )  
console.log(ud1)

let ud2 = 0;
let num2 = 795
ud2 = Math.trunc(num2 % 10) 
console.log(ud2)

if(ud1 === ud2){
    console.log('Iguales')
} else{
    console.log('Distintos')
} 
}

//22. Leer un número entero de tres dígitos y determinar si el primer dígito es igual al último.

function determinarTresDigitos(){
let number2 = 363
let ultimoDigito = 0;
ultimoDigito = Math.trunc(number2 % 10)
console.log(ultimoDigito)

let primerDigito = 0;
primerDigito =  Math.trunc(number2 / 100) % 10
console.log(primerDigito)

if(primerDigito === ultimoDigito ){
    console.log('Los digitos son los mismos')
} else {
    console.log('Son distintos')
}
}



//obtener primeros dos digitos de un numero tres cifras
function primerosDos(){
let numero3 = 834
let ud3 = 0
ud3 = numero3 * 10 / 100
console.log(Math.trunc(ud3))
}


//obtener el primer digito
function primerDigito(){
let numero4 = 184
let ud4 = 0

ud4 = Math.trunc(numero4 / 100) % 10
console.log(ud4)

}


//determina los digitos de un numero
function determinarDigitos(){
let num = parseInt(prompt('Ingrese un numero'))
let cd = 0;

while (num != 0){
    num = Math.trunc(num / 10)
    cd = cd+ 1
}
alert(`Los digitos de este numero son ${cd}`) 
}

function enteroNegativo(){
    let num = parseInt(prompt('Ingrese un numero'))
    if(num > 0){
        alert('El numero es positivo, no sirve')
    } else {
        if(num < 0){
            alert('El numero es negativo, aprobado')
        }
    }
}
