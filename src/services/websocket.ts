import { writable } from 'svelte/store';
import { onCloseAndError, onMessage, onOpen } from './websocketHelpers';

export interface Fruit {
	fruit?: 'banana' | 'kiwi' | 'tomato';
}

// { "fruit": "banana" }
// { "fruit": "kiwi" }
// { "fruit": "tomato" }

export const fruit$ = writable<Fruit>();
export const socketConnected$ = writable<boolean>(false);

export function openMarket(): void {
	const webSocket = new WebSocket('ws://localhost:8080');

	onOpen(webSocket, () => {
		socketConnected$.set(true);
	});
	onCloseAndError(webSocket, () => {
		socketConnected$.set(false);
	});

	onMessage(webSocket, event => {
		const fruit = JSON.parse(event.data) as Fruit;
		fruit$.set(fruit);
	});
}
