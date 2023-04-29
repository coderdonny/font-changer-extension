chrome.runtime.onInstalled.addListener(() => {
	console.log('Extension installed!');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === 'change-font') {
		const font = message.font || 'Open Sans';
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.executeScript(
				tabs[0].id,
				{ code: `document.body.style.fontFamily = '${font}';` },
				() => {
					console.log(`Font set to ${font}`);
				}
			);
		});
	}
});
