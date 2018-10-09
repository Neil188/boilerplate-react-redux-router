import React from 'react';
import { shallow } from 'enzyme';
import { PrivateRoute, mapStateToProps } from '../../routers/PrivateRoute';

test('should render PrivateRoute for unauthorised user', () => {
    const props = {
        component: () => {},
        isAuthenticated: false
    }
    const wrapper = shallow(<PrivateRoute {...props} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.prop('component')().type.name).toBe('Redirect');
});

test('should render PrivateRoute for authorised user', () => {
    const props = {
        component: () => {},
        isAuthenticated: true
    }
    const wrapper = shallow(<PrivateRoute {...props} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.prop('component')().type).toBe('div');

});

test('State mapped to props', () => {
    const state = {
        auth: {
            uid: 1,
        }
    };
    const expected = {
        isAuthenticated: true
    }
    const props = mapStateToProps(state);
    expect(props).toEqual(expected);
});
