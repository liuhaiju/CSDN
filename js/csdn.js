var vueAjax = new Vue({
		el:'#csdn',
		data:{
			blog_lists:[],
			banner:[],
			classify_lists:[],
		},
		mounted: function(){
            this.getData();
            var mySwiper = new Swiper ('.swiper-container', {
					    direction: 'horizontal',
					    loop: true,

					     // 如果需要分页器
					    pagination: '.swiper-pagination',
					     paginationClickable: true,
					            speed: 500,
					            loop: true,
					            observer:true,
					            observeParents:true,
					            autoplayDisableOnInteraction : false,
					            autoplay:2000

					    })
        },
        methods:{
        	getData: function(){
        		var that = this;
	        	$.ajax({
	                url: "http://blog.com/api/index/index",
	                type: "get",
	                dataType: "json",
	                success: function(res){
	                	// var newBannerList=[];
	                	// for(i=0;i<5;i++){
	                	// 	newBannerList=newBannerList.concat(res.data.banner)
	                	// }
	                	// that.banner=newBannerList;
	                	console.log(that.banner);
	                	that.blog_lists=res.data.blog_lists;
	                	that.banner=res.data.banner;
	                	that.classify_lists=res.data.classify_lists;
	                },
	                error: function(res){

	                }
	            })
	            console.log(this.list);
	            console.log(that.list);
        	},
        }
	})