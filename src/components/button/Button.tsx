import * as React from "react";
import {IButtonProps} from "./IButtonProps";

export class Button extends React.Component<IButtonProps> {
    public render() {
        const { className, value, onClick } = this.props;
        return (
            <button className={className} onClick={onClick}>{value}</button>
        );
    }
}
