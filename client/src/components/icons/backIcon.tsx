import { FunctionalComponent, h } from 'preact';
import { Props } from '.';

const BackIcon: FunctionalComponent<Props> = (props: Props) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28 12.25H6.7025L16.485 2.4675L14 0L0 14L14 28L16.4675 25.5325L6.7025 15.75H28V12.25Z"
      fill="currentColor"
    />
  </svg>
);

export default BackIcon;
