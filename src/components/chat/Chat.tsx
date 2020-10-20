import * as React from "react";
import "./chat.css";
import {IChatProps} from "./IChatProps";


export class Chat extends React.Component<IChatProps> {
    public render() {
        let userItemThis = this.props.userItemThis;
        let activeMan = this.props.activeMan;
        let activeManMass = [];
        activeManMass.push(activeMan);
        if(!activeManMass[1]){
            let item2 = {
                text: 'text',
                id: userItemThis[0].id,
                time: new Date()
            };
            activeManMass.push(item2);
        }
        let arrChat: any[] = [];
        if(!!activeMan && !!userItemThis) {
            activeManMass.map(item => {
                if (userItemThis[0].id == item.id) {
                    arrChat.push(item);
                }
            });
            userItemThis.map((item: { id: any; }) => {
                if (activeMan.id == item.id) {
                    arrChat.push(item);
                }
            });
            while(arrChat.length > 20){
                arrChat.shift()
            }
        }

        return (
            <div className = 'div_chat'>
                {arrChat.map((item, index) => (
                    <div key={index} className = 'chat_item'>
                        {userItemThis[0].id == item.id && <div className='left_text'>
                            <span>{item.text}</span>
                        </div>}
                        {userItemThis[0].id != item.id && <div className='right_text'>
                            <span>{item.text}</span>
                        </div>}
                    </div>
                ))}
            </div>
        );
    }
}
