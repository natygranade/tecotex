
window.addEventListener('load',function(){
    
    let codigo = document.getElementById('codigoArticulo')
    let search = document.getElementById('search')
    let lista = document.getElementById('lista')
    
    
    let codArt;
    
    codigo.addEventListener('change',function(){
        codArt = this.value
        
    })
    
    fetch("http://localhost:3000/articulos")
    .then(response =>  response.json())
    .then(data => {
        search.addEventListener('click',function(e){
            e.preventDefault()
            
            data.forEach(articulo => {
                
                if(articulo.codigo == codArt){
                    
                    lista.innerHTML += `<tr>
                    <td> <input type="checkbox" name="codigo" value="${articulo.id} ">  </td>
                    <td> <label for="codigo"> ${articulo.codigo} </label> </td> 
                    <td> <label for="codigo">  ${articulo.codgaci} </label> </td> 
                    <td> <label for="codigo">  ${articulo.descripcion} </label> </td>
                    </tr>`
                }else{
                    
                }
                
            })
        })
    })
    
    
})