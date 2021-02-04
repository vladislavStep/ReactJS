'use strict';

const numberOfFlilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFlilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотров фильмов?', ''),
// 		b = prompt('На сколько оцените его?', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}

// }
// let i = 0;
// while (i < 2) {
// 	const a = prompt('Один из последних просмотров фильмов?', ''),
// 		b = prompt('На сколько оцените его?', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// 	i++;
// }
let i = 0;
do {
	const a = prompt('Один из последних просмотров фильмов?', ''),
		b = prompt('На сколько оцените его?', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
	i++;
} while (i < 2);

if (personalMovieDB.count < 10) {
	console.log("Просмотренное довольно много фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);