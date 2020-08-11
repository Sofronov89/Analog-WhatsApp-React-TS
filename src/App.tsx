import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Search} from "./components/search";
import {People} from "./components/people";
import {Chat} from "./components/chat";
import ComponentService from './component-service';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMan: '',
            UserItem: ComponentService.getUser(),
            findPeople: []
        };
        if(!this.state.UserItem){
            this.state.UserItem = []
        }
    };

    activeManState(man){
        this.setState({activeMan: man});
    };

    inputText(text){
        if(!!text){
            let UserItemThis = this.state.UserItem;
            let item = {
                text: text,
                id: this.state.activeMan.id,
                time: new Date()
            };
            UserItemThis.push(item);
            this.setState({UserItem: UserItemThis});
            ComponentService.saveUser(UserItemThis);
        }
    };

    inputSearch(text){
        let peopleRes = ComponentService.getMan();
        this.setState({peopleRes: peopleRes});
        let findPeople = [];
        peopleRes.map(man => {
            if (man.name.includes(text)){
                findPeople.push(man)
            }
        });
        this.setState({findPeople: findPeople});
    };

    public render() {
        // localStorage.clear();
        let UserItemThis = this.state.UserItem;
        if (UserItemThis.length == 0) {
            let faker = require('faker');
            let user = {
                name: faker.name.findName(),
                image: faker.image.avatar(),
                id: 100
            };
            UserItemThis.push(user);
            this.setState({UserItem: UserItemThis});
            ComponentService.saveUser(UserItemThis);
        }

        let activeMan = this.state.activeMan;
        return (
            <div className='App'>
                <div className='left_block'>
                    <Header
                        srcImg={UserItemThis[0].image}
                        valueSpan={UserItemThis[0].name}
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
                    {!!this.state.activeMan && <Chat activeMan = {activeMan} UserItemThis = {UserItemThis}/>}
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
