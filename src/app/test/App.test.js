import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import App from '../Components/App';
import Display from '../Components/Display';
import Input from '../Components/Input';

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

const newMessage = {
    message: 'This is a new message'
}


describe('<App />', () => {
    const component = shallow(<App userId={1234} initialMsgs={messages} />);

    it('this.state.msgs should be equal to props.initialMsgs', () => {
        expect(component.instance().state.msgs).toEqual(messages);
    }); 

    it('AddMsg() should add a new message in this.state.msgs', () => {
        component.instance().addMsg(newMessage);
        expect(component.instance().state.msgs).toEqual(messages.concat(newMessage));
    });

});

it('renders correctly', () => {
  const tree = renderer
    .create(<App userId={1234} initialMsgs={messages} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
