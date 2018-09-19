import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOutProcess }) => (
    <header className='header'>
        <div className='content-container'>
            <div className='header__content'>
                <NavLink
                    className='header__title'
                    to='/dashboard'
                    activeClassName='is-active'
                    exact
                >
                    <h1>Boilerplate</h1>
                </NavLink>
                <button
                    className='button button--link'
                    onClick={startLogOutProcess}
                >
                    Logout
                </button>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    startLogOutProcess: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    startLogOutProcess: () => dispatch(startLogOut()),
});

export default connect(undefined, mapDispatchToProps)(Header);
