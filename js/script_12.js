const numberOfFlilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	conut: numberOfFlilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотров фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотров фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// -----------------------------



