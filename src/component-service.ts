export default class ComponentService {

    static saveMan(people){
        localStorage.setItem('people', JSON.stringify(people))
    };

    static getMan(){
        return JSON.parse(localStorage.getItem('people'))
    };

    static saveUser(user){
        localStorage.setItem('user', JSON.stringify(user))
    };

    static getUser(){
        return JSON.parse(localStorage.getItem('user'))
    };
}