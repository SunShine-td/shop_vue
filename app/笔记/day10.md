 本天:项目的第十天，今天课程重点，完成购物车业务。*****
 前台项目三个重要地方：分页器、购物车、登录注册。

 6)面试题:token相关的面试

切记:Vue项目,React尽可能别扔JSX。
情况:外包公司【Vue、React】


 1)复习
问题1:什么时候用router-link、什么时候用编程式导航。
1.1如果一个按钮点击过后，如果只有路由跳转的业务【声明式导航、编程式导航】
1.2如果点击一个按钮除了路由跳转，还有其他的业务，可以选择编程式导航。

问题2：promise问题。【基础问题】








2)加入购物车成功组件的业务?
路由跳转







3)获取购物车的数据进行展示?

举例子:用户是淘宝平台的用户。
为什么目前我们获取不到自己购物车的数据，你没有给我分配一个用户id
张三:奶粉、鞋子、手机
李四:羽绒服
3.1问题1：用哪个技术可以生成用户id【身份】----uuid
3.2问题2:用户身份如何给后台专递过去？
3.3临时身份只需要执行一次
3.4临时身份数据持家化的
3.5工作的时候不这么玩
会创建一个utils（工具）文件：把常用的代码片段放到这个文件夹里面
3.6配置一些文件[JS]，不能操作仓库
配置文件不限执行，没办法运行项目【配置文件很少碰仓库】






4)设计购物车的数据？
注意：获取购物车的数据的时候，读取的时候切记小心。后台老师写的数据格式有问题的。
张三:衣服、裤子、鞋子

[

]

[
     {
          cart:[   {name:'衣服'},{name:'裤子'},{name:'鞋子'}]
    }
]



5）购物车静态结构需要注意
头部:6
身体:7
静态页面需要删除一些：把每一个产品的第三个li删除
需要修改每一个li的百分比: 
[con1 2 3 4 5 6 7]的百分比
15  35  10 17 10 13




6)购物车数量的操作?
修改购物车产品数量的时候，需要发请求的，通知服务器产品最新的个数【服务器需要保存】，
当你组件在获取购物车的数据时候，不就是最新的数值【用户刷新刷不掉】

产品个数变化接口参数：
skuID	string	Y	商品ID

skuNum：在修改产品个数的时候,需要给服务器传递的是【变化的数值】

比如：佩奇  起始数量 4  用户在表单元素中输入 6   ----->给服务器参数是2
     佩奇  起始数量4    用户在表单元素中输入1   ------>给服务器的参数-3
     佩奇  起始的数量4   用户在表单元素中输入4  ------>给服务器的参数0


blur:失去焦点--->点击空白的地方
change:文本需要有变化，而且还需要点击空白的地方
input:只要文本发生变化立马执行【不许点击空白的地方】



1）删除选择产品的操作

​	

2）全选操作



3）登入与注册静态组件-（处理共用图片资源问题）

​		登入、注册、(git)、必须是你要会的技能

​	3.1 登入与注册的静态组件 

​	3.2	assets文件夹---放置的全部组件共用的静态资源

​	3.3 在样式当中也可以使用@符号【src别名】，切记在前面加上~







4）注册的业务----表单验证先不做

​	4.1 注册业务|登入业务中的表单验证先不处理【最后一天处理】

​	4.1 获取验证码的接口：/api/user/passport/sendCode/{phone}

​	4.2 注册用户

5）登入业务

​	5.1 注册----通过数据库存储用户信息(名字、密码)

​	5.2 登录------登录成功的时候，后台为了区分这个用户是谁---服务器下发token【令牌：唯一标识符】

​	登录接口做的不完美：一般的登录服务器会下发token，前台持久化存储token【带着token找服务器要用户信息进行展示】

6）token令牌理解



注意：vuex仓库存储数据------不是持久化

