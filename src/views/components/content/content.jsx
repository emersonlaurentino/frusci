import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import cn from 'classnames';
import { BubbleLoader } from 'react-css-loaders';
import styles from './content.less';

const Content = ({
  alignItems,
  children,
  className,
  column,
  flex,
  full,
  justifyContent,
  loading,
  style,
}) => (
  <div
    className={cn(
      className,
      styles.content,
      !full ? styles.width : '',
      column && styles.column,
      loading && styles.loading,
    )}
    style={merge(style, { alignItems, justifyContent, flex })}
  >
    {loading ? (
      <BubbleLoader
        size={7}
        color="#666"
        duration={1}
      />
    ) : children}
  </div>
);

Content.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  column: PropTypes.bool,
  flex: PropTypes.number,
  full: PropTypes.bool,
  justifyContent: PropTypes.string,
  loading: PropTypes.bool,
  style: PropTypes.object,
};

Content.defaultProps = {
  alignItems: '',
  className: '',
  column: false,
  flex: null,
  full: false,
  justifyContent: '',
  loading: false,
  marged: true,
  style: {},
};

export default Content;
