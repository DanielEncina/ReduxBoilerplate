import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class SuperHeroesList extends Component {
  getSuperHeroes() {
    const { superHeroes } = this.props;
    return (superHeroes.map((heroes, key) => (
      <Text key={key}>{heroes.superhero}</Text>
    )));
  }

  render() {
    console.log(this.props);
    return (<View>{this.getSuperHeroes()}</View>);
  }
}

const mapStateToProps = state => ({ superHeroes: state.superHeroes });

export default connect(mapStateToProps)(SuperHeroesList);
