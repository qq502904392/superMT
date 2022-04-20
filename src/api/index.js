import requests from "@/api/mock";
export const reqGridList = () => requests({
  url: "/grid"
})
export const reqFloorList = () => requests({
  url: '/floor'
})
export const reqShopGoods = () => requests({
  url: '/goods'
})
export const reqShopRatings = () => requests({
  url: '/ratings'
})
export const reqShopInfo = () => requests({
  url: '/info'
})
