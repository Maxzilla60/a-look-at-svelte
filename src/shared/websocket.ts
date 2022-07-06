import { writable } from 'svelte/store';

export interface Fruit {
	fruit?: 'banana' | 'kiwi' | 'tomato';
}

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

	function onMessage(webSocket: WebSocket, listener: (event: MessageEvent<any>) => void): void {
		webSocket.addEventListener('message', event => {
			console.log(event.data);
			listener(event);
		});
	}

	function onOpen(webSocket: WebSocket, listener: () => void): void {
		webSocket.addEventListener('open', () => {
			console.log("WebSocket open!");
			listener();
		});
	}

	function onCloseAndError(webSocket: WebSocket, listener: () => void): void {
		webSocket.addEventListener('close', event => {
			console.log("WebSocket closed!", event);
			listener();
		});
		webSocket.addEventListener('error', event => {
			console.log("WebSocket closed!", event);
			listener();
		});
	}
}
