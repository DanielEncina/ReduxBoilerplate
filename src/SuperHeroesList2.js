import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from './actions';

class SuperHeroesList2 extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  getTvShows() {
    const { dataTvMaze } = this.props;
    return dataTvMaze.data.map((tv, key) => <Text key={key}>{tv.show.name}</Text>);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        {this.props.dataTvMaze.isFetching && <Text>Loading</Text>}
        {this.props.dataTvMaze.data.length ? this.getTvShows() : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({ dataTvMaze: state.data });

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperHeroesList2);
