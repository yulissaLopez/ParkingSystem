class Vehiculo {
    constructor(placa,modelo, marca){
        //This se refiere a la nueva estancia del objeto
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
    }

    saludo(){
        console.log(`${this.placa}`)
    }
}

//default para una unica entidad, sin default para exportar multiples entidades export { Persona, Estudiante }
export default Vehiculo;