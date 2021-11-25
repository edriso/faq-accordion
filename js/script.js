const accordionItems = document.querySelectorAll(".accordion__item");
const accordionButtons = document.querySelectorAll(".accordion__question");

for (let btn of accordionButtons) {
	btn.addEventListener("click", () => {
		let accordionItem = btn.closest(".accordion__item");
		let isShown = false;
		if (accordionItem.classList.contains("show")) {
			isShown = true;
		}

		accordionItems.forEach((item) => {
			item.classList.remove("show");
		});

		if(isShown) {
			accordionItem.classList.remove("show");
		} else {
			accordionItem.classList.add("show");
		}

		// this will not close other shown questions on opening another one
		// btn.closest(".accordion__item").classList.toggle("show");
	})
}
