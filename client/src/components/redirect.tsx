import { Component } from 'preact';
import { route } from 'preact-router';

type Props = {
    to: string;
};

class Redirect extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentWillMount() {
        route(this.props.to, true);
    }

    render() {
        return null;
    }
}

export default Redirect;
