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


## 分页
Django内置的Pagination类,接受两个参数，一个是需要展示的对象的列表或元祖，一个是每一页显示的个数
```
>>> from django.core.paginator import Paginator
>>> objects = ['john', 'paul', 'george', 'ringo']
>>> p = Paginator(objects, 2)
>>> p.count  #展示对象的总个数
4
>>> p.num_pages #分页后的总页数
2
>>> p.page_range #页面数的范围，从1开始
[1, 2]
>>> page1 = p.page(1) #返回一个Page对象，序号是始于1.如给出的页号不存在，抛出InvalidPage异常。
>>> page1
<Page 1 of 2>
>>> page1.object_list  #当前页面中所有的对象
['john', 'paul']
>>> page1.number //当前页面的页码，始于1
1
>>> page2 = p.page(2)
>>> page2.object_list
['george', 'ringo']
>>> page2.has_next() #如有下一页则返回True
False
>>> page2.has_previous() #如有上一页则返回True
True
>>> page2.has_other_pages() #如有上一页或下一页返回True
True
>>> page2.next_page_number() #返回下一页的页码
Traceback (most recent call last):
...
EmptyPage: That page contains no results
>>> page2.previous_page_number() #返回上一页的页码
1
>>> page2.start_index() #返回当前页面中第一个对象的序号，序号始于1.例如：将一个包含5个对象的列表分成每页2个对象，则第二页的start_index()返回3.
3
>>> page2.end_index() #返回当前页面中最后一个对象的序号，
4
>>> p.page(0)
Traceback (most recent call last):
...
EmptyPage: That page number is less than 1
>>> p.page(3)
Traceback (most recent call last):
...
EmptyPage: That page contains no results
```
举例
```
from django.core.paginator import PageNotAnInteger, Paginator, EmptyPage

def getContext(contentList, page=1, name="context", add_index = 1, page_elems=PAGE_ELEMENTS):
    """
    分页：
    contenList:分页内容,对象列表或集合
    page:当前页
    name:根据name获得对应的上下文名，分别为:
        #{name}_page:Page对象,默认"context_page"
        #{name}_list:第page页元素集合,默认"context_list"
    page_elems:一页显示的数量
    """
    if page < 1:
        page = 1
    paginator = Paginator(contentList, page_elems) #设置每页显示的数量，
    try:
        _page = paginator.page(page) #跳转到请求页面，如果该页不存在或者超过则跳转到尾页
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        _page = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        _page = paginator.page(paginator.num_pages)
    page = _page.number #当前页的页码
    # 展示当前页和前面两页、后面两页
    index_list = [page + x for x in xrange(-2, 3) if 1 <= page + x <= paginator.num_pages]
        # return the nearest 5 page's index number
    contain_begin = (1 in index_list) //判断是否包含第一页
    contain_end = (paginator.num_pages in index_list) //判断是否包含最后一页
    _list = list(_page.object_list)
    if add_index:
        for _index in xrange(len(_list)):
            _list[_index].list_index = _index + 1  # .__dict__.update(dict)

    return {'%s_page' % name: _page,
            '%s_list' % name: _list,
            '%s_index_list'  % name: index_list,
            '%s_contain_end' % name: contain_end,
            '%s_contain_begin' % name: contain_begin,
        }

# view
def courseViews(request):
    course_list = Course.objects.all()
    context = getContext(course_list, 1, "item")
    return render(request,"adminStaff/course/course_info.html",context)

# template
<ul class="pagination pagination-right">
	{% if item_page.has_previous %}
		<li><a href="javascript:void(0)" class="item_page" arg="{{item_page.previous_page_number}}">上一页</a></li>
	{% endif %}
	{% if not item_contain_begin %}
		<li><a href="javascript:void(0)" arg="1" class="item_page">1</a></li>
    	<li><span>...</span></li>
	{% endif %}
	{% for index in item_index_list %}
		{% ifequal index item_page.number %}
			<li class="disabled" value="{{ index }}"><span>{{ index }}</span></li>
		{% else %}
			<li><a href="javascript:void(0)" arg="{{ index }}" class="item_page">{{ index }}</a></li>
		{% endifequal %}
	{% endfor %}
	{% if not item_contain_end %}
		<li><span>...</span></li>
		<li><a href="javascript:void(0)" arg="{{ item_page.paginator.num_pages }}" class="item_page">{{ item_page.paginator.num_pages }}</a></li>
	{% endif %}
	{% if item_page.has_next %}
		<li><a href="javascript:void(0)" arg="{{ item_page.next_page_number }}" class="item_page">下一页></a></li>
	{% endif %}
</ul>

#js
$(document).on("click",".course_paginator .item_page",function(){
      page = $(this).attr("arg");
      Dajaxice.adminStaff.CoursePagination(Course_callback,{'filter_form':$("#course_filter_form").serialize(true),'page':page});
})
```
以上方法每次点击页码或者上一页下一页请求数据时，都要执行course_list = Course.objects.all()，也就是说每点一次都要从数据库中将所有的记录取出来，这种方法当数据量很大，多用户同时访问的时候，无疑会给数据库带来很大负担。所以可以进行改进：

如果每页只需要显示20条记录，则只需要从数据库中查询20条记录即可：
```
course_list = Course.objects.all()[0:20]
course_list = Course.objects.all()[20:40]
```
这种方式与下面这种方式是不一样的,python 的 QuerySets 是惰性的，这意味着只在对数据库进行求值之后才会对它们执行查询，这会比立即执行查询的速度更快。这种惰性利用了 Python 的分片（slicing）功能。这样做并没有先请求所有的记录，然后对所需要的记录进行分片，而是在实际的查询中使用了 5 作为 OFFSET、10 作为 LIMIT，这可以极大地提高性能。
```
course_list = Course.objects.all()
course_list = course_list[0:20]
```
解释上面的python 的 QuerySets 是惰性的：
Django的queryset对应于数据库的若干记录（row），通过可选的查询来过滤。例如，下面的代码会得到数据库中名字为‘Dave’的所有的人:
```
person_set = Person.objects.filter(first_name="Dave")
```
上面的代码并没有运行任何的数据库查询。你可以使用person_set，给它加上一些过滤条件，或者将它传给某个函数，这些操作都不会发送给数据库。要真正从数据库获得数据，你需要遍历queryset:
```
for person in person_set:
    print(person.last_name)
```
当你遍历queryset时，所有匹配的记录会从数据库获取，然后转换成Django的model。这被称为执行（evaluation）。这些model会保存在queryset内置的cache中，这样如果你再次遍历这个queryset，你不需要重复运行通用的查询。下面的代码只会执行一次数据库查询：
```
pet_set = Pet.objects.filter(species="Dog")
# The query is executed and cached.
for pet in pet_set:
    print(pet.first_name)
# The cache is used for subsequent iteration.
for pet in pet_set:
    print(pet.last_name)
```
