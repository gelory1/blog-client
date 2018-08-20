function friendlyDate(dateStr) {
  let dataObj = typeof (dateStr) === 'object' ? dataStr: new Date(dateStr)
  let time = dataObj.getTime()
  let now = Date.now()
  let space = now - time
  let str = ''
  if(space < 60000){
    str = '刚刚'
  }
  else if(space < 60000 * 60){
    str =Math.floor(space/60000) + '分钟前'
  }
  else if(space < 60000 * 60 * 24){
    str =Math.floor(space/(60000 * 60)) + '小时前'
  }
  else {
    str =Math.floor(space/(60000 * 60 * 24)) + '天前'
  }
  return str
}
export default {
  install(Vue,options){
    Vue.prototype.friendlyDate = friendlyDate
  }
}
