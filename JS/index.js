// 界面跳转管理
$(function () {
  $('.container-left li').click(function () {
    // 获取当前点击菜单的标题内容
    var text = $(this).text().trim()
    // 设定样式变化之前 重置所有的样式
    $('.container-left li').css({
      backgroundColor: 'white',
      color: '#b5b5b5'
    })
    // this
    $(this).css({
      backgroundColor: '#f5f5f5',
      color: '#8d59fd'
    })
    // 设置header-title动态变化
    $('.header-title').text(text)
    // 通过标题内容 加载相应的界面
    if (text == '首页') {
      $('.content-main').load('./pages/home.html')
    } else if (text == '栏目管理') {
      $('.content-main').load('./pages/category.html')
    } else if (text == '文章管理') {
      $('.content-main').load('./pages/article.html')
    } else if (text == '用户管理') {
      $('.content-main').load('./pages/user.html')
    }else{
      return;
    }
  })

  // 首次加载默认选中第一页
  $('.container-left li:first').click()

  
})