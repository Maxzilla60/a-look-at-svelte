export function onMessage(webSocket: WebSocket, listener: (event: MessageEvent<any>) => void): void {
	webSocket.addEventListener('message', event => {
		console.log(event.data);
		listener(event);
	});
}

export function onOpen(webSocket: WebSocket, listener: () => void): void {
	webSocket.addEventListener('open', () => {
		console.log('WebSocket open!');
		listener();
	});
}

export function onCloseAndError(webSocket: WebSocket, listener: () => void): void {
	webSocket.addEventListener('close', event => {
		console.log('WebSocket closed!', event);
		listener();
	});
	webSocket.addEventListener('error', event => {
		console.log('WebSocket closed!', event);
		listener();
	});
}
