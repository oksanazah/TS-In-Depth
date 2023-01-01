import { format, logger, logMethod, logParameter, sealed, writable } from '../decorator';
import * as Interfaces from './../interfaces';

// interface A {
//     a: number;
// }

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian /* , A*/ {
    @format()
    name: string;
    email: string;
    department: string;

    // a: number = 1;

    @logMethod
    assistCustomer(@logParameter cusName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${cusName} with book ${bookTitle}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };