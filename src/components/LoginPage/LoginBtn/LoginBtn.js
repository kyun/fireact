import React from 'react';

import styles from './LoginBtn.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);


const LoginBtn = (props) => (
  <button className={cx('LoginBtn')} style={props.style} {...props}>
    <img alt="icon" src={props.img} />
    {props.title}
  </button>
);


export default LoginBtn;