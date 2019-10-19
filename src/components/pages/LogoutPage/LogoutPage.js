import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logout, clearData } from '../../../actions/auth.actions';
class LogoutPage extends Component {

    componentDidMount() {
        this.props.logout();
        this.props.clearData();
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect(null, { clearData, logout })(LogoutPage);