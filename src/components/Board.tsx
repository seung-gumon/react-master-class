import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;


const Area = styled.div`
  flex-grow: 1;
`



interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic) => (
                    <Area
                        ref={magic.innerRef}
                        {...magic.droppableProps}
                    >
                        {toDos.map((toDo, index) => (
                            <DragabbleCard key={toDo} index={index} toDo={toDo} />
                        ))}
                        {magic.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}
export default Board;