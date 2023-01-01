import { ReferenceItem, UL, RefBook, Reader, Shelf } from './classes';
import { Book, Librarian, Logger, Magazine } from './interfaces';
import { purge, getObjectProperty, getAllBooks, printRefBook, createCustomer, logCategorySearch, getBooksByCategory, getBooksByCategoryPromise, logSearchResults } from './functions';
import { Library } from './classes/library';
import { Category } from './enums';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 02.01
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// console.log(getBookAuthorByIndex(0));
// logBookTitles(['Refactoring JavaScript', 'JavaScript Testing']);

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;

// const a = typeof createCustomerID;
// console.log(idGenerator('Boris', 20));

// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 20);
// createCustomer('Anna', 20, 'Kyiv');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(1));

// console.log(checkoutBooks('NoName Customer', ...[1, 3, 4]));

// Task 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(false));

// Task 03.04
// console.log(bookTitleTransform('Learn TypeScript'));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`);
//     }
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const favoritAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBookPublished: 2
// };

// const favoritLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example',
//     department: 'Classical Literature',
//     assistCustomer: null
// };

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.author?.[0]);

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 05.03
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2022, 2);
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// refBook.printCitation();

// Task 05.04
// const favoritLibrarian: Librarian /* & A*/ = new UL.UniversityLibrarian();
// favoritLibrarian.name = 'Anna';
// favoritLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// favoritLibrarian.a = 2;

// let a: number | string;
// (<number>a).toUppetCase();
// (a as string).toUpperCase();

// if (typeof a === 'string') {
//     a.toString();
// } else {
//     a.toFixed();
// }

// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     title: 'Unknown'
// };

// const options: TOptions = { duration: 20 };
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options, options2));

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// const favoritLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoritLibrarian);

// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// Task 06.06
// let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna'
// };

// Task 07.01
// const inverntory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result = purge(['123', '234', '345']);
// const result1 = purge(inverntory);
// console.log(result1);
// const result2 = purge([1, 2, 3]);
// console.log(result2);

// Task 07.02, 07.03
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inverntory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.ptintTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty<Book, 'author' | 'title'>(inverntory[1], 'author'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular'
// };

// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages: 300
// };
// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 08.01, 08.02
// const favoritLibrarian1 = new UL.UniversityLibrarian();
// const favoritLibrarian2 = new UL.UniversityLibrarian();
// favoritLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 3;

// console.log(favoritLibrarian1);
// favoritLibrarian1.name = 'Anna';
// favoritLibrarian1['printLibrarian']();

// Task 08.03
// const favoritLibrarian = new UL.UniversityLibrarian();
// console.log(favoritLibrarian);
// favoritLibrarian.assistFaculty = null;
// favoritLibrarian.teachCommunity = null;

// Task 08.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();

// Task 08.05
// const favoritLibrarian = new UL.UniversityLibrarian();
// console.log(favoritLibrarian);
// favoritLibrarian.name = 'Anna';
// favoritLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// Task 08.06
// const favoritLibrarian = new UL.UniversityLibrarian();
// favoritLibrarian.name = 'Anna';
// console.log(favoritLibrarian.name);
// favoritLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// console.log(favoritLibrarian);

// Task 08.07
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.copies = 10;
// refBook.copies = -10;
// console.log(refBook.copies);

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');


// Task 09.03
console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(err => console.log(err));
console.log('End');