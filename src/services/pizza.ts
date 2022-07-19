import { writable } from 'svelte/store';

export const pizzaCount$ = writable<number>(1);

/*
pizzaCount$.set(0);
pizzaCount$.update(prev => prev + 1);
pizzaCount$.subscribe(newValue => console.log(newValue));
*/
