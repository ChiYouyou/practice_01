// 轮播图
// (function () {
//     const sliderData = [
//         { url: '../upload/poster.jpeg' },
//         { url: '../upload/poster2.jpg' },
//         { url: '../upload/poster3.jpg' },
//         { url: '../upload/poster4.jpeg' },
//         { url: '../upload/poster5.jpeg' }
//     ]

//     //左右切换轮播图
//     const img = document.querySelector('.focus_promo img')
//     const next = document.querySelector('.next')
//     let i = 0
//     next.addEventListener('click', function () {
//         i++
//         i = i >= sliderData.length ? 0 : i
//         toggle()
//     })
//     const prev = document.querySelector('.prev')
//     prev.addEventListener('click', function () {
//         i--
//         i = i < 0 ? sliderData.length - 1 : i
//         toggle()
//     })
//     function toggle() {
//         img.src = sliderData[i].url
//         //排他思想
//         document.querySelector('.focus_promo .active').classList.remove('active')
//         document.querySelector(`.focus_promo li:nth-child(${i + 1})`).classList.add('active')
//     }

//     //使用定时器实现自动轮播
//     let timerId = setInterval(function () {
//         next.click()//调用next的函数
//     }, 2000)
//     const slider = document.querySelector('.focus_promo')
//     slider.addEventListener('mouseenter', function () {
//         clearInterval(timerId)
//     })
//     slider.addEventListener('mouseleave', function () {
//         if (timerId) clearInterval(timerId)
//         timerId = setInterval(function () {
//             next.click()
//         }, 2000)
//     })

//     //点击小圆点更换图片
//     const ul = document.querySelector('.img_nav')
//     ul.addEventListener('click', function (e) {
//         if (e.target.tagName === 'LI') {
//             // console.log(e.target.tagName)
//             //li更换样式
//             const j = +e.target.dataset.id
//             document.querySelector('.img_nav .active').classList.remove('active')
//             // document.querySelector(`.img_nav li:nth-child(${j + 1})`).classList.add('active')
//             e.target.classList.add('active')

//             //图片更换
//             img.src = sliderData[j].url
//             i = j
//         }
//     })
// })();



// header切换
(function () {
    const list = document.querySelector('.nav .clearfix')
    const line = document.querySelector('.line')
    const firstLi = document.querySelector('.nav ul li div')
    const liAll = document.querySelectorAll('.nav ul li a')
    //事件委托，只给ul注册事件
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            // console.log(e.target.offsetLeft)
            line.style.transform = `translateX(${e.target.offsetLeft - firstLi.offsetLeft}px)`
            const i = +e.target.dataset.id
            document.querySelector('.nav ul li .colorcom').classList.remove('colorcom')
            // document.querySelector(`.nav ul li:nth-child(${i + 1}*2-1) a`).classList.add('colorcom')//算式必须写在{}里面，否则报错
            document.querySelector(`.nav ul li:nth-child(${(i + 1) * 2 - 1}) a`).classList.add('colorcom')
        }
    })
    // list.addEventListener('animationend', function (e) {
    //     if (e.target.tagName === 'A') {
    //         if (e.target.dataset.id === '1') {
    //             // liAll.href = '#'
    //             e.target.href = '#adopt'
    //         } else if (e.target.dataset.id === '2') {
    //             liAll.href = '#'
    //             e.target.href = '#knowledge'
    //         } else if (e.target.dataset.id === '3') {
    //             liAll.href = '#'
    //             e.target.href = '#share'
    //         } else if (e.target.dataset.id === '4') {
    //             liAll.href = '#'
    //             e.target.href = '#donate'
    //         } else if (e.target.dataset.id === '5') {
    //             liAll.href = '#'
    //             e.target.href = '#buy'
    //         }
    //     }
    // })

})();

//右侧导航栏
(function () {
    //滑到领养一只猫显示右侧导航栏
    const rightnav = document.querySelector('.rightnav')
    window.addEventListener('scroll', function () {
        const n = this.document.documentElement.scrollTop;
        rightnav.style.opacity = n >= adopt.offsetTop ? 1 : 0
    })

    //点击返回页面顶部
    const adopt = document.querySelector('.adopt')
    const backTop = document.querySelector('#backTop')
    backTop.addEventListener('click', function () {
        // document.documentElement.scrollTop = 0
        window.scrollTo(0, 0)
    })

    // 点击导航滑动到相应位置
    const rightnav_ul = document.querySelector('.rightnav_ul')
    rightnav_ul.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            const old = document.querySelector('.rightnav_ul .colorcom')
            if (old) old.classList.remove('colorcom')
            e.target.classList.add('colorcom')
            const top = document.querySelector(`.${e.target.dataset.name}`).offsetTop
            document.documentElement.scrollTop = top
        }
    })

    // 滑动页面导航栏自动跟随变化
    window.addEventListener('scroll', function () {
        const old = document.querySelector('.rightnav_ul .colorcom')
        if (old) old.classList.remove('colorcom')

        const adopt = document.querySelector('.adopt')
        const knowledge = document.querySelector('.knowledge')
        const share = document.querySelector('.share')
        const donate = document.querySelector('.donate')
        const buy = document.querySelector('.buy')

        const n = document.documentElement.scrollTop
        if (n >= adopt.offsetTop && n < knowledge.offsetTop) {
            document.querySelector('[data-name=adopt]').classList.add('colorcom')
        } else if (n >= knowledge.offsetTop && n < share.offsetTop) {
            document.querySelector('[data-name=knowledge]').classList.add('colorcom')
        } else if (n >= share.offsetTop && n < donate.offsetTop) {
            document.querySelector('[data-name=share]').classList.add('colorcom')
        } else if (n >= donate.offsetTop && n < buy.offsetTop) {
            document.querySelector('[data-name=donate]').classList.add('colorcom')
        } else if (n >= buy.offsetTop) {
            document.querySelector('[data-name=buy]').classList.add('colorcom')
        }
    })

})();

//领养、知识、动态、捐赠、购物部分添加小盒子
(function () {
    let data = [
        {
            src: '../upload/cat1.jpg',
            context: 'snnnnnmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndfghjj'
        },
        {
            src: '../upload/cat2.jpeg',
            context: 'snnnnnmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndfghjj'
        },
        {
            src: '../upload/cat3.jpeg',
            context: 'snnnnnmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndfghjj'
        },
        {
            src: '../upload/cat4.jpeg',
            context: 'snnnnnmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndfghjj'
        }
    ]
    const ul = document.querySelector('.adopt_content ul')
    // for (let i = 0; i < data.length; i++) {
    //     const li = document.createElement('li')
    //     li.innerHTML = `
    //         <div class="pic"><img src=${data[i].src} alt=""></div>
    //         <p>
    //             ${data[i].context}
    //         </p>
    //     `
    //     ul.appendChild(li)
    // }

    let str = ''
    data.forEach(item => {
        const { src, context } = item
        str += `
            <li>
                <div class="pic"><img src=${src} alt=""></div>
                <p>
                    ${context}
                </p>
            </li>
        `
    })
    ul.innerHTML = str

    const knowledge_content = document.querySelector('.knowledge_content')
    knowledge_content.appendChild(ul.cloneNode(true))

    const share_content = document.querySelector('.share_content')
    share_content.appendChild(ul.cloneNode(true))

    const donate_content = document.querySelector('.donate_content')
    donate_content.appendChild(ul.cloneNode(true))

    const buy_content = document.querySelector('.buy_content')
    buy_content.appendChild(ul.cloneNode(true))
})();

//登录注册
(function () {
    const loginA = document.querySelector('.user ul li:last-child a')
    const registerA = loginA.nextElementSibling
    function render() {
        const username = localStorage.getItem('username')
        if (username) {
            loginA.innerHTML = `${username}`
            registerA.innerHTML = '退出登录'
            registerA.classList.remove('colorcom')
        }
        else {
            loginA.innerHTML = '登录'
            registerA.innerHTML = '注册'
            loginA.href = '../html/login.html'
            registerA.href = '../html/register.html'
        }
    }
    render()

    registerA.addEventListener('click', function () {
        localStorage.removeItem('username')
        render()
    })
})();
