export default class Filters{
    constructor(){
        this.form = document.getElementById('filters');
        this.btn = document.getElementById('search');
    }

    onClick(callback){
        this.btn.onclick = (e) => {
            // el parametro 'e' hace referencia al evento que se crea al dar al boton de search del filtro
            // con esta función hacemos que no se refresque la página al pulsar el boton de search
            // de esta forma no enviamos los datos al servidor.
            e.preventDefault();
            // Sacamos los datos introducidos en el filtro
            const data = new FormData(this.form);
            callback({
                // Definición de los atributos de la clase Filters
                type: data.get('type'),  //El método get busca el atributo name='type' en el html y nos devuelve el valor asignado a value
                words: data.get('words'),
            });
        }
    }
}