import * as Interfaces from './../interfaces';

// interface A {
//     a: number;
// }

class UniversityLibrarian implements Interfaces.Librarian /* , A*/ {
    name: string;
    email: string;
    department: string;

    // a: number = 1;

    assistCustomer(cusName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${cusName} with book ${bookTitle}`);
    }
}

export { UniversityLibrarian };