export default class Alert {
    constructor(alertId){
        // Variable que referencia a la alerta al rellenar mal el formulario cuando pulsamos el botón 'add'
        this.alert = document.getElementById(alertId);
    }

    show(message){
        // Para que elimine la clase d-none del id 'alert' del html
        this.alert.classList.remove('d-none');
        // Para que me modifique el texto de id 'alert' del html
        this.alert.innerText = message;
    }

    hide(){
        // Para que añada la clase d-none del id 'alert' del html
        this.alert.classList.add('d-none');
    }
}

