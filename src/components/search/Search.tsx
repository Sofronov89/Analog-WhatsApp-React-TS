import * as React from "react";
import "./search.css";
import {ISearchProps} from "./ISearchProps";


export class Search extends React.Component<ISearchProps> {
    private input: any;
    saveText() {
        let text = this.input.value;
        this.props.inputText(text);
        this.input.value = '';
    };

    handleChange(event: { keyCode: number; }) {
        if (event.keyCode === 13) {
            this.saveText()
        }
    };

    public render() {
        const {className, placeholder, id, type} = this.props;
        return (
            <div className={className}>
                <input type={type} id={id} placeholder={placeholder} onKeyUp = {this.handleChange.bind(this)} ref= {el=>this.input= el}/>
            </div>
        );
    }
}
