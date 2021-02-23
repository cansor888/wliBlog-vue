const data =[
  {
      name:'功能菜单',
      icon:'el-icon-s-home',
      children:[
        {
          name:'用户管理',
          icon:'el-icon-caret-right',
          route:'/user',
          type:'0'
        },
        {
          name:'栏目管理',
          icon:'el-icon-caret-right',
          route:'/channel',
          type:'0'
        },
        {
          name:'标签管理',
          icon:'el-icon-caret-right',
          route:'/tag',
          type:'0',
        },
        {
          name:'文章管理',
          icon:'el-icon-caret-right',
          route:'/article',
          type:'0,1',
        },
        {
          name:'评论管理',
          icon:'el-icon-caret-right',
          route:'/comment',
          type:'0,1',
        },
        {
          name:'友情链接',
          icon:'el-icon-caret-right',
          route:'/friend',
          type:'0',
        }
      ]
  }

]

export default data