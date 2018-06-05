var Collection= new Vue({
	el: "#collection",
	data:{
		blog_lists:[],
	},
	mounted:function(){
		this.login();
	},
	methods:{
		login:function(){
			var that = this;
			$.ajax({
				url: "http://blog.com/api/collect/lists",
				type: "post",
				data:{
					"user_id":73,
				},
				dataType: "json",
				success:function(res){
					that.blog_lists = res.data.blog_lists;
				},
				error: function(res){

	            }
			})
		}
	}
})