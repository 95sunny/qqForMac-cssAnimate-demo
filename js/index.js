$(function(){
    var index = 0, timer = null;
    shows(index);
    // GPS点击
    $('.gps li').on('click', function(){
        // 获取索引
        index = $(this).index();
        // 切换
        $(this).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();
        // 控制
        shows(index);
        // 清除空降类
        setTimeout(function(){
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        }, 10);
    });
    // 监听屏幕的滚动
    $(window).mousewheel(function(event, d){
         // 滚动的屏的索引
         clearTimeout(timer);
         timer = setTimeout(function(){
             index -= d;
             if(index > $('.gps li').length -1){
                 index = 0;
             }else if(index < 0){
                 index = $('.gps li').length -1;
             }
             // 切换GPS和页面
             $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');
             $('section').eq(index).show().siblings('section').hide();
             // 控制
             shows(index);
             // 清除空降类
             setTimeout(function(){
                 $('section').eq(index).removeClass('current').siblings('section').addClass('current');
             }, 10);
         }, 400);
    });
     // 控制头部logo的显示和隐藏
     function shows(num){
         if(num == 0){ // 第一屏
             $('#hd-logo').hide();
             $('#scroll').show();
         }else {
             $('#hd-logo').show();
             $('#scroll').hide();
         }
     }
});