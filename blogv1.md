



## 首页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://blog.com/index.php?c=blog&a=lists`
  
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
- ` http://blog.com/index.php?c=blog&a=info `
  
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