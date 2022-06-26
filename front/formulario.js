//validar nombre
window.addEventListener("load", function(){
    let formulario= document.querySelector('form.form-padre');

    formulario.addEventListener('submit', function(event){
        let errores= [];

       
        let caracteresInvalidos= ["0","1","2","3","4","5","6","7","8","9"];
        let caracteresInvalidosLetras= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        
        //Nombre
        let campoNombre = document.getElementById('fname');
        caracteresInvalidos.forEach(caracter=>{
            if(campoNombre.value.includes(caracter) == true){
                errores.push('El campo nombre no debe contener números')
            }

        })
        if(campoNombre.value == ""){
            errores.push('El campo nombre no puede estar vacío')
        }else if(campoNombre.value.length < 3 || campoNombre.value.length > 20){
            errores.push('El campo nombre no pude tener menos de 3 caracteres o más de 20 caracteres')
        }else{
            console.log(campoNombre.value)
        };

        //apellido
        let campoApellido= document.getElementById('lname');
        caracteresInvalidos.forEach(caracter=>{
            if(campoApellido.value.includes(caracter) == true){
                errores.push('El campo apellido no debe contener números')
            }

        })
        if(campoApellido.value == ""){
            errores.push('El campo Apellido no puede estar vacío')
        }else if( campoApellido.value.length < 3 || campoApellido.value.length > 20){
            errores.push('El campo Apellido no pude tener menos de 3 caracteres o más de 20 caracteres')
        }else{
            console.log(campoApellido.value)
        };

        //mail
        let campoEmail= document.getElementById('e-name')
        if(campoEmail.value == ""){
            errores.push('El campo E-mail no puede estar vacío')
        }else if(campoEmail.value.includes("@") == false){
            errores.push('Ingrese un mail con caracter válido. Por ej: minombre@codoacodo.com')
        }else{
            console.log(campoEmail.value)
        };

        //celular
        let campoCelular= document.getElementById('cel-name');
        caracteresInvalidosLetras.forEach(caracteres=>{
            if(campoCelular.value.includes(caracteres) == true){
                errores.push('El campo del celular no debe tener letras, sólo números')
            }
        })
        if(campoCelular.value == ""){
            errores.push('El campo del celular no debe estar vacío')
        }else if(campoCelular.value != 10){
            errores.push('el campo del celular debe tener 10 dígitos. Por ej: código de área + 8 números')
        }else{
            console.log(campoCelular.value)
        };
        
        //radio button
        let campoEnvio= document.getElementsByClassName('envio-radio')
        if(campoEnvio.checked == false){
            errores.push('Debe seleccionar el envío')
        }else{
            console.log(campoEnvio.value)
        };

        //select
        let campoZona= document.getElementById('zona');
        if(campoZona.value == "seleccion" ){
            errores.push('Debe seleccionar la zona de envío')
        }else{
            console.log(campoZona.value)
        }
        //si los hay errores no se enviará el formulario
        if(errores.length > 0 ){
            event.preventDefault();
        
            let listaErrores= document.querySelector('div.errores');
            for(let i = 0; i<errores.length; i++){
                listaErrores.innerHTML+= "<li>" + errores[i] + "</li>"
            }
        
        }else{
            alert('El envío del formulario se realizó con exito');

        }
      })

})


