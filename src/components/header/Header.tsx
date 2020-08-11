import * as React from "react";
import "./header.css";
import {Person} from "../person";


export class Header extends React.Component {
    public render() {
        const { srcImg, valueSpan } = this.props;
        return (
            <header>
                <Person
                    srcImg = {srcImg}
                    valueSpan = {valueSpan}
                />
            </header>
        );
    }
}
