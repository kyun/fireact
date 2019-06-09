import React from 'react';


interface Props {
  width?: string
  height?: string
  fill?: string
}
export const User: React.FC<Props> = ({ width = '100px', fill = '#000' }) => (
  <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" width={width}>
    <path fill={fill} d="M50,5A45,45,0,1,0,95,50,45,45,0,0,0,50,5Zm0,16A15.49533,15.49533,0,1,1,34.50464,36.49536,15.49535,15.49535,0,0,1,50,21Zm0,67A37.99476,37.99476,0,0,1,18.18994,70.76C20.48,63.38,23.37,56.49,30.28,52.2a6.30793,6.30793,0,0,1,7.17993.47A20.36457,20.36457,0,0,0,62.53,52.68,6.30684,6.30684,0,0,1,69.71,52.21c6.89,4.3,9.8,11.18,12.1001,18.55A37.99476,37.99476,0,0,1,50,88Z" />
  </svg>
)
