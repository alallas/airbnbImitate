
import request from "../request"

const getDetailData = (id) => {
  return request.get({
    url: `/detail/${id}`
  })
}

export default getDetailData;

