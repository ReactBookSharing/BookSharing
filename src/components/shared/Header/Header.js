import React, { Component } from 'react'
import Input from '../inputs/Input/Input'

export default class Header extends Component {
    render() {
        return (
            <div className="row Header">
                <div className="col-12 d-flex justify-content-between">
                    <Input/>
                </div>
            </div>
        )
    }
}
