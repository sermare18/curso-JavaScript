import AddTodo from './components/add-todo.js'
import Modal from './components/modal.js'

export default class View{
    // En esta clase vamos a manejar la tabla de todos en html
    constructor(){
        this.model = null;
        // Variable que referencia a 'table' en el html
        this.table = document.getElementById('table');
        // Variable que referencia a un objeto de tipo AddTodo
        this.addTodoForm = new AddTodo();
        // Evento del addTodoForm, ponemos una función anónima para que no de conflictos el 'this'
        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
        // Variable que referencia al modal
        this.modal = new Modal();
        // Evento del modal, ponemos una función anónima para que no de conflictos el 'this'
        this.modal.onClick((id, values) => this.editTodo(id, values));
    }

    setModel(model){
        this.model = model;
    }

    // Función que renderiza los todos existentes en html
    render(){
        const todos = this.model.getTodos();
        // for (const todo of todos){ //Buche for-each
        //     this.createRow(todo);
        // }
        todos.forEach((todo) => this.createRow(todo));
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

    
    editTodo(id, values){
        // Encargamos a la clase model el trabajo de almacenar los datos modificados del todo
        this.model.editTodo(id, values);
        // Modificamos la tabla html, obtenemos la fila concreta del todo
        const row = document.getElementById(id);
        // Titulo
        row.children[0].innerText = values.title;
        // Descripción
        row.children[1].innerText = values.description;
        // Checkbox
        row.children[2].children[0].checked = values.completed;
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
                <!-- Aqui va el checkbox -->
            </td>
            <td class="text-right">
                <!-- Aqui van los botones de editar y eliminar -->
            </td>
        `;

        // CHECKBOX
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        // Añadimos a la nueva fila el botón de eliminar
        row.children[2].appendChild(checkbox);

        // EDIT BUTTON
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        // Establece el atributo data-toggle del botón en el valor modal.
        // Este atributo indica que el botón debe activar un modal cuando se hace clic en él.
        editBtn.setAttribute('data-toggle', 'modal');
        // Especificamos que modal debemos mostrar con el id del modal del html 
        editBtn.setAttribute('data-target', '#modal');
        // Para que el modal nos muestre los datos pre-existentes del todo
        editBtn.onclick = () => this.modal.setValues(todo);
        // Añadimos a la nueva fila el botón de eliminar
        row.children[3].appendChild(editBtn);

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