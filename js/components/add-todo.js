export default class AddTodo{
    // Esta clase recoge los formularios del todo y los envía a otras clases
    constructor(){
        // Variable que referencia al botón 'add'
        this.btn = document.getElementById('add');
        // Variable que referencia al input 'title'
        this.title = document.getElementById('title');
        // Variable que referencia al input 'description'
        this.description = document.getElementById('description');
    }

    // El parámetro 'callback' hace referencia a otra función ajena a esta clase
    onClick(callback) {
        this.btn.onclick = () => {
        // El operadr de comparación en JavaScript es '==='
            if(title.value === '' || description.value === ''){
                console.error('Incorrecto');
            }  else { //Si el titulo y la descripción son válidos
                callback(title.value, description.value);
            }
        }
    }
}