import { createSlice } from "@reduxjs/toolkit";

export type Card = {
  id: number | string;
  title: string;
  description?: string;
};

export type Column = {
  id: number | string;
  title: string;
  cards: Card[];
};

export type BoardState = {
  columns: Column[];
};

const initialState: BoardState = {
  columns: [
    { id: crypto.randomUUID(), title: "To Do", cards: [] },
    { id: crypto.randomUUID(), title: "In Progress", cards: [] },
    { id: crypto.randomUUID(), title: "Done", cards: [] },
  ],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    AddColumn(state, action) {
      state.columns.push({
        id: crypto.randomUUID(),
        title: action.payload,
        cards: [],
      });
    },
    addCard(state, action) {
      const col = state.columns.find(
        (column) => column.id === action.payload.columnId
      );
      if (col) {
        col.cards.push({
          id: crypto.randomUUID(),
          title: action.payload.title,
          description: action.payload.description,
        });
      }
    },
    deleteCard(state, action) {
      const { columnId, cardId } = action.payload;
      const col = state.columns.find((column) => column.id === columnId);
      if (col) {
        col.cards = col.cards.filter((card) => card.id !== cardId);
      }
    },
  },
});

const { AddColumn, addCard, deleteCard } = boardSlice.actions;
export { boardSlice, AddColumn, addCard, deleteCard };
