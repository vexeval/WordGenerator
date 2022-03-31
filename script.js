const words = [
	"tile",
	"bean",
	"school",
	"flawed",
	"cafe",
	"element",
	"chicken",
	"job",
	"disturbance",
	"nail",
	"bathtub",
	"sharp",
	"humanity",
	"referral",
	"shower",
	"price",
	"annual",
	"draw",
	"spin",
];

function generateWord() {
	tword = Math.floor(Math.random() * 18) + 1;
	return words[tword];
}

const button = document.querySelector("button");
const output = document.querySelector(".output");
button.addEventListener("click", () => {
	//change text
	let word = generateWord();
	output.innerHTML = `<h4>${word}</h4>`;
});
