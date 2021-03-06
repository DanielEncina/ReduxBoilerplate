import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './../actions';

class Tabs extends Component {
  constructor(props) {
     super(props);
     this.state = {
       activeTab: 0
     };
  }

  // Pull children out of props passed from App component
  render({ children } = this.props) {
    console.log(this.props.activeTab);
    return (
      <View style={styles.container}>
        {/* Tabs row */}
        <View style={styles.tabsContainer}>
          {/* Pull props out of children, and pull title out of props */}
          {children.map(({ props: { title } }, index) => (
            <TouchableOpacity
              style={[
                // Default style for every tab
                styles.tabContainer,
                // Merge default style with styles.tabContainerActive for active tab
                index === this.props.activeTab ? styles.tabContainerActive : []
              ]}
              // Change active tab
              onPress={() => {
                console.log(index);
                this.props.seletedTab(index);
              }}
              // Required key prop for components generated returned by map iterator
              key={index}
            >
              <Text
                style={[
                  styles.tabTextDisable,
                  index === this.props.activeTab ? styles.tabTextActive : []
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Content */}
        <View style={styles.contentContainer}>{children[this.props.activeTab]}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Component container
  container: {
    flex: 1 // Take up all available space
  },
  // Tabs row container
  tabsContainer: {
    flexDirection: 'row', // Arrange tabs in a row
    paddingTop: 30 // Top padding
  },
  // Individual tab container
  tabContainer: {
    flex: 1, // Take up equal amount of space for each tab
    paddingVertical: 15, // Vertical padding
    borderBottomWidth: 3, // Add thick border at the bottom
    borderBottomColor: 'transparent' // Transparent border for inactive tabs
  },
  // Active tab container
  tabContainerActive: {
    borderBottomColor: '#FFFFFF' // White bottom border for active tabs
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tabTextDisable: {
    color: '#B3B3B3',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  // Content container
  contentContainer: {
    flex: 1 // Take up all available space
  }
});

const mapStateToProps = state => ({ activeTab: state.tabBar });

export default connect(mapStateToProps, actions)(Tabs);
