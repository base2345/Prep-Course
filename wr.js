function obtenerMayor(x, y) 


{
    if(x>y)
    {
        return x; 
    }else if(y>x)
    {
        return y
    }else
    {
        return x || y;
    }
}
console.log(obtenermayor(2,89))