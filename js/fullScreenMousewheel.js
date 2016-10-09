/**
 * 
 * @authors laoyuan
 * @date    2014-10-09 14:37:48
 * @version 1.0（fullScreenMousewheel）
 */
;(function($){
	$.fn.fullScreen=function(options){
		var defaults={
             switchEle:'.ui-switch li',
             activeClass:'active',
             timeOut:1000
		};
		this.init=function(){
		   setTimeout(function(){
	       	   $(window).scrollTop(0);
	       },50)
		}
       var $index=0;
       var wh=$(window).height();
       var maxIndex=$(defaults.switchEle).length;
       var beginTime=new Date();
       $(document).mousewheel(function(ev,delta){
	       if(new Date()-beginTime>defaults.timeOut){
	           if(delta<0){     
	               $index++;
	               if($index>maxIndex){
	                  $index=0
	               }
	           }else{
	           	  $index--;
	           	  if($index<0){
	                  $index=maxIndex;
	              }
	           }
	           $(defaults.switchEle).eq($index).addClass(defaults.activeClass).siblings().removeClass(defaults.activeClass);
	           $('body').stop(true).animate({scrollTop: wh*$index+'px'},defaults.timeOut);
	        }
       })
       $(defaults.switchEle).on('click', function(event) {
       	   $index=$(this).index();
       	   $(this).addClass(defaults.activeClass).siblings().removeClass(defaults.activeClass);
       	   $('body').animate({scrollTop: wh*$index+'px'},defaults.timeOut);
       });
       this.init();
	}
})(jQuery)
