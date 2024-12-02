const books = [
    {
        name: "Book 1",
        title: "The Great Gatsby",
        author: "F.Scott Fitzgerald",
        publicationYear: "1925",
        genres: ["Fiction", "Classics"]
    },
    {
        name: "Book 2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: "1960",
        genres: ["Fiction", "Coming-of-Age"]
    }
];

console.log(books);
books.forEach(book => {
    console.log('Title: ${book.title}, Author: ${book.author}');
});