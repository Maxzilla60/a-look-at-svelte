import { writable } from 'svelte/store';

export const cheeseCount$ = writable<number>(1);

/*
cheeseCount$.set(0);
cheeseCount$.update(prev => prev + 1);
cheeseCount$.subscribe(newValue => console.log(newValue));
*/
