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

    blog.getBlogs({page :this.page,atIndex: true}).then((res)=>{
      this.blogs = res.data
      this.total = res.total
    }).then(()=>{
      let lis = document.querySelectorAll('.el-pagination ul li')
      for(let i=0;i<lis.length;i++){
        lis[i].classList.remove('active')
      }
      let index = this.page-1
      lis[index].classList.add('active')
    })
  },
  methods: {
    onCurrentChange(newPage){
      blog.getBlogs({page :newPage,atIndex: true}).then((res)=>{
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = newPage
        scrollTo(0,0);
        this.$router.push({path: '/', query:{page:newPage}})
      }).then(()=>{
        let lis = document.querySelectorAll('.el-pagination ul li')
        for(let i=0;i<lis.length;i++){
          lis[i].classList.remove('active')
        }
        let index = this.page-1
        lis[index].classList.add('active')
      })
    }
  }
}
