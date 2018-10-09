import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../../routers/AppRouter';

test('should render AppRouter correctly', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
});
