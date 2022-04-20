import Mock from 'mockjs'
import grid from './grid.json'
import floor from './floor.json'
import data from './data.json'
Mock.mock('/mock/grid', {
  data: grid
})
Mock.mock('/mock/floor', {
  data: floor
})
Mock.mock('/mock/goods', {
  data: data.goods
})
Mock.mock('/mock/ratings', {
  data: data.ratings
})
Mock.mock('/mock/info', {
  data: data.info
})