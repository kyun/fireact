import React, { Component } from 'react';

import Auth from 'containers/auth';

class Authentication extends Component {


  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', background: '#f3f5f7', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* <HeaderContainer /> */}
        <Auth />
        {/* <BottomNavigation /> */}
      </div>
    );
  }
};

export default Authentication;