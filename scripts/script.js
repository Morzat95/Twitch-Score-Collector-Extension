const buttonClass =
	"ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW iVIehm";
const communityPointsSelector = "community-points-summary";

window.addEventListener("load", function (event) {
	console.log("Fully loaded");
	// Check if button is already displayed (this happens if Twitch is closed before redeem points)
	const buttons = document.getElementsByClassName(buttonClass);
	if (buttons.length > 0) {
		const button = buttons[0];
		button.click();
	}

	// I had to set a timeout because 'summary' is not found at start and I didn't found it using DOMNodeInserted with it's parent (may work but too complicated for this case so meh...)
	setTimeout(() => {
		const summary = document.getElementsByClassName(communityPointsSelector)[0];

		console.log("summary");
		console.log(summary);

		summary.addEventListener("DOMNodeInserted", function (event) {
			const buttons = summary.querySelectorAll("button");

			buttons.forEach((btn) => {
				const isChestButton = /.*ScCoreButtonSuccess.*/.test(btn.className);

				if (isChestButton) {
					// Clicking the button when is inserted doesn't work instantly
					const timeout = setTimeout(() => btn.click(), 1000);
				}
			});
		});
	}, 2000);
});
