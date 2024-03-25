import React, { memo, useState } from 'react';
import { Empty } from 'antd';
import PropTypes from 'prop-types'

import { HomeListImgWrapper } from './style';

const HomeListImg = memo((props) => {
  const { picture_url } = props;
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  }

  return (
    <HomeListImgWrapper>
      {
        !imgError
        ? <img src={picture_url} alt="hotel's picture" onError={handleError}/>
        : <Empty 
            image={Empty.PRESENTED_IMAGE_SIMPLE} 
            className="empty"
            description={<p className='empty-text'>图片加载失败</p>}
          />
      }
    </HomeListImgWrapper>
  )
})

HomeListImg.propTypes = {
  picture_url: PropTypes.string
}

export default HomeListImg


