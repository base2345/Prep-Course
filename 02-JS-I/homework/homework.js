// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

const { stringify } = require("git-url-parse");

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "porfinhoyuuuu";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 27;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 42;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString() 
{
  console.log("ryryry");
  
}
  devolverString()

function suma(x, y) 
{
    var suma = x + y;
    return suma  
}
console.log(suma(5,7));

function resta(x, y) 
{
  var resta = x - y;
  return resta
}

function multiplica(x, y)

{
    var multi = x * y;
    return multi
}
console.log(multiplica(9,9));

    


function divide(x, y)


{
    var modulo = x / y;
    return modulo
}
console.log(divide(15,3));



function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
  
      if(x===y & y===x)
      {
          return true;
      }
      else if(x!=y)
      {
          return false;
      }
  }
    console.log(sonIguales(5,5));
  


function tienenMismaLongitud(str1, str2) 
{
  if (str1.length === str2.length)
    {
      return true;
    }
    else if(str1.length != str2.length)
    {
      return false;
    }

  }
  console.log(tienenMismaLongitud("papel","papeles"));

function menosQueNoventa(num) 
{
  if (num<=90)
  {
    return true;
  }
  else if(num>90)
      {
        return false;
      }
  
}
console.log(menosQueNoventa(40));

function mayorQueCincuenta(num) 
{
  

  if (num>=50)
  {
    return true
  }
    else if(num<50)
          {
            return false
          } 
  
            }
            console.log(mayorQueCincuenta(40))

  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  


function obtenerResto(x, y)
{
  
  let modulo = x / y;
  console.log(module);
}
console.log(obtenerResto(9,2));
  


function esPar(num)
 {
  if (num % 2 === 0)
  {
      return true;
  }
    else if (num % 2 != 0)
        {
          return false;
        }
}
console.log(esPar);


function esImpar(num) 
{
  if (num % 2 != 0)
      {
          return true
      }
      else if(num % 2 === 0)
      {
        return false
      }
  
}
console.log(esImpar)

function elevarAlCuadrado(num, exponent)
 {
  
  let result = num * exponent ;
  console.log(result)
}
console.log(elevarAlCuadrado(2,2))

function elevarAlCubo(num, exponente) 
{
    let resultado = match.pow(num, exponente);
    console.log(resultado)
}
console.log(elevarAlCubo(5, 3))

function elevar(num, exponent) 
{
    let resultado = Math.pow(num, exponent)
    console.log(resultado);
  }
    console.log(elevar(4, 3));

function redondearNumero(num) {
  let resultado = Math.round(num)
  console.log(resultado);
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
}
console.log(redondearNumero(6.5))

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let resultado =Math.ceil(num)
  console.log(resultado);
  
}console.log(redondearHaciaArriba(3.4))

function numeroRandom(num) 
{
  let resultado = Math.random(Math.round(num)*1)
  console.log(resultado)
}
console.log(numeroramdon(5.9))
  
  


function esPositivo(numero) 
{ 
  if 
  (numero > 0)
  {
    let numero = "positivo";
  }
  else if(numero < 0 )
  {
      let numero = "negativo";
  }
   else if(numero === 0)
  {
   return false 
  }
 
  console.log(esPositivo(3))
  
}

function agregarSimboloExclamacion(str)

  {

    var str = 'hell';
    var b = "!";
    //str = str.concat(b);
    str = str + b;
    console.log(str)
    
    }  
    console.log(agregarSimboloExclamacion())
      



function combinarNombres(nombre, apellido)
{
var nombre = 'luzda';
var apellido = "sanchez";

conbinado = nombre + " " +apellido
console.log(conbinado)

}  
console.log(combinarNombres()) 
  
  


function obtenerSaludo(nombre) {
  

{
  var nombre = "martin"
  var saludo = "hi"
  saludar = nombre + " " +saludo
  console.log(saludar)
}
console.log(obtenerSaludo())
}

function obtenerAreaRectangulo(alto, ancho) 
{
  perimetro = alto * ancho
  return perímetro
  console.log(perímetro)
}
console.log(obtenerAreaRectangulo(4, 9))


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  

  let perimetro = lado * lado
  return perimetro
  console.log(perimetro)

}
console.log(retornarPerimetro(2))
  



function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

  
  
    let area = (base * altura) / 2
    return area
    console.log(area)
  
  }
  console.log(areaDelTriangulo(2, 3))



function deEuroAdolar(euro)
{
  var euro = 1.20 
  var neuros = neuros * 1.20
  return neuros
  console.log(neuros)
}
console.log(deEuroAdolar(3))


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
   
    if (letra == "A" || letra == "E" ||letra == "I" || letra == "O" || letra == "U" || letra == "a" || letra == "e" || letra == "i" ||letra == "o" ||letra == "u") 
    {
      return " Es vocal"
    }
    if (letra != "A" || letra != "E" ||letra != "I" ||letra != "O" ||letra != "U" ||letra != "a" ||letra != "e" ||letra != "i" ||letra != "o" ||letra != "u")
     {
      return " Dato incorrecto"
    }
  }
  console.log(esVocal("T"))



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
