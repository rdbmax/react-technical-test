import React from 'react';
import App from '../Components/App';
import renderer from 'react-test-renderer';

const messages = [
    {
        message: "This is a public message message.",
        isPrivate: false
    },
    {
        message: "This is a private message you can access",
        isPrivate: true,
        key: 1234
    },
    {
        message: "This is a private message you can't access",
        isPrivate: true,
        key: 4321
    }
]

it('renders correctly', () => {
  const tree = renderer
    .create(<App userId="5555" msgs={messages} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});