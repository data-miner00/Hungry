import { FunctionalComponent, h } from 'preact';
import { Props } from '.';

const MailIcon: FunctionalComponent<Props> = (props: Props) => (
  <svg
    {...props}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM5 10L15 16.25L25 10V22.5H5V10ZM5 7.5L15 13.75L25 7.5H5Z"
      fill="black"
      fill-opacity="0.54"
    />
  </svg>
);

export default MailIcon;
