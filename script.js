class LibraryItem {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    getDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}`);
    }
}

class Book extends LibraryItem {
    constructor(title, author, publishedYear, genre) {
        super(title, author, publishedYear);
        this.genre = genre;
    }

    getDetails() {
        super.getDetails();
        console.log(`Genre: ${this.genre}`);
    }
}


class Magazine extends LibraryItem {
    constructor(title, author, publishedYear, issueNumber) {
        super(title, author, publishedYear);
        this.issueNumber = issueNumber;
    }

    getDetails() {
        super.getDetails();
        console.log(`Issue Number: ${this.issueNumber}`);
    }
}


const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");
const magazine = new Magazine("National Geographic", "vighac", 2023, 12);

console.log("Book Details:");
book.getDetails();

console.log("Magazine Details:");
magazine.getDetails();