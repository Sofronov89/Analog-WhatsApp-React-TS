import * as React from "react";
import "./person.css";


export class Person extends React.Component {
    public render() {
        const {srcImg, valueSpan} = this.props;
        return (
            <div className='man_item'>
                <img src={srcImg} alt='img'></img>
                <span>{valueSpan}</span>
            </div>
        );
    }
}
