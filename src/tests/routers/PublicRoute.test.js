import React from 'react';
import { shallow } from 'enzyme';
import { PublicRoute, mapStateToProps } from '../../routers/PublicRoute';

test('should render PublicRoute correctly for unauthorised user', () => {
    const props = {
        component: () => {},
        isAuthenticated: false
    }
    const wrapper = shallow(<PublicRoute {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.prop('component')().type.name).toBe('component');
});

test('should render PublicRoute correctly for authorised user', () => {
    const props = {
        component: () => {},
        isAuthenticated: true
    }
    const wrapper = shallow(<PublicRoute {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.prop('component')().type.name).toBe('Redirect');
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
