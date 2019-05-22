import React from 'react';


interface Props {
  width?: string
  height?: string
  fill?: string
}
export const Check: React.FC<Props> = ({ width = '100px', fill = '#000' }) => (
  <svg viewBox="0 0 18 18" x="0px" y="0px" width={width}>
    <g>
      <path fill={fill} d="m5.056 15.04c.629.622 1.658.567 2.217-.119l10.17-12.476c.523-.642.427-1.587-.215-2.11-.642-.523-1.587-.427-2.11.215l-9.111 11.208-3.453-3.41c-.589-.583-1.539-.577-2.121.012-.583.589-.577 1.539.012 2.121l4.611 4.56" />
    </g>
  </svg>
)
