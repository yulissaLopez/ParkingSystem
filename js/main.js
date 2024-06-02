//con export dafault se importa la clase con la ruta
//sin default se debe usar llaves para importar la clase import {Clase} from "ruta"
import Vehiculo from "./Vehiculo.js";
import { addElementsTable } from "./anadirElementos.js";
import { habilitarCampos } from "./habilitarCampos.js";
 
document.addEventListener("DOMContentLoaded", function(){
    const btnEnviar = document.getElementById("btnEnviar");
    const tabla = document.getElementById("infoTabla");
    const infoBody = document.getElementById("infoBody");
    const placaInput = document.getElementById("placa");
    const formRegistro = document.getElementById("formRegistro");
    
    //vehiculo de prueba
    const vehiculoPrueba = new Vehiculo("YLC56", "Mercedez", "BENZ", false);
    //array de vehiculos
    const list_vehiculos = [vehiculoPrueba]

    placaInput.addEventListener("change", ()=>{
        //console.log(document.getElementById("placa").value)
        const placa = document.getElementById("placa").value;
        //verificar si la placa no esta ya inscrita
        //funcion flecha anonima si el valor del atributo placa del vehiculo es diferente a la placa retorna true
        const noExiste = (elemento) => elemento.placa != placa;
        //every (metodo iterativo)ejecuta una funcion por cada elemento del array retorna true si todos los elementos cumplen la condicion y falso si al menos uno no lo hace
        if(list_vehiculos.every(noExiste) === true){
            habilitarCampos(document.getElementById("modelo"));
            habilitarCampos(document.getElementById("marca"));
            btnEnviar.textContent = "Registar Vehiculo y Entrada";
            btnEnviar.style.display = "block";
        }else{
            //se autocompletan los campos
            //recorrer la lista de vehiculos y encontrarlo
            const index = list_vehiculos.findIndex(vehiculo => vehiculo.placa === placa);
            document.getElementById("modelo").value = list_vehiculos[index].modelo;
            document.getElementById("marca").value = list_vehiculos[index].marca;

            if(list_vehiculos[index].estado === false){
                btnEnviar.textContent = "Registar Entrada";
                btnEnviar.style.display = "block";
                list_vehiculos[index].estado = true;
            }
        }
        
    })

    
    //registra la informacion
    btnEnviar.addEventListener("click", ()=>{
        const placa = document.getElementById("placa").value
        const modelo = document.getElementById("modelo").value;
        const marca = document.getElementById("marca").value;

        //nueva instancia de vehiculo
         const vehiculo = new Vehiculo();
        //crear una nueva estancia del vehiculo
        vehiculo.placa = placa;
        vehiculo.modelo = modelo;
        vehiculo.marca = marca;

        //anadir los elementos a la tabla
        addElementsTable(vehiculo,tabla, infoBody);
        //anadir al array de vehiculos
        list_vehiculos.push(vehiculo);
        console.log(list_vehiculos)

        //reset el form
        formRegistro.reset();
        //oculto el boton y bloqueo nuevamente los inputs
        btnEnviar.style.display = "none";

        if(document.getElementById("modelo").disabled === false){
            habilitarCampos(document.getElementById("modelo"));
            habilitarCampos(document.getElementById("marca"));
        }
        
    })

   



    


})