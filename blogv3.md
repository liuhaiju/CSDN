#host 配置
192.168.199.235 my.blog.com



## 首页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=blog&a=lists`
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |


 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
        "banner" : [
           {
              "id" : 10,
              "img" : "",
              "title" : "",
              "url" : "",
           },
        ],
        "blog" : [
            {
                "id" : 1,
                "title" : "",
                "category_id" : "",
                "category_name" : "",
                "username" : "",
                "read_num":"",
                "createtime" : "",
            }
        ],
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |
|banner  |array    |广告头图  |



***







## 详情页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=blog&a=info `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |int |博客id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
        "info" : 
            {
                "id" : 1,
                "title" : "",
                "category_id" : "",
                "category_name" : "",
                "content" : "",
                "userid"   : "",
                "username" : "",
                "userimg"  : "",
                "read_num":"",
                "createtime" : "",
            },
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |
|info  |obj    |博客详情  |



***






## 登录
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=user&a=doLogin `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|phone |是  |string |电话号|
|password |是  |string |密码|
|format |是  |string |类型 接口调用传json|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
        "user" : 
            {
                "userid"   : "",
                "username" : "",
                "userimg"  : "",
            },
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:----- |----- |
|info  |obj    |博客详情  |



***