import blog from '../../api/blog'

export default {
  data () {
    return {
      value1: false,
      title:'',
      description:'',
      content:''
    }
  },
  methods:{
    onClickCreate(){
      blog.createBlog({
        title:this.title,description:this.description,content:this.content,atIndex:this.value1
      }).then((res)=>{
        this.$message.success('创建成功！')
        return res
      }).then((res)=>{
        this.$router.push(`/detail/${res.data.id}`)
      })
    }
  }
}
