import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logout, clearData } from '../../../actions/auth.actions';
class LogoutPage extends Component {

    componentDidMount() {
        this.props.logout();
        this.props.clearData();
        this.props.history.push('/');
    }

    componentWillUnmount() {
        const token = localStorage.getItem('token');
        const lang = localStorage.getItem('lang');
        localStorage.clear();
        localStorage.setItem('token', token);
        localStorage.setItem('lang', lang);
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect(null, { clearData, logout })(LogoutPage);