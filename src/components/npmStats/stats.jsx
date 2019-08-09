import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class npmStats extends React.Component {
  static propTypes = {
    package: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      package: this.props.package,
      downloads: "Loading stats..."
    };

    const statsUrl = `https://api.npmjs.org/downloads/point/last-month/${
      this.state.package
    }`;
    axios.get(statsUrl).then(response => {
      this.setState({
        downloads: response["data"]["downloads"]
      });
      this.forceUpdate();
    });
  }
  render() {
    return <p>{`Downloads last month: ${this.state.downloads}`}</p>;
  }
}

export default npmStats;
