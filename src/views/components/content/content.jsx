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
  alignItems: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'inherit',
    'initial',
    'baseline',
    'stretch',
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  column: PropTypes.bool,
  flex: PropTypes.number,
  full: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'inherit',
    'initial',
    'space-around',
    'space-between',
  ]),
  loading: PropTypes.bool,
  style: PropTypes.object,
};

Content.defaultProps = {
  alignItems: 'initial',
  className: '',
  column: false,
  flex: null,
  full: false,
  justifyContent: 'initial',
  loading: false,
  marged: true,
  style: {},
};

export default Content;
