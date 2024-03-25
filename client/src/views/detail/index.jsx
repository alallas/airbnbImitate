import React, { memo } from 'react'
import { useSelector } from 'react-redux';


const Detail = memo((props) => {

  const item = useSelector((state) => state.detail.item)

  console.log("这里是detail页面",item)

  return (
    <div>Detail</div>
  )
})

export default Detail