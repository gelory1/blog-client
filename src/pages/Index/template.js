import blog from '../../api/blog'


export default {
  data () {
    return {
      blogs: [],
      total: 0,
      page: 1
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    this.onCurrentChange(this.page)
    blog.getBlogs({page :this.page,atIndex: true}).then((res)=>{
      this.blogs = res.data
      this.total = res.total
    })
  },
  methods: {
    onCurrentChange(newPage){
      blog.getBlogs({page :newPage,atIndex: true}).then((res)=>{
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        console.log(typeof this.page)
        scrollTo(0,0);
        this.$router.push({path: '/', query:{page:newPage}})
      })
    }
  }
}
