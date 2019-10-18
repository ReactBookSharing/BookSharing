import api from "./api";

export function getBooks() {
    return api.get(`books/`, {});
}

export function getBook(book) {
    return api.get(`books/${book.id}/`, {});
} 

export function getBookStatus(book ) {
    return api.get(`books/${book.id}/status/`, {});
}

export function postBook(profile, book) {
    return api.post(`profile/${profile.id}/books/create-book/`, { 
        book: book
    });
}

export function deleteBook(profile, book) {
    return api.get(`profile/${profile.id}/books/${book.id}/`);
}