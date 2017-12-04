import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';

import Input from '../Components/Input';

Enzyme.configure({ adapter: new Adapter() });

describe('<Input />', () => {

    const component = mount(<Input userId={1234} />);
    const componentShallow = shallow(<Input userId={1234} />);

    it('Input should have class user-error when the user tries to submit an empty message', () => {
        expect(component.find('.user-error').length).toEqual(0);
        component.find('button').first().simulate('click');
        expect(component.find('.user-error').length).toEqual(1);
    });

    it('createPrivateMsg should return a private message', () => {
        expect(componentShallow.instance().createPrivateMsg()).toEqual({message: '', messageKey: 1234})
    })

    it('createPublicMsg should return a public message', () => {
        expect(componentShallow.instance().createPublicMsg()).toEqual({message: ''})
    })

});
