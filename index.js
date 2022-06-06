const advice_id = document.querySelector('.advice-id');
const advice_content = document.querySelector('.advice-content');
const dice = document.querySelector('.dice');
const loading_dots = document.querySelector('.loading-dots');

function newAdvice() {
	loading_dots.style.display = 'flex';
	advice_content.style.display = 'none';
	fetch('https://api.adviceslip.com/advice')
		.then((res) => res.json())
		.then((data) => {
			advice_id.textContent = `advice #${data.slip.id}`;
			advice_content.textContent = `"${data.slip.advice}"`;
			loading_dots.style.display = 'none';
			advice_content.style.display = 'block';
		});
}

newAdvice();

dice.addEventListener('click', function () {
	newAdvice();
});
