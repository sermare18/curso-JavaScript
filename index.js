// Con esto conseguimos que no nos ejecute nada de JavaScript hasta que se haya cargado todo el html
document.addEventListener('DOMContentLoaded', function(){

    // Constante que referencia al input 'title'
    const title = document.getElementById('title');

    // Constante que referencia al input 'description'
    const description = document.getElementById('description');

    // Constante que referencia a 'table'
    const table = document.getElementById('table');

    // Constante que referencia al botón 'add'
    const alert = document.getElementById('alert');

    // Constante que referencia al botón 'add'
    const btn = document.getElementById('add');

    // Variable que referencia al id de cada fila (Add Todo) de la tabla, cada fila tendrá un id único
    let id = 1;

    //Función que recibe como parámetro el id de un elemnto htm y lo borra
    function removeTodo(id) {
        console.log(id);
        document.getElementById(id).remove();
    }

    // Esta función añade a 'table' un todo (tarea por hacer)
    function addTodo(){
        // El operadr de comparación en JavaScript es '==='
        if(title.value === '' || description.value === ''){
            // Para que elimine la clase d-none del id 'alert' del html
            alert.classList.remove('d-none');
            // Para que me modifique el texto de id 'alert' del html
            alert.innerText = 'Title and description are required'
            // No seguimos ejecutando código;
            return;
        } 

        // Para que añada la clase d-none del id 'alert' del html 
        alert.classList.add('d-none');

        //Creamos una nueva fila para añadir a 'table'
        const row = table.insertRow();
        row.setAttribute('id', id++);
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';

        // Damos funcionalidad al botón de eliminar
        removeBtn.onclick = function (e){
            removeTodo(row.getAttribute('id'));
        }

        // Añadimos a la nueva fila el botón de eliminar
        row.children[3].appendChild(removeBtn);

    };

    // Al pulsar en el boton queremos que nos ejecute la función addTodo, no se ponen los paréntesis porque no queremos que se guarde el contenido de la funcíon en la variable si no que solo se ejecute la función
    btn.onclick = addTodo;



});

// Minuto 16:23



