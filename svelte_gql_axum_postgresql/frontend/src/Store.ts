import {writable} from "svelte/store";
import type {Todo} from "$lib/types/types";

function createTodoListStore() {
    const {subscribe, update} = writable([] as Todo[]);

    return {
        subscribe,
        add: (newTodo: Todo) => {
            update((todos) => {
                return [...todos, newTodo];
            });
        },
        delete: (id: number) => {
            update((todos) => {
                return todos.filter((todo) => todo.id !== id);
            });
        },
        check: (id: number, isComplete: boolean) => {
            update(todos => {
                return todos.map(todo => {
                    if (todo.id === id) {
                        return {...todo, completed: isComplete};
                    }
                    return todo;
                });
            });
        },
        toggleAll: (completed: boolean) => {
            update((todos) => {
                return todos.map((todo) => {
                    return {...todo, completed};
                });
            })
        },
        clearCompleted: () => update(todos => todos.filter(todo => !todo.completed)),
    };
}

export const todoListStore = createTodoListStore();
