import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodo = create(
  persist((set) => ({
    
    todos: [],

    addTodo: (todo) =>
      set((state) => ({
        todos: [...state.todos, todo],
      })),

    deleteTodo: (ind) =>
      set((state) => ({
        todos: state.todos.filter((_, index) => index !== ind),
      })),

    updateTodo: (todo, ind) =>
      set((state) => ({
        todos: state.todos.map((t, index) => (index === ind ? todo : t)),
      })),

    sortTodo: () =>
      set((state) => ({
        todos: state.todos.sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        ),
      })),
      
  }))
);
