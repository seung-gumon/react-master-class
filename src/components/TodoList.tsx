import {useRecoilValue} from "recoil";
import CreateTodo from "./CreateToDo";
import {toDoState} from "../atoms";
import ToDo from "./Todo";


function ToDoList() {
    const toDos = useRecoilValue(toDoState);
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateTodo/>
            <ul>
                {toDos.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
