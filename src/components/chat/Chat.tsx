import * as React from "react";
import "./chat.css";


export class Chat extends React.Component {
    public render() {
        let UserItemThis = this.props.UserItemThis;
        let activeMan = this.props.activeMan;
        let activeManMass = [];
        activeManMass.push(activeMan);
        if(!activeManMass[1]){
            let item2 = {
                text: 'text',
                id: UserItemThis[0].id,
                time: new Date()
            };
            activeManMass.push(item2);
        };
        let arrChat = [];
        if(!!activeMan && !!UserItemThis) {
            activeManMass.map(item => {
                if (UserItemThis[0].id == item.id) {
                    arrChat.push(item)
                }
            });
            UserItemThis.map(item => {
                if (activeMan.id == item.id) {
                    arrChat.push(item)
                }
            });
            arrChat.sort(function (a, b) {
                if (a.time > b.time) {
                    return -1;
                };
                if (a.time < b.time) {
                    return 1;
                };
                return 0;
            })
        };

        return (
            <div className = 'div_chat'>
                {arrChat.map(item => (
                    <div className = 'chat_item'>
                        {UserItemThis[0].id == item.id && <div className='left_text'>
                            <span>{item.text}</span>
                        </div>}
                        {UserItemThis[0].id != item.id && <div className='right_text'>
                            <span>{item.text}</span>
                        </div>}
                    </div>
                ))}
            </div>
        );
    }
}
