import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Rate } from 'antd'

import { StarWrapper } from './style'

const Star = memo((props) => {
  const { scores, align, iconSize, textSize, pMarBotm } = props
  return (
    <StarWrapper align={align} textSize={Number(textSize)} pMarBotm={Number(pMarBotm)}>
      {
        scores
        ? <div className='score'>
            <p className='text'>{(Number(scores)*0.05).toFixed(2)}</p>
            <Rate 
              disabled 
              allowHalf 
              defaultValue={Number(scores)*0.05}
              style={{fontSize:iconSize, color:"#00848A"}}
              className='star'
            />
          </div> 
        : <div className='no-score'>暂无评分</div>
      }
    </StarWrapper>
  )
})

Star.propTypes = {
  iconSize: PropTypes.string,
}

export default Star