var vueAjax = new Vue({
		el:'#csdn-details',
		data:{
			blog_info:{},
		},
		mounted: function(){
            this.getData();
        },
        methods:{
        	getData: function(){
        		var that = this;
	        	$.ajax({
	                url: "http://blog.com/api/blog/info",
	                type: "get",
	                data:{
	                	id: window.location.search.split("=")[1],
	                },
	                dataType: "json",
	                success: function(res){
	                	that.blog_info=res.data.blog_info;
	                },
	                error: function(res){

	                }
	            })
        	},
        	check:function(){
        		 $.ajax({
	                url: "http://blog.com/api/collect/add",
	                type: "post",
	                data:{
	                	"user_id":73,
	                	"blog_id":window.location.search.split("=")[1],
	                },
	                dataType: "json",
	                success: function(res){
	                	if(res.error_code==0){
	                		alert(res.message);
	                	}else{
	                		alert("失败");
	                	}
	                },
	                error: function(res){

	                }
	            })
        	}
        }
	})