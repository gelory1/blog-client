import blog from '../../api/blog'
import marked from 'marked'

export default {
  data () {
    return {
      title:'',
      description:'',
      user:{},
      rawContent:'',
      createdAt:''
    }
  },
  created(){
    let id = this.$route.params.blogId
    blog.getDetail({blogId:id}).then((res)=>{
      this.title = res.data.title
      this.description = res.data.description
      this.user = res.data.user
      this.rawContent = res.data.content
      this.createdAt = res.data.createdAt
    })
  },
  computed:{
    markdown(){
      return marked(this.rawContent)
    }
  }
}
