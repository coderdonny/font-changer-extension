const fontSelect = document.getElementById('font-select');
fontSelect.addEventListener('change', () => {
	const font = fontSelect.value;
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(
			tabs[0].id,
			{ action: 'change-font', font: font },
			() => {
				console.log(`Font set to ${font}`);
			}
		);
	});
});
