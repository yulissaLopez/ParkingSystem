class Vehiculo {
    constructor(placa,modelo, marca, estado = true){
        //This se refiere a la nueva estancia del objeto
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.estado = estado;
    }

    saludo(){
        console.log(`${this.estado}`)
    }
}

//default para una unica entidad, sin default para exportar multiples entidades export { Persona, Estudiante }
export default Vehiculo;