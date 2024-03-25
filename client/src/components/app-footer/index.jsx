import React, { memo } from 'react'
import { FooterWrapper } from './style'
import { footerList } from '../../assets/constant/footerSource'

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className='main'>
        {
          footerList.map((item,index)=>(
            <div key={index} className='column'>
              <p className='column-title'>{item.title}</p>
              <ul>
                {
                  item.content.map((item,index)=>(
                    <li key={index} className='column-list'>
                      <a href={item.path} className='column-link'>{item.name}</a>  
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      <div className='copyright'>
        <p>&copy; 2024 Airbnb, Inc</p>
        <p>条款 · 网站地图 · 隐私 · 您的隐私设置</p>
      </div>
    </FooterWrapper>
  )
})

export default Footer