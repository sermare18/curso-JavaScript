import Alert from './alert.js';

export default class AddTodo{
    // Esta clase recoge los formularios del todo y los envía a otras clases
    // Se encarga del boton add
    constructor(){
        // Variable que referencia al botón 'add'
        this.btn = document.getElementById('add');
        // Variable que referencia al input 'title'
        this.title = document.getElementById('title');
        // Variable que referencia al input 'description'
        this.description = document.getElementById('description');
        // Variable que referencia a una alerta del tipo id='alert' del html
        this.alert = new Alert('alert');
    }

    // El parámetro 'callback' hace referencia a otra función ajena a esta clase
    onClick(callback) {
        this.btn.onclick = () => {
        // El operadr de comparación en JavaScript es '==='
            if(title.value === '' || description.value === ''){
                this.alert.show('Title and description are required');
            }  else { //Si el titulo y la descripción son válidos
                this.alert.hide();
                callback(title.value, description.value);
            }
        }
    }
}