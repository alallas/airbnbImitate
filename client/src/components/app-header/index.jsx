import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import { 
  SendOutlined,
  SearchOutlined,
  GlobalOutlined,
  MenuOutlined,
  UserOutlined } from '@ant-design/icons'
  
import "../../assets/css/index.less"

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <div className='left'>
        <a href='/home' className='company-link'>
          <SendOutlined 
            className='company-icon'
            rotate={-90}
            style={{ fontSize: '35px' }}
          />
          <span className='company-name'>XXXX</span>
        </a>
      </div>
      
      <div className='center'>
        <div className='center-search'>
          <SearchOutlined 
            className='search-btn'
            style={{ fontSize: '24px',color:"white" }}
          />
        </div>
      </div>

      <div className='right'>
        <span className='slogan'>来爱彼迎发布房源</span>
        <GlobalOutlined 
          style={{fontSize:"18px"}}
          className='global-icon'
        />
        <div className='user-info'>
          <MenuOutlined 
            style={{fontSize:"15px"}}
            className='menu-icon'
          />
          <div className='user-icon-bg'>
            <UserOutlined 
              style={{fontSize:"25px",color:"white"}}
              className='user-icon'
            />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
})

export default Header