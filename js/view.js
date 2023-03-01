import AddTodo from './components/add-todo.js'

export default class View{
    // En esta clase vamos a manejar la tabla
    constructor(){
        this.model = null;
        // Variable que referencia a 'table' en el html
        this.table = document.getElementById('table');
        // Variable que referencia a un objeto de tipo AddTodo
        this.addTodoForm = new AddTodo();
        // Evento, ponemos una función anónima para que no de conflictos el 'this'
        this.addTodoForm.onClick((title, description) => this.addTodo(title, description))
    }

    setModel(model){
        this.model = model;
    }

    // Función que recibe con argumentos un titulo y una descripción y crea un todo en html
    // además de guardar el todo en la clase model
    addTodo(title, description){
        //Añadimos el todo a la supeuesta "base de datos"
        const todo = this.model.addTodo(title, description); 
        // Dibujamos la fila nueva en el html
        this.createRow(todo);

    }

    // Función que modifica el valor de la voariable 'completed' de los objetos todo llamando a la clase model
    toggleCompleted(id) {
        this.model.toggleCompleted(id);
    }

    // Función que elimina un todo dado su id de la lista de todos a través de la clase model
    // además elimina el todo de la representación html
    removeTodo(id){
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }

    // Función que crea filas nuevas que se insertan debajo de la tabla de todos en el html
    createRow(todo){
        //Creamos una nueva fila para añadir a 'table'
        const row = table.insertRow();
        row.setAttribute('id', todo.id);
        row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class="text-center">

            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        // CHECKBOX
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        // Añadimos a la nueva fila el botón de eliminar
        row.children[2].appendChild(checkbox);

        // REMOVE BUTTON
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        // Damos funcionalidad al botón de eliminar
        removeBtn.onclick = () => this.removeTodo(todo.id);
        // Añadimos a la nueva fila el botón de eliminar
        row.children[3].appendChild(removeBtn);
    }
}