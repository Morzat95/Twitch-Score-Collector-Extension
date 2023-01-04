setInterval(() => {
	const buttons = document.querySelectorAll(
		'button[class*="ScCoreButtonSuccess"]'
	);
	if (buttons.length > 0) {
		buttons[0].click();
	}
}, 500);
