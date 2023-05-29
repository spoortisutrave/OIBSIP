const result = document.querySelector('#result');

function appendValue(value) {
	result.value += value;
}

function clearInput() {
	result.value = '';
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (error) {
		result.value = 'Error';
	}
}
