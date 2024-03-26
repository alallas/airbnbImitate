import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailBannerWrapper } from './style'
import { HeartOutlined } from '@ant-design/icons';
import HomeListImg from '../cpn-img';

const DetailBanner = memo((props) => {
  const { name, images } = props
  return (
    <DetailBannerWrapper>
      <div className='title'>
        <h1 className='titleText'>{name}</h1>
        <div>
          <a className='collect'>
            <HeartOutlined style={{fontSize:18}}/>
            <span className='collectText'>收藏</span>
          </a>
        </div>
      </div>
      <div className='img'>
        <HomeListImg picture_url={images?.picture_url} padTop="300px"/>
      </div>
    </DetailBannerWrapper>
  )
})

DetailBanner.propTypes = {
  name: PropTypes.string,
  images: PropTypes.object,
}

export default DetailBanner