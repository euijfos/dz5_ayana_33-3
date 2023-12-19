//первое задание
var numbers = [2, 3, 4, 5, 44, 44, 34, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 8, 7, 8, 7, 5, 6, 4, 5];
var Numbers = []

for (var i = 0; i < numbers.length; i++) {
    if (Numbers.indexOf(numbers[i]) === -1) {
        Numbers.push(numbers[i]);
        // console.log(numbers[i])
    }
}

console.log(Numbers);

//второе задание
function booksFilter (books){
    const ubooks = books.filter(book => book.toLowerCase().includes('у'))
    const otherBooks = books.filter(book => !book.toLowerCase().includes('у'))

    console.log('\nКНИГИ С БУКВОЙ У')
    ubooks.map((el) => {
        console.log(el)} )

    console.log('\nОСТАЛЬНЫЕ КНИГИ')
    otherBooks.map((el) => {
        console.log(el)})


}
const booksArray = ['Война и мир','Гордость и предубеждение','Узорный покров','Гранатовый браслет','Мастер и маргарита', 'Уничтожить королество','Женская логика']
booksFilter(booksArray)
