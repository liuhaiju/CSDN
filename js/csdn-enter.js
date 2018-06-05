var login = new Vue({
	el: "#csdn-enter",
	data:{
		username:"",
		password:"",
	},
	mounted:function(){},
		methods:{
			login:function(){
				if(this.username == ""){
					alert("用户名不能为空");
					return false;
				};
				if(this.password == ""){
					alert("密码不能为空");
					return false;
				};
				$.ajax({
					url: "http://blog.com/api/user/doLogin",
					type: "post",
					dataType: "json",
					data: {
						"phone":this.username,
						"password":this.password,
					},
					success:function(res){
						if(res.error_code == 0){
							alert("登录成功了");
							window.location.href="./csdn.html"
						}else {
							alert(res.message);
						}
					}
				})
			}
		}
	})