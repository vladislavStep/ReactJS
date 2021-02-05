'use strict';

function first() {
	// Do something
	setTimeout(function () {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

function learnJS(lang, callBack) {
	console.log(`Я учу: ${lang}`);
	callBack();
}
function done() {
	console.log('Я прошол этот урок ');
}
// learnJS('JavaScript', function () {
// 	console.log('Я прошол этот урок ');
// });

learnJS('JavaScript', done);
