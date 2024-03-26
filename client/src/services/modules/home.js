
import request from "../request"

const getHomeListData = () => {
  return request.get({
    url: "/home"
  })
}
export default getHomeListData;

