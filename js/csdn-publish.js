var publish = new Vue({
	el:"#publish",
	data:{
		title:"",
		classify_id:"",
	},
	mounted: function(){
    	var ue = UE.getEditor('container');
    },
    methods: {
    	getUeditorContent: function(){
    		return UE.getEditor('container').getContent()
    	},
    	check:function(){
    		$.ajax({
    			url:"http://blog.com/api/blog/doAdd",
    			type:"post",
    			data:{
    				"user_id":73,
    				"title":this.title,
    				"content":this.getUeditorContent(),
    				"classify_id":this.classify_id,
    			},
    			dataType:"json",
    			success:function(res){
    				if(res.error_code==0){
	                	alert("发布成功并等待跳转");
	                	window.location.href="./vue-publish-list.html"
	                }else{
	                	alert("失败");
	                }
    			}
    		})
    	},			
    }
})