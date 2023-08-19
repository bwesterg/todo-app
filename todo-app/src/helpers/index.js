const todosUrl = "http://127.0.0.1:3000/todos";

export function patchTodo(updatedTodo){
    fetch(todosUrl + "/" + updatedTodo.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({todo: updatedTodo})
      })
}

export function postTodo(newTodo){
  fetch(todosUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON"
    },
    body: JSON.stringify({todo: newTodo})
    //need key b/c strong params used on backend
  })
}

export function deleteTodo(id){
  fetch(todosUrl + "/" + id, { method: "DELETE" })
}
