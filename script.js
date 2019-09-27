// calculator

	let calcBlock = document.querySelector("#price"),
		inputs = calcBlock.querySelectorAll(".counter-block-input"),
		selectBase = calcBlock.querySelector("#select"),
		fieldTotal = calcBlock.querySelector("#total"),
		personsValue = 0,
		daysValue = 0,
		baseValue = 1,
		basePrice = 500;

	function calcTotal() {
		let total = personsValue * daysValue * basePrice * baseValue;
		fieldTotal.innerHTML = total;
	};

	inputs.forEach((item, i) => {
		item.addEventListener("input", function(e) {
			
			if (i == 0) {
				personsValue = +this.value;
			} else if (i == 1) {
				daysValue = +this.value;
			}

			calcTotal();
		})
	});

	selectBase.addEventListener("change", function(e) {
		baseValue = this.value;
		calcTotal();
	});
