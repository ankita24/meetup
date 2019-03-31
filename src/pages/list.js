import React, { Component } from 'react';
import { fetchList } from '../api';
import Card from '../components/card';

export default class list extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    fetchList()
      .then(response => {
        this.setState({
          list: response.data
        });
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 401) {
          this.props.history.push('/');
        }
      });
  }
  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
