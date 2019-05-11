import React from 'react';
import './IconBtn.scss';

import ARROW_LEFT from 'assets/svg/icon_arrow_left.svg';

interface Props {
  icon?: string
  style?: object
  name?: string
  className?: string
  onClick?: VoidFunction
}
const IconBtn: React.FC<Props> = (props) => {

  return (
    <button className={`IconBtn ${props.className}`} style={props.style} onClick={props.onClick}>
      {
        props.name ? props.name : <img src={props.icon || ARROW_LEFT} />
      }
    </button>
  )
}

export default IconBtn;