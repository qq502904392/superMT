import Mock from 'mockjs'
import grid from './grid.json'
Mock.mock('/mock/grid', {
  data: grid
})