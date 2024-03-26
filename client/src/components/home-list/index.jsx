import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Rate, Skeleton } from 'antd';
import { useNavigate } from "react-router-dom";

import { HomeListWrapper } from './style'
import ImgAndEmpty from '../cpn-img';
import { fetchHomeListData } from '../../store/modules/home'
import Star from '../cpn-star';


const HomeList = memo((props) => {
  const [loading, setLoading] = useState(true);

  const dispatch=useDispatch();
  const { roomList } = useSelector(state => ({
    roomList:state?.home.roomList,
  }))

  useEffect(() => {
    dispatch(fetchHomeListData()).then(()=>{
      setLoading(false);
    })
  },[dispatch])
  
  console.log(roomList)

  const navigate = useNavigate();
  const handleGoToDetail = (item) =>{
    navigate(`/detail/${item._id}`)
  }
  
  return (
    <Skeleton active loading={loading}>
      <HomeListWrapper>
        {
          roomList.map((item,index) => {
            const { address:{country}, name, number_of_reviews, price, property_type, images:{picture_url} } = item
            return(
              <div className='item' key={index} onClick={()=>handleGoToDetail(item)}>
                <ImgAndEmpty picture_url={picture_url} padTop="66.66%"/>
                <div className="info">
                  <div className='desc'>
                    <p className='grey'>{property_type}</p>
                    <h3 className='name'>{name}</h3>
                    <p className='country'>{country}</p>
                    <p className='grey'>浏览次数：{number_of_reviews}</p>
                    <h4 className='price'><strong>${price} USD</strong> /晚</h4>
                  </div>
                  <div className='rating'>
                    <Star 
                      scores={item?.review_scores?.review_scores_rating} 
                      align="flex-end"
                      iconSize="10px"
                      textSize="12"
                      pMarBotm="2"
                    />
                  </div>
                </div>
              </div>
            )
          })
        }
      </HomeListWrapper>
    </Skeleton>
  )
})

HomeList.propTypes = {}

export default HomeList


