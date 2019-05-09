import React from 'react';
import Link from '../../common/Link';
import renderer from 'react-test-renderer';
describe('SLink test with Enzyme', function () {
  it('renders correctly', function () {
    var tree = renderer.create(React.createElement(Link, {
      page: "http://www.facebook.com"
    }, "Facebook")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders as an anchor when no page is set', function () {
    var tree = renderer.create(React.createElement(Link, null, "Facebook")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('properly escapes quotes', function () {
    var tree = renderer.create(React.createElement(Link, null, "\"Facebook\" \\'is \\ 'awesome'")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('changes the class when hovered', function () {
    var component = renderer.create(React.createElement(Link, {
      page: "http://www.facebook.com"
    }, "Facebook"));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // manually trigger the callback

    tree.props.onMouseEnter(); // re-rendering

    tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // manually trigger the callback

    tree.props.onMouseLeave(); // re-rendering

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});