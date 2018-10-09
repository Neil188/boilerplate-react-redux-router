import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage, mapDispatchToProps } from '../../components/LoginPage';

test('should render Login page correctly', () => {
    const wrapper = shallow(<LoginPage startLoginProcess={ () => {} } />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startlogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLoginProcess={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});


test('Dispatch mapped to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).startLoginProcess();
    expect(dispatch).toHaveBeenCalled();
});
