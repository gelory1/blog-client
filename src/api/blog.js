import request from '../helpers/request'

const URL = {
  Get_list: '/blog',
  Get_detail: '/blog/:blogId',
  Create: '/blog',
  Update: '/blog/:blogId',
  Delete: '/blog/:blogId'
}

export default {
  getBlogs({page = 1, userId, atIndex} = {page: 1}){
    return request(URL.Get_list,'GET',{page, userId, atIndex})
  },
  getDetail({blogId}){
    return request(URL.Get_detail.replace(':blogId',blogId))
  },
  createBlog({title = '',content = '',description = '',atIndex = false} = {title:'',content:'',description:'',atIndex:false}){
    return request(URL.Create,'POST',{title,content,description,atIndex})
  },
  UpdateBlog({blogId},{title,content,description,atIndex}){
    return request(URL.Update.replace(':blogId',blogId),'PATCH',{title,content,description,atIndex})
  },
  deleteBlog({blogId}){
    return request(URL.Delete.replace(':blogId',blogId),'DELETE')
  },
}
