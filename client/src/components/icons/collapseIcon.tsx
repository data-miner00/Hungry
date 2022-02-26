import { FunctionalComponent, h } from 'preact';
import { Props } from '.';

const CollapseIcon: FunctionalComponent<Props> = (props: Props) => (
  <svg
    {...props}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.6699 1.7698L15.8999 -0.00019455L5.99992 9.89981L15.8999 19.7998L17.6699 18.0298L9.53992 9.89981L17.6699 1.7698H17.6699Z"
      fill="white"
    />
    <path
      d="M11.6699 1.7698L9.89992 -0.00019455L-7.82013e-05 9.89981L9.89992 19.7998L11.6699 18.0298L3.53992 9.89981L11.6699 1.7698H11.6699Z"
      fill="white"
    />
  </svg>
);

export default CollapseIcon;
