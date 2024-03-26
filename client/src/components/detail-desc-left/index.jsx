import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailDescLeftWrapper } from './style'
import { Rate } from 'antd'
import Star from '../cpn-star'

const DetailDescLeft = memo((props) => {
  console.log(props)
  const { summary, accommodates, bedrooms, beds, bathrooms, review_scores, reviews } = props;
  return (
    <DetailDescLeftWrapper>
      <div>
        <h2 className='summary'>{summary}</h2>
        <ul className='infrastructure'>
          <li>{accommodates}位房客 ·</li>
          <li>{bedrooms}间卧室 ·</li>
          <li>{beds}张床 ·</li>
          <li>{bathrooms}个卫生间</li>
        </ul>
      </div>
      <div className='assess'>
        <div className='rating'>
          <Star
            scores={review_scores?.review_scores_rating} 
            align="center"
            iconSize="12px"
            textSize="16"
            pMarBotm="3"
          />
        </div>
        <div className='review'>
          <p className='number'>{reviews?.length}</p>
          <p className='text'>条评价</p>
        </div>
      </div>

      
    </DetailDescLeftWrapper>
  )
})

DetailDescLeft.propTypes = {
  summary: PropTypes.string
}

export default DetailDescLeft