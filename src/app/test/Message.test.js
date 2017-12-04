import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import Message from '../Components/Message';


Enzyme.configure({ adapter: new Adapter() });

describe('<Message />', () => {
    const privateMessage = shallow(<Message isPrivate={true} msg={{message: 'private'}} />);
    const publicMessage = shallow(<Message isPrivate={false} msg={{message: 'public'}} />);

    it('Messages should have an UI in relation with their status', () => {
        expect(privateMessage.find('.private').length).toEqual(1);
        expect(privateMessage.find('.fa-lock').length).toEqual(1);
        expect(publicMessage.find('.public').length).toEqual(1);
        expect(publicMessage.find('.fa-eye').length).toEqual(1);
    });
});
