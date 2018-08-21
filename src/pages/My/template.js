import blog from '../../api/blog'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      blogs:[],
      page:1,
      total:0
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogs({page:this.page,userId:this.user.id})
      .then((res)=>{
        this.blogs = res.data
        this.page = res.page
        this.total = res.total
      })
  },
  computed:{
    ...mapGetters(['user'])
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
        this.$router.push({path: `/my`, query:{page:newPage}})
      })
    },
    onDeleteBlog(blogId){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        blog.deleteBlog({blogId}).then(()=>{
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.blogs = this.blogs.filter( blog => blog.id !== blogId)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
