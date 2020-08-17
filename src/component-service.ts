export default class ComponentService {

    static saveMan(people: any){
        localStorage.setItem('people', JSON.stringify(people))
    };

    static getMan(){
        // @ts-ignore
        return JSON.parse(localStorage.getItem('people'))
    };

    static saveUser(user: any){
        localStorage.setItem('user', JSON.stringify(user))
    };

    static getUser(){
        // @ts-ignore
        return JSON.parse(localStorage.getItem('user'))
    };
}