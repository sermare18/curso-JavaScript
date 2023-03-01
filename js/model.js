export default class Model{
    // En esta clase vamos a ocuparnos del almacenamiento de los todo
    // Vamos a asignar a los todo un identificador 
    constructor(){
        this.view = null;
        this.todos = [];
        this.currentId = 1;
    }

    setView(view){
        this.view = view;
    }

    getTodos(){
        return this.todos;
    }

    // Función que devuelve el índice de un todo y -1 en caso de que no exista
    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }

    // Función que modifica el valor de la voariable 'completed' de los objetos todo
    toggleCompleted(id){

        // Obtenemos el índice del todo
        const index = this.findTodo(id);
        // Guardamos el todo
        const todo = this.todos[index];
        // Cambiamos el atributo 'completed' del todo
        todo.completed = !todo.completed;

        console.log(this.todos)

    }

    // Función que añade un todo a una lista de todos pasando un titulo y una descripción.
    // Devuelve una copia del último todo añadido
    addTodo(title, description){
        // Objeto todo
        const todo = {
            id: this.currentId++,
            title,      // title: title, (Sintaxis antigua)
            description,
            completed: false,
        }

        this.todos.push(todo);
        console.log(this.todos);

        // Retornamos un clon (o expandimos un objeto) para que no pueda ser modificado este objeto desde esta clase (Model) por otras clases, el clon si que podrá ser modificado.
        return {...todo}    //Object.assign({}, todo); (Sintaxis antigua)
    }

    // Función que elimina un todo dado su id de la lista de todos
    removeTodo(id){
        const index = this.findTodo(id);
        this.todos.splice(index, 1);
    }
}