import React from 'react';
import { SafeAreaView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

export default function Comments({
  style,
  comments,
  onClose,
  onSubmitComment,
}) {
  return (
    <SafeAreaView style={ style }>
      <NavigationBar
        title='Comentário'
        leftText='Fechar'
        onPressLeftText={ onClose }
      />
      <CommentInput
        placeholder='Deixe um comentário'
        onSubmit={ onSubmitComment }
      />
      <CommentList items={ comments } />
    </SafeAreaView>
  );
}

Comments.propTypes = {
  style: ViewPropTypes.style,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  style: null,
};