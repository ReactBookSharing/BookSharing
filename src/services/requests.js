import * as auth from './auth';
import * as books from './books';
import * as profiles from './profile';

const requests = {
    auth: auth, 
    books: books, 
    profiles: profiles
}

export default requests;