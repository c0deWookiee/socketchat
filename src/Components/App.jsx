import React from 'react';
import PAGES from "./methods/endpoint.js";
import history from "./methods/history.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: props.pathname
    }
  }


  componentDidMount() {
    history.onChange( (pathname) => {
      this.setState( (prevState) => {
        let newPath = prevState.pathname;
        return {pathname: newPath};
      });
    });
  }
    render() {
      const HANDLER = PAGES[this.props.pathname];
  return (
    <HANDLER />
  )
    }
}

// App.propTypes = {
//   pathname: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
// };