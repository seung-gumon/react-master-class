import {IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text, category, id}: IToDo) {

    const setToDos = useSetRecoilState(toDoState)

    const onClick = (newCategory: IToDo["category"]) => {
        setToDos((oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text, id, category: newCategory}
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1)
            ]
        }))
    }

    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
            {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
            {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}
        </li>
    )

}

export default ToDo