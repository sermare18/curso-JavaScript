import Alert from './alert.js';

export default class Modal {
    // Esta clase hace referencia a la ventana emergente que aparece encima de la web (o modal)
    // al pulsar sobre el botón de editar de un todo.
    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        // Hace referencia al boton 'save' del modal
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
        this.alert = new Alert('modal-alert');
        this.todo = null;
    }

    // Función que recibe un todo y guarda sus respectivos elementos en las variables de esta clase
    setValues(todo){
        this.todo = todo;
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;
    }

    // El parámetro 'callback' hace referencia a otra función ajena a esta clase (View)
    onClick(callback) {
        this.btn.onclick = () => {
            if (!this.title.value || !this.description.value) {
                this.alert.show('Title and description are required');
                // console.error('Titulo o descripción del modal incorrectos');
                return; //Para que no siga ejecutando código de esta clase
            } // Pulsamos el botón 'save' y los datos son correctos
            // El modal en el htm tiene un id que se llama 'modal'
            // Con el toggle escondemos el modal si es que esta mostrandose por pantalla
            $('#modal').modal('toggle')

            callback(this.todo.id, {
                title: this.title.value,
                description: this.description.value,
                completed: this.completed.checked,
            });
        }
    }
}