let lista = [];

function agregarUnaTarea(){
    const input = document.getElementById("input-task");
    const text = input.value;
    console.log(text);

    const obj = { task: text, completed: false };
    if (text !== ""){
        lista.push(obj);
    }

    const list = document.getElementById("listaTareas");

    const li = document.createElement("li");
    li.textContent = obj.task;

    const botonDelete = document.createElement("button");
    botonDelete.textContent = "Delete";

    list.append(li, botonDelete);
    console.log("objeto", obj.completed);

    botonDelete.addEventListener("click", () => {
        console.log("log");
        li.remove();
        botonDelete.remove();
    });
}
