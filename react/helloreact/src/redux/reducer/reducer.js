export default function reducer(isLoggedIn = false, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return isLoggedIn = action.isLoggedIn;
        default:
            return isLoggedIn;
    }
}