// /Napisać funkcję która przyjmuje 2 parametry, pierwszy z nich to tablica, a drugi element ktory chcemy w niej znalezc. Funkcja powinna zwracac true albo false w zaleznosci od tego czy znajdzie element czy nie.
// przykladowe dane wejsciowe:
// const table = [ "x", "y", "z" ];
// przykladowe wywolanie funkcji:
// checkTable(table, "x");
// zwracana wartosc:  true / false

const table2 = ["x", "y", "z"];

function checkTable (arrayToCheck, elementOfArray) {
   
   if (arrayToCheck.includes(elementOfArray)) {
    return true;
    
   } else {
    return false; 
}
   
}

checkTable(table2, "x");
console.log(checkTable(table2, "x"));

//2. Napisać funkcję która przyjmuje 2 parametry, pierwszy z nich to tablica stringów (zdań), a drugi to separator po ktorym chcemy te stringi rozbić na elementy nowej tablicy. Funkcja powinna zwroić tablice tablice tzn, przechodzi po kazdym stringu z pierwotnej tablicy, rozbija go według separatora ktory podalismy i wynik wrzuca do nowej tablicy, tak robi z kazdy stringiem, i te nowo powstale tablice wrzuca do jednej wspolnej.
// przykładowe dane wejściowe:
// const table = [ "ala ma kota", "test test", "xxx" ];
// wywołanie funkcji:
// convertStringToArrays(table, " ");
// zwracana wartość:
// [
//     ["ala", "ma", "kota"],
//     ["test, "test"],
//     ["xxx"]
// ]

const table = ["Ala ma kota", "test test", "xxx"];
let outputTable = [];
let separator = " ";

function convertStringToArrays (tableToSplit, separator) {
  for (let i = 0; i < tableToSplit.length ; i++) {
      let element = tableToSplit[i].split(separator);
      outputTable.push(element);
   }
   
  };

  convertStringToArrays (table, separator);
  console.log(outputTable);

//   3. ZADANIE DLA CHETNYCH
//   Napisać funkcję która przyjmuje 2 parametry, pierwszy z nich to tablica dwu wymiarowa, drugi to element którego szukamy. Jeśli dany element znajduje się w tablicy to zwracamy true, jesli nie to false i takie wyniki zapisujemy w tablicy. Przechodzimy po wszystkich elementach pierwotnej. tablicy i w wyniku powinnismy dostac dwu wymiarową tablice z wynikami poszukiwac w postaci true / false.
//   przykładowe dane wejściowe:
//   const binaryTables = [
//       [ 1, 0, 1, 1 ],
//       [ 0, 1, 1, 1 ],
//       [ 1, 0, 1, 1 ]
//   ];
//   wywołanie funkcji:
//   checkTables(binaryTables, 1)
//   zwracana wartość:
//   [
//       [ true, false, true, true ],
//       [ false, true, true, true ],
//       [ true, false, true, true ]
//   ];
  

const binaryTables = [
          [ 1, 0, 1, 1 ],
          [ 0, 1, 1, 1 ],
          [ 1, 0, 1, 1 ],
      ];

let ifTableHasIt = [];

function checkBigTable(tableOfTables, ifArrayHasIt) {

    for(i = 0; i < tableOfTables.length ; i++) {
        for(j = 0; j < tableOfTables[i].length; j++) {
            // if(tableOfTables[i][j] = ifArrayHasIt) {
            //     ifTableHasIt[i].push("true");
            // } else {
            //     ifTableHasIt[i].push("false");
            // };

            switch(ifArrayHasIt) {
                case 1:
                ifTableHasIt[i][j].push("true");
                break;
                case 0:
                ifTableHasIt[i][j].push("false");
                break;
                default:
                ifTableHasIt[i][j] = " ";
                break;
            }
            //     for(ifArrayHasIt of tableOfTables) {
            //         switch(ifArrayHasIt) {
            //             case 1:
            //             ifTableHasIt[i].push("true");
            //             break;
            //             case 0:
            //             ifTableHasIt[i].push("false");
            //             break;
            //             default:
            //             ifTableHasIt[i] = " ";
            //     }
            // }
            
        }
    }
};

checkBigTable(binaryTables, 1);
console.log(ifTableHasIt);
