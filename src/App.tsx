import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Search} from "./components/search";
import {People} from "./components/people";
import {Chat} from "./components/chat";
import ComponentService from './component-service';
import {IAppProps, MyState} from "./IAppProps";


export class App extends React.Component<IAppProps, MyState> {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
            activeMan: '',
            userItem: ComponentService.getUser(),
            findPeople: []
        };
        if(!this.state.userItem){
            this.state.userItem = []
        }
    };

    activeManState(man: any){
        this.setState({activeMan: man});
    };

    inputText(text: any){
        if(!!text){
            let userItemThis = this.state.userItem;
            let item = {
                text: text,
                id: this.state.activeMan.id,
                time: new Date()
            };
            userItemThis.push(item);
            this.setState({userItem: userItemThis});
            ComponentService.saveUser(userItemThis);
        }
    };

    inputSearch(text: string){
        let peopleRes = ComponentService.getMan();
        this.setState({peopleRes: peopleRes});
        let findPeople: any[] | never[] = [];
        peopleRes.map((man: { name: string | any[]; }) => {
            if (man.name.includes(text)){
                // @ts-ignore
                findPeople.push(man)
            }
        });
        this.setState({findPeople: findPeople});
    };

    public render() {
        localStorage.clear();
        let userItemThis = this.state.userItem;
        if (userItemThis.length == 0) {
            let faker = require('faker');
            let user = {
                name: faker.name.findName(),
                image: faker.image.avatar(),
                id: 100
            };
            userItemThis.push(user);
            this.setState({userItem: userItemThis});
            ComponentService.saveUser(userItemThis);
        }

        let activeMan = this.state.activeMan;
        return (
            <div className='App'>
                <div className='left_block'>
                    <Header
                        srcImg={userItemThis[0].image}
                        valueSpan={userItemThis[0].name}
                    />
                    <Search
                        className = {'div_search_chat'}
                        type = {"text"}
                        id = {'inputPeople'}
                        placeholder = {'Поиск чата'}
                        inputText = {this.inputSearch.bind(this)}
                    />
                    <People activeManState = {this.activeManState.bind(this)} findPeople = {this.state.findPeople}/>
                </div>
                <div className = 'right_block'>
                    {!this.state.activeMan && <div className = 'right_block_image'/>}
                    {!!this.state.activeMan && <Header srcImg = {activeMan.image} valueSpan = {activeMan.name}/>}
                    {!!this.state.activeMan && <Chat activeMan = {activeMan} userItemThis = {userItemThis}/>}
                    {!!this.state.activeMan && <Search
                        className = {'div_search_text'}
                        type = {"text"}
                        id = {'inputChat'}
                        placeholder = {'Введите сообщение'}
                        inputText = {this.inputText.bind(this)}
                    />}
                </div>
            </div>
        );
    }
}

export default App;
