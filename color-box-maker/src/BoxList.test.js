import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';


test('renders without crashing', () => {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds  and removes a box", function () {
  const { queryByText } = render(<BoxList />);
  // no boxes are rendered yet
  const btn = queryByText("Add a new box");
  expect(queryByText("X")).not.toBeInTheDocument();
  // after clicking "add new box" button, one box is rendered
  fireEvent.click(btn);
  expect(queryByText("X")).toBeInTheDocument();
  // after clicking "remove box" button, no boxes left
  fireEvent.click(queryByText("X"));
  expect(queryByText("X")).not.toBeInTheDocument();
})

