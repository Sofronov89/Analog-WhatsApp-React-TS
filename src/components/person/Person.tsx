import * as React from "react";
import "./person.css";
import {IPersonProps} from "./IPersonProps";


export class Person extends React.Component<IPersonProps> {
    public render() {
        const {srcImg, valueSpan} = this.props;
        return (
            <div className='man_item'>
                <img src={srcImg} alt='img'/>
                <span>{valueSpan}</span>
            </div>
        );
    }
}
