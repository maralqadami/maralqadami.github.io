const login = (user) => {
    if (user.name === 'amin') {
        return  'you are loged in'
    } else {
        return 'wrong user'
    }
};

const register = (user) => {
    return {user, token};
};


const getMe = (token) => {
    return user;
};