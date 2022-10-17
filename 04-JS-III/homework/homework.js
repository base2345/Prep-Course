// No cambies los nombres de las funciones.

function devolverPrimerElemento(array)
 {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
 
}
console.log(devolverPrimerElemento([545,3,99]))


function devolverUltimoElemento(array)
 {
  return array[array.length -1];
}

function obtenerLargoDelArray(array)  

{
  
  return array.length
}



function incrementarPorUno(array)
 {
  var incrementa = []
  for(i = 0; i < array.length; i++)
  {
    
    
    
  }
  return incrementa
}
 // console.log(incrementarPorUno([1, 5, 2, 519]))


function agregarItemAlFinalDelArray(array, elemento)
 {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  
  return array.push(elemento)
}




function agregarItemAlComienzoDelArray(array, elemento) 
{
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  return array.unshift(elemento)
}


function dePalabrasAFrase(palabras) 

{
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ")
}


function arrayContiene(array, elemento) 
{
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0;i < array.length ; i++)
  {
    if( array [i] === elemento)
    {
      return true
    }
  }
  return false
}



function agregarNumeros(numeros) 
{
  
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    var elemento = 0
    for(var i = 0;i < array.length ; i++)
    {
      if( array [i] === elemento)
      {
        return true
      }
    }
    return false
  }
  console.log(arrayContiene([0]))



  function promedioResultadosTest(resultadosTest) 
  {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var acumulador = 0
   
    for(i = 0;i< resultadosTest.length;i++)
    {
      
      acumulador += resultadosTest[i]
        
    }
    return acumulador/resultadosTest.length
  
  }
  console.log(promedioResultadosTest([2, 3 ,5]))
  



function numeroMasGrande(numeros) 
{
  var maximo = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i];
    }
  }
  return maximo;
  function numeroMasGrande(arreglo)
 {

    let acumulador = []
   for(i = 0; i < arreglo.length; i++)
   {
    if(arreglo[i] > 18)
    {
        acumulador= acumulador+1
    }

   }
  return acumulador.length
}



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++)
  {
    total = total * arguments[i];
  }
  return total;
  
}



function cuentoElementos(arreglo)

{
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0;
  for (let i = 0; i < arreglo.length ; i++)
   {
    if(arreglo[i] > 19){
      contador++
    }
  }
  return contador


}


function diaDeLaSemana(numeroDeDia) {
  
{
  var dias = [ {dia: "lunes",numeroDeDia: 1},{dia: "sabado",numeroDeDia: 2},];
var dia = []
     for(var i = 0; i < numeroDeDia.length; i++ )
  {
      
    if(numeroDeDia[i] === 1)
    {
      return "labore"
    }
    else if(numeroDeDia[i] === 2)
    {
      return "fincho"
    }
      
  }
} 
  
} 


function empiezaConNueve(n)
 {
  var num = n.toString();
   if (num[0]=== '9') return true
  //  if (num.chartAt(0) === '9') return true
   return false
  }
  console.log(empiezaConNueve([9945]));




function todosIguales(arreglo)
 {
  for(var i = 0; i < arreglo.length -1;i++)
  {
    if(arreglo[i] !== arreglo[i+1])
    {
      return false
    }
    
  }
 return true
  
} 


function mesesDelAño(array)
 {
   var nuevoArray = [];
  for(var i= 0; i<array.length; i++)
   {
    if(array[i] === "enero" || array[i] === "marzo" || array[i] === "oct") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length === 3) {
    return nuevoArray;
  }
  else {
      return "no hay pa nadie pa";
  }
}
console.log(mesesDelAño(["enero","marzo","noviembre","diciembre","febrero","abril","mayo","junio","julio","agosto","septiembre","oct"]))

function mayorACien(array) 
{
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    var nuevoArray = [];
    for(let i= 0; i < array.length; i++) {
      if(array[i] > 100) {
        nuevoArray.push(array[i]);
      }
    }
    return nuevoArray;
  }
  console.log(mayorACien([56,123,190,101]))

}

function breakStatement(numero) 
{
  var arrayNumeros = [];
  var suma = numero;
  for(var i = 0 ; i < 10;i++)
  {
    suma = suma+2;
    if(suma === i)
  {
  break
  }
  else
  {
    arrayNumeros.push(suma);
  }
}
if(arrayNumeros.length < 10)
{
  return "se interumpio la funcionwwff";
}
else if(arraynumeros.length === 10)
{
  return arrayNumeros;
}
}
console.log(breakStatement([2,4,7,8]))

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      
      array.push(suma[i]+2);
    }
  }
  return array;
}
console.log(console.log(continueStatement([3,9,4,5,6,7,9,9,1,0])))




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
