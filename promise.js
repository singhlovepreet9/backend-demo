const timeConsumingTask = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('data is available');
			resolve();
		}, 2000);
	});
};

const main = async () => {
	console.log('reading data');
	try {
		await timeConsumingTask();
		console.log('reading complete');
	} catch (err) {}
};

main();
