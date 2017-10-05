import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './empty-content.less';

const Content = ({ className, message, style }) => (
  <div
    className={cn(
      className,
      styles.content,
    )}
    style={style}
  >
    <h3>{message}</h3>
  </div>
);

Content.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Content.defaultProps = {
  className: '',
  style: {},
  message: 'Não encontrado!',
};

export default Content;
