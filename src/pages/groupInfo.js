import React, { Component } from 'react';
import { fetchGroupInfo } from '../api';
import Info from '../components/info';

export default class GroupInfo extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    fetchGroupInfo(this.props.match.params.urlname).then(({ data }) => {
      this.setState({
        data
      });
    });
  }
  render() {
    return (
      <div>
        <Info data={this.state.data} />
      </div>
    );
  }
}
