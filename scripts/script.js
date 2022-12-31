setInterval(() => {
	const buttons = document.querySelectorAll(
		'button[class*="ScCoreButtonSuccess"]'
	);
	if (buttons.length > 0) {
		const button = buttons[0];
		button.click();
	}
}, 500);
