import request from "./request";

// 美图 - 推荐
export function gitHomeImg () {
  return request({
    method: 'post',
    url:'/getImages',
  })
}
// 网易 - 新闻
export function getHomeNews () {
  return request({
    method: 'post',
    url:'/getWangYiNews',
  })
}
