import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';


test('renders without crashing', () => {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds and removes todo", function () {
  const { queryByText } = render(<TodoList />);
  // no todos are rendered yet
  const btn = queryByText("Add to a list");
  expect(queryByText("X")).not.toBeInTheDocument();
  // after clicking "add to a list" button, one todo is rendered
  fireEvent.click(btn);
  expect(queryByText("X")).toBeInTheDocument();
  // after clicking "X" button, no todos left
  fireEvent.click(queryByText("X"));
  expect(queryByText("X")).not.toBeInTheDocument();
})