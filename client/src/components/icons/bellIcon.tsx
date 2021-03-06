import { FunctionalComponent, h } from 'preact';
import { Props } from '.';

const BellIcon: FunctionalComponent<Props> = (props: Props) => (
  <svg
    {...props}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.5 19.6875V13.4375C22.5 9.6 20.4625 6.3875 16.875 5.5375V4.6875C16.875 3.65 16.0375 2.8125 15 2.8125C13.9625 2.8125 13.125 3.65 13.125 4.6875V5.5375C9.55 6.3875 7.5 9.5875 7.5 13.4375V19.6875L5 22.1875V23.4375H25V22.1875L22.5 19.6875ZM15 27.1875C16.375 27.1875 17.5 26.0625 17.5 24.6875H12.5C12.5 26.0625 13.625 27.1875 15 27.1875ZM10 20.9375H20V13.4375C20 10.3375 18.1125 7.8125 15 7.8125C11.8875 7.8125 10 10.3375 10 13.4375V20.9375Z"
      fill="currentColor"
      fill-opacity="0.54"
    />
  </svg>
);

export default BellIcon;
