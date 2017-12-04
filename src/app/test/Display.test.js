import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import Display from '../Components/Display';
import Message from '../Components/Message';


Enzyme.configure({ adapter: new Adapter() });

const messages = [
    {
        message: "This is a public message message."
    },
    {
        message: "This is a private message you can access",
        messageKey: 1234
    },
    {
        message: "This is a private message you can't access",
        messageKey: 4321
    }
]

describe('<Display />', () => {
    const component = shallow(<Display userId={1234} msgs={messages} />);

    it('Private messages with a messageKey !== userId should not be rendered', () => {
        expect(component.instance().props.msgs).toHaveLength(3);
        expect(component.find(Message)).toHaveLength(2);
    });
});
