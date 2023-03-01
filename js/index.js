import Model from './model.js'
import View from './view.js'

// Con esto conseguimos que no nos ejecute nada de JavaScript hasta que se haya cargado todo el html
document.addEventListener('DOMContentLoaded', function(){
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);

});