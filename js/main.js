//con export dafault se importa la clase con la ruta
//sin default se debe usar llaves para importar la clase import {Clase} from "ruta"
import Vehiculo from "./Vehiculo.js";
import { addElementsTable } from "./anadirElementos.js";
 
document.addEventListener("DOMContentLoaded", function(){
    const btnEnviar = document.getElementById("btnEnviar");
    const tabla = document.getElementById("infoTabla");
    const infoBody = document.getElementById("infoBody");

    const vehiculo = new Vehiculo();

    btnEnviar.addEventListener("click", ()=>{
        const placa = document.getElementById("placa").value;
        const modelo = document.getElementById("modelo").value;
        const marca = document.getElementById("marca").value;

        
        //crear una nueva estancia del vehiculo
        vehiculo.placa = placa;
        vehiculo.modelo = modelo;
        vehiculo.marca = marca;

        //anadir los elementos a la tabla
        addElementsTable(vehiculo,tabla, infoBody);


        
        
       
    })



    


})