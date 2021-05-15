import React from 'react'

export default function Inputfield(props) {
    return (
        <div>
            <label  className=" control-label">{props.label}</label><br/>
			<input type={props.input_type} className="form-control inputbox"  placeholder={props.placeholder}></input>
        </div>
    )
}
