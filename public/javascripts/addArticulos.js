window.addEventListener('load', function(){
    
    let lista = document.getElementById('lista')
    
    lista.addEventListener('change', function(){
        
        let checked = document.querySelectorAll('input[type=checkbox]:checked')
        
        fetch("http://localhost:3000/articulos")
        .then(response =>  response.json())
        .then(data => {
            
            let articuloId;
            Array.from(checked).forEach(check =>{
                
                articuloId = check.value
                
            })
            data.forEach(articulo => {
                if(articulo.id == articuloId){
                
                seleccion.innerHTML += `<tr>
                <td> <label for="cantidad"> Cantidad </label> <input type="text" name="cantidad"> </td>
                <td> <input type="checkbox" name="articulo" value="${articulo.id} ">  </td>
                <td> <label for="articulo"> ${articulo.codigo} </label> </td> 
                <td> <label for="articulo">  ${articulo.codgaci} </label> </td> 
                <td> <label for="articulo">  ${articulo.descripcion} </label> </td>
                </tr>`
                }
            })     
            
        })        
        
    })
    
})