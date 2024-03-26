import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchDetailData } from '../../store/modules/detail';
import { DetailWrapper } from './style';
import DetailBanner from '../../components/detail-banner';
import DetailDescLeft from '../../components/detail-desc-left';
import DetailDescRight from '../../components/detail-desc-right';

const Detail = memo((props) => {

  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(fetchDetailData(id))
  },[dispatch,id])

  const item = useSelector((state) => state.detail.item)
  console.log("这里是detail页面",item)
  const { name, images, ...argues } = item;

  return (
    <DetailWrapper>
      <DetailBanner name={name} images={images}/>
      <div className='desc'>
        <DetailDescLeft {...argues}/>
        <DetailDescRight/>
      </div>
      
    </DetailWrapper>
  )
})

export default Detail