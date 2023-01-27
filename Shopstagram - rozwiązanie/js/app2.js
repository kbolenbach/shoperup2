// hej, podrzucam zadanie domowe, chcialbym abyscie minimalnie wykorzystali tez wiedze z poprzednich zajec i stworzyli:
// obiekt Person, ktory bedzie miał pola:
// name - imie
// surname - nazwisko
// age - wiek
// favouriteMovies - tablica z ulubionymi filmami
// getFavMovies - metoda ktora zwraca string, polaczonych wartosci naszej tablicy wyzej czyli np: "film1, film2, film3"
// getFullName - metoda ktora zwraca string "name surname" gdzie oczywiscie podstawia dane z wlasciwosci wyzej
// sayHello - metoda ktora wykorzystuje powyzsze dane i zwraca string:
//          "Hello my name is ...metodaGetFullName... I am ...age..., and my favorite movies are: ....getFavMovies...."
// na koncu wyswietlcie to co zwraca metoda sayHello w konsoli


const person = {
    name: "Jan",
    surname: "Kowalsky",
    age: 30,
    favouriteMovies: ["Mad Max", "Matrix", "Joker"],
    getFavMovies: function() {
        return this.favouriteMovies.join(", ");
    },
    getFullName: function() {
        return `${this.name} ${this.surname}`;
    },
    sayHello: function() {
        console.log(`Hello, my name is ${this.getFullName()}. I am ${this.age}, and my favourite movies are: ${this.getFavMovies()}.`);
    }

};

// console.log(person.favouriteMovies);
// console.log(person.getFavMovies());
console.log(person.sayHello());
