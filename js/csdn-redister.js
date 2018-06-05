var vueAjax = new Vue({
		el:'#csdn-enter',
		data:{
			username:"",
			password:"",
			uname:"",
		},
		mounted:function(){
		},
        methods:{
        	getData: function(){
	        	$.ajax({
	                url: "http://blog.com/api/user/doReg",
	                type: "post",
	                data:{
	                	"phone":this.username,
	                	"password":this.password,
	                	"uname":this.uname,
	                },
	                dataType: "json",
	                success: function(res){
	                	if(res.error_code == 0){
	                		alert("注册成功");
	                	}else{
	                		alert("注册失败");
	                	}	
	                },
	                error: function(res){

	                }
	            })
        	},
        }
	})