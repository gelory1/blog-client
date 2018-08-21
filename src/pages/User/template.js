import blog from '../../api/blog'

export default {
  data () {
    return {
      blogs:[],
      user:{},
      page:1,
      total:0
    }
  },
  created(){
    let userId = this.$route.params.userId
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogs({page:this.page,userId:userId})
      .then((res)=>{
          this.blogs = res.data
          this.page = res.page
          this.total = res.total
          if(res.data.length > 0){
            this.user = res.data[0].user
          }
      })
  },
  methods:{
    splitDate(dateStr){
      let dateObj = typeof dateStr === 'object' ? dateStr:new Date(dateStr)
        return {
          day : dateObj.getDate(),
          month : dateObj.getMonth(),
          year : dateObj.getFullYear()
        }
      },
    onCurrentChange(newPage){
      let userId = this.user.id
      blog.getBlogs({page :newPage,userId:userId}).then((res)=>{
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        scrollTo(0,0);
        this.$router.push({path: `/user/${userId}`, query:{page:newPage}})
      })
    }
  }
}
