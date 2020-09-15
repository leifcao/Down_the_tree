// 创建头部

var headerDom = `<div class="header">
<div class="logo">
    <a href="#">
        <img src="../img/logo.svg" alt="">
    </a>
</div>
<div class="menu">
    <ul>
        <li class="submenu"><a href="homePage.html" target="contentFrame">首页</a></li>
        <li class="submenu"><a href="#">问题反馈</a></li>
        <li class="submenu"><a href="#">Demo</a></li>
        <li class="submenu"><a href="#">官网</a></li>
        <li class="submenu"><a href="#">问答</a></li>
    </ul>
</div>
</div>

<div class="left">

</div>
`;


$('cus-header').replaceWith(headerDom);