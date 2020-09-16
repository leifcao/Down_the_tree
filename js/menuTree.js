let menuObject = [{
    name: '1',
    href: '#',
    children: [{
        name: '1_1',
        href: '#',
        children: [{
            name: '1_1_1',
            href: '#',
            children: []
        }, {
            name: '1_1_2',
            href: '#',
            children: []
        }, {
            name: '1_1_3',
            href: '#',
            children: [{
                name: '1_1_3_1',
                href: '#',
                children: []
            }]
        }]
    }, {
        name: '1_2',
        href: '#',
        children: []
    }]
}, {
    name: '2',
    href: '#',
    children: [{
        name: '2_1',
        href: '#',
        children: [{
            name: '2_1_1',
            href: '#',
            children: []
        }]
    }, {
        name: '2_2',
        href: '#',
        children: []
    }]
}, {
    name: '3',
    href: '#',
    children: []
}];

//获取dom添加的位置 
var preLevel_li = $('.left');
var pre_li = $('.left');

// 面向对象 下拉树数组
function tree(obj, pre_li) {
    let preLevel_li = pre_li;
    let curLevel_ul = $(`<ul class="level"></ul>`);

    obj.forEach((item, index) => {

        if (item.children.length === 0) {
            lastTreeRender(item, preLevel_li, curLevel_ul);
        } else {
            let level_li = treeRender(item, preLevel_li, curLevel_ul);
            tree(item.children, level_li);
        }
    })
}

tree(menuObject, preLevel_li)

// 子集菜单树
function treeRender(item, preLevel_li, curLevel_ul) {
    let level_li = $(`<li><div><img src="../img/arrow-right.svg"><a href="${item.href}">${item.name}</a></div></li>`);
    // 将当前级别的li添加到当前级别的ul中
    curLevel_ul.append(level_li);
    // 将当前级别的ul添加至上一级的Ul的li后边
    preLevel_li.append(curLevel_ul);
    return level_li;

}

// 最后的无子菜单的节点
function lastTreeRender(item, preLevel_li, curLevel_ul) {
    // var preLevel_li = $('.left');
    let level_li = $(`<li><div><a href="${item.href}">${item.name}</a></div></li>`);
    // 将当前级别的li添加到当前级别的ul中
    curLevel_ul.append(level_li);
    // 将当前级别的ul添加至上一级的Ul的li后边
    preLevel_li.append(curLevel_ul);
}



let oldTag;
// 动态绑定事件
$('.left ul li').each(function() {
    // 默认关闭
    let open = false;
    $(this).click((e) => {
        open = !open;
        $(this).children('ul').toggle(500);
        if (oldTag) oldTag.removeClass('level_active')
            // 图片icon切换
        $(this).children('div').children('img').attr('src', open ? '../img/arrow-down.svg' : '../img/arrow-right.svg');

        $(this).children('div').children('a').addClass('level_active');
        oldTag = $(this).children('div').children('a');
        // 取消冒泡
        //如果提供了事件对象，则这是一个非IE浏览器
        if (e && e.stopPropagation)　　 // 因此它支持W3C的stopPropagation()方法
            e.stopPropagation();
        else　　 //否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        return false;
    })



});