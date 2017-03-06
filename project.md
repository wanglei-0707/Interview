## CSRF
CSRF, Cross Site Request Forgery, 跨站点伪造请求。举例来讲，某个恶意的网站上有一个指向你的网站的链接，如果某个用户已经登录到你的网站上了，那么当这个用户点击这个恶意网站上的那个链接时，就会向你的网站发来一个请求，你的网站会以为这个请求是用户自己发来的，其实呢，这个请求是那个恶意网站伪造的。
### Django 提供的 CSRF 防护机制
django 第一次响应来自某个客户端的请求时，会在服务器端随机生成一个 token，把这个 token 放在 cookie 里。然后每次 POST 请求都会带上这个 token，这样就能避免被 CSRF 攻击。
    1. 在返回的 HTTP 响应的 cookie 里，django 会为你添加一个 csrftoken 字段，其值为一个自动生成的 token
    2. 在所有的 POST 表单时，必须包含一个 csrfmiddlewaretoken 字段 （只需要在模板里加一个 {% csrf_token %}tag， django 就会自动帮你生成）
    3. 在处理 POST 请求之前，django 会验证这个请求的 cookie 里的 csrftoken 字段的值和提交的表单里的 csrfmiddlewaretoken 字段的值是否一样。如果一样，则表明这是一个合法的请求，否则，这个请求可能是来自于别人的 csrf 攻击，返回 403 Forbidden.
    4. 在所有 ajax POST 请求里，添加一个 X-CSRFTOKEN header，其值为 cookie 里的 csrftoken 的值
### Django 里如何使用 CSRF 防护
    1. 首先，最基本的原则是：GET 请求不要用有副作用。也就是说任何处理 GET 请求的代码对资源的访问都一定要是“只读“的。
    2. 要启用 django.middleware.csrf.CsrfViewMiddleware 这个中间件
    3. 再次，在所有的 POST 表单元素时，需要加上一个 {% csrf_token %} tag
    4. 在渲染模块时，使用 RequestContext。RequestContext 会处理 csrf_token 这个 tag,  从而自动为表单添加一个名为 csrfmiddlewaretoken 的 input

参考资料[Django 的 CSRF 保护机制](！http://www.cnblogs.com/lins05/archive/2012/12/02/2797996.html)
