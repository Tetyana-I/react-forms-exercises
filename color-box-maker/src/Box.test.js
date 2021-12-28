import { render } from '@testing-library/react';
import Box from './Box';

// smoke test
test('renders without crashing', () => {
  render(<Box />);
});


// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Box color='red' height={100} width={100}/>);
  expect(asFragment()).toMatchSnapshot();
});


