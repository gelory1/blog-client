import blog from '../../api/blog'

export default {
  data () {
    return {
      title:'',
      description:'',
      content: '',
      atIndex: false,
      blogId: ''
    }
  },
  created(){
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId:this.blogId}).then(res =>{
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
    })
  },
  methods: {
    onUpdateBlog(){
      blog.UpdateBlog({blogId:this.blogId},
        {title:this.title,description:this.description,content:this.content,atIndex:this.atIndex})
        .then((res)=>{
        this.$message.success('修改成功！')
        return res
      }).then((res)=>{
        this.$router.push(`/detail/${res.data.id}`)
      })
    }
  }
}
