import { FunctionalComponent, h } from 'preact';
import { Props } from '.';

const SearchIcon: FunctionalComponent<Props> = (props: Props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="search_24px">
      <path
        id="icon/action/search_24px"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.965 14.2549H15.755L20.745 19.2549L19.255 20.7449L14.255 15.7549V14.9649L13.985 14.6849C12.845 15.6649 11.365 16.2549 9.755 16.2549C6.165 16.2549 3.255 13.3449 3.255 9.75488C3.255 6.16488 6.165 3.25488 9.755 3.25488C13.345 3.25488 16.255 6.16488 16.255 9.75488C16.255 11.3649 15.665 12.8449 14.685 13.9849L14.965 14.2549ZM5.255 9.75488C5.255 12.2449 7.26501 14.2549 9.755 14.2549C12.245 14.2549 14.255 12.2449 14.255 9.75488C14.255 7.26488 12.245 5.25488 9.755 5.25488C7.26501 5.25488 5.255 7.26488 5.255 9.75488Z"
        fill="black"
        fill-opacity="0.54"
      />
    </g>
  </svg>
);

export default SearchIcon;
