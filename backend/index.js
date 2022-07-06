const WebSocketServer = require('ws');

const server = new WebSocketServer.Server({port: 8080})

server.on("connection", ws => {
	console.log("New client connected");
	onClose(ws);

	sendMessageRandomly(ws, '{"fruit":"tomato"}', 5500, 6000);
	sendMessageRandomly(ws, '{"fruit":"kiwi"}', 3000, 5000);
	sendMessageRandomly(ws, '{"fruit":"banana"}', 3000, 7000);
});
console.log("The WebSocket server is running on port 8080");

function sendMessageRandomly(ws, message, minDelay, maxDelay) {
	return setRandomInterval(() => ws.send(message), minDelay, maxDelay);
}

function setRandomInterval(intervalFunction, minDelay, maxDelay) {
	let timeout;

	const runInterval = () => {
		const timeoutFunction = () => {
			intervalFunction();
			runInterval();
		};

		const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

		timeout = setTimeout(timeoutFunction, delay);
	};

	runInterval();

	return {
		clear() {
			clearTimeout(timeout);
		},
	};
}

function onClose(ws) {
	ws.on("close", () => {
		console.log("Client disconnected");
	});
	ws.onerror = function () {
		console.error("Some Error occurred");
	}
}
