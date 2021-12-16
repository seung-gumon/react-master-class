import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});


export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
