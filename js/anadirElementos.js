export function addElementsTable(vehiculo,tabla, bodyTabla){

    //calculara el numero de celdad
    const encabezadoTabla = tabla.rows[0];
    const numCeldas = encabezadoTabla.cells.length;

    //creo la nueva fila
    const nuevaFila = bodyTabla.insertRow();

    //creo las nuevas celdas
    const celd1 = document.createElement("td");
    const celd2 = document.createElement("td");
    const celd3 = document.createElement("td");
    const celd4 = document.createElement("td");
    
     
    //anadir texto
    celd1.textContent = vehiculo.placa;
    celd2.textContent = vehiculo.modelo;
    celd3.textContent = vehiculo.marca;
    celd4.textContent = vehiculo.estado;

    //unir a la fila
    nuevaFila.appendChild(celd1);
    nuevaFila.appendChild(celd2);
    nuevaFila.appendChild(celd3);
    nuevaFila.appendChild(celd4);

    // for(const atributo in vehiculo){
    //     //creo una celda
    //     const celda = nuevaFila.insertCell()
    //     celda.textContent = vehiculo[atributo]; 
    // }

}

