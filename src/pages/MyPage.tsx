import React from 'react';
import Pane from 'components/common/Pane';
import ListView from 'components/mypage/ListView/ListView';

const MyPage: React.FC = () => {

  return (
    <Pane className="lg">
      <ListView />
    </Pane>
  )
}

export default MyPage;