import * as React from "react";
import "./people.css";
import {Button} from "../button";
import {Person} from "../person";
import ComponentService from '../../component-service';
import {IPeopleProps, MyState} from "./IPeopleProps";


export class People extends React.Component<IPeopleProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeMan: '',
            people: ComponentService.getMan(),
        };
        if(!this.state.people){
            this.state.people = []
        }
    };

    activePeopleItem(man: any){
        this.setState({activeMan: man});
        this.props.activeManState(man);
    };

    public render() {
        // localStorage.clear();
        let peopleAll = this.state.people;
        if(peopleAll.length < 15){
            let faker = require('faker');
            let man = {
                name: faker.name.findName(),
                image: faker.image.avatar(),
                id: 'man_'+peopleAll.length
            };
            peopleAll.push(man);
            this.setState({people: peopleAll});
            ComponentService.saveMan(peopleAll);
        }

        let people = this.state.people.reverse();
        if(this.props.findPeople.length >= 1){
            people = this.props.findPeople.reverse()
        }
        return (
            <div className = 'people'>
                {people.map((man: { image: any; name: any; }, index: string | number | undefined) => (
                    <Button key={index}
                        className = {'people_item'}
                        onClick = {this.activePeopleItem.bind(this, man)}
                        value = {!!man && <Person
                                srcImg = {man.image}
                                valueSpan = {man.name}
                            />
                        }
                     href = {'#'}/>
                ))}
            </div>
        );
    }
}