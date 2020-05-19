import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

import PropTypes from 'prop-types';

import AuthorRow from './AuthorRow';

export default class Card extends React.Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func
  }

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {}
  }

  state = {
    loading: true
  }

  handleLoad = () => {
    this.setState({ loading: false })
  }

  render() {

    const { fullname, image, linkText, onPressLinkText } = this.props;
    const { loading } = this.state;

    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View>
          {loading && (
            <ActivityIndicator
              style={styles.absoluteFill}
              size={'large'}
            />
          )}
          <Image 
            source={image} 
            style={styles.image} 
            onLoad={this.handleLoad}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image : {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)'
  },
  absoluteFill : {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    color: 'black'
  }
});