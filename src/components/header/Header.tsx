import * as React from "react";
import "./header.css";
import {Person} from "../person";
import {IHeaderProps} from "./IHeaderProps";


export class Header extends React.Component<IHeaderProps> {
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
