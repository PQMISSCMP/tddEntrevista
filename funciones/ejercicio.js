function Add(number){

    if (number.length == 0)
        return 0;

    var separador = number.toString().substr(2,1);
    var acumula = 0;
    if (separador == ";")
    {
       
        number.toString().substr(4).split(separador).map (n => {
            acumula = acumula + parseInt(n);
        })
    }
    else
    { 
        number.split(/[.\,\n_]/).map (n =>{
            acumula = acumula + parseInt(n);
        })   
    }

    
    return acumula;
}

module.exports = { Add };