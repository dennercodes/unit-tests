import { Button } from '../components/Button/Button';
import { ToggleButton } from '../components/ToggleButton/ToggleButton';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p data-testid="paragraph">paragraph</p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Button>Click me</Button>
      <ToggleButton>Toggle me</ToggleButton>
    </div>
  );
};
