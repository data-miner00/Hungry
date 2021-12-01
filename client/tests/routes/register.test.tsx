import { h } from 'preact';
import Register from '../../src/routes/register';
import { shallow } from 'enzyme';

// TOFIX
describe('Register view component', () => {
  it('Should render text accordingly', () => {
    const wrapper = shallow(<Register />);

    expect(wrapper.find('p.text-center').text()).toBe(
      'Already have an account? Sign in'
    );
  });
});
