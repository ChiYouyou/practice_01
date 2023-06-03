//header切换
(function () {
    const list = document.querySelector('.nav .clearfix')
    const line = document.querySelector('.line')
    const firstLi = document.querySelector('.nav ul li div')
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
})();

//添加领养信息盒子
(function () {
    let data = [
        {
            src: '../upload/cat1.jpg',
            gender: '女生',
            location: '北京',
            time: '2023/03/10 11:09:57',
            context: '我是来自北京的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat1.jpg',
            gender: '女生',
            location: '北京',
            time: '2023/03/10 11:09:57',
            context: '我是来自北京的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat2.jpeg',
            gender: '男生',
            location: '湖南',
            time: '2023/04/10 12:09:57',
            context: '我是来自湖南的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat2.jpeg',
            gender: '男生',
            location: '湖南',
            time: '2023/03/11 11:05:42',
            context: '我是来自湖南的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat2.jpeg',
            gender: '男生',
            location: '湖南',
            time: '2023/03/10 09:09:04',
            context: '我是来自湖南的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat2.jpeg',
            gender: '男生',
            location: '湖南',
            time: '2023/03/09 16:36:12',
            context: '我是来自湖南的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat2.jpeg',
            gender: '男生',
            location: '湖南',
            time: '2023/03/09 11:37:24',
            context: '我是来自湖南的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat3.jpeg',
            gender: '女生',
            location: '四川',
            time: '2023/03/08 18:42:43',
            context: '我是来自四川的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat3.jpeg',
            gender: '女生',
            location: '四川',
            time: '2023/03/06 15:03:03',
            context: '我是来自四川的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat4.jpeg',
            gender: '男生',
            location: '上海',
            time: '2023/03/03 20:09:39',
            context: '我是来自上海的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat5.jpeg',
            gender: '女生',
            location: '山西',
            time: '2023/03/01 18:53:58',
            context: '我是来自山西的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat6.jpeg',
            gender: '女生',
            location: '江西',
            time: '2023/03/01 18:09:45',
            context: '我是来自江西的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat6.jpeg',
            gender: '女生',
            location: '江西',
            time: '2023/02/28 22:10:57',
            context: '我是来自江西的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat7.jpeg',
            gender: '男生',
            location: '浙江',
            time: '2023/02/17 13:34:31',
            context: '我是来自浙江的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat7.jpeg',
            gender: '男生',
            location: '浙江',
            time: '2023/02/10 14:39:42',
            context: '我是来自浙江的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat7.jpeg',
            gender: '男生',
            location: '浙江',
            time: '2023/02/10 10:49:55',
            context: '我是来自浙江的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
        },
        {
            src: '../upload/cat8.jpeg',
            gender: '女生',
            location: '陕西',
            time: '2023/02/03 17:06:16',
            context: '我是来自陕西的一只小猫，我现在的主人由于经济压力，且家中已有一只小猫，无法给我很好的照顾，特发此贴希望能有主人愿意给我一个家！小猫身体健康无任何疾病，已注射过疫苗，可提供证明。要求新主人耐心细心、爱护小猫、给小猫最好的呵护和无限的爱与包容，定期发送照片和视频以供随时了解小猫近况。联系方式vx：xxxxxxxxxx'
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

    //渲染
    function render(arr) {
        let str = ''
        arr.forEach(item => {
            const { src, context, gender, location, time } = item
            str += `
                <li>
                    <div class="pic"><img src=${src} alt=""></div>
                    <div>时间：
                        ${time}
                    </div>                   
                    <div>地址：
                        ${location}
                    </div>
                    <div>性别：
                        ${gender}
                    </div>
                    <p>介绍：
                        ${context}
                    </p>
                </li>
            `
        })
        ul.innerHTML = str
    }
    render(data)

    //过滤筛选模块
    document.querySelector('.subnav ul').addEventListener('click', e => {
        const { tagName, dataset } = e.target
        if (tagName === 'A') {
            let arr = data
            switch (dataset.id) {
                case '1':
                    arr = data.filter(item => item.location === '北京')
                    break
                case '2':
                    arr = data.filter(item => item.location === '天津')
                    break
                case '3':
                    arr = data.filter(item => item.location === '上海')
                    break
                case '4':
                    arr = data.filter(item => item.location === '重庆')
                    break
                case '5':
                    arr = data.filter(item => item.location === '河北')
                    break
                case '6':
                    arr = data.filter(item => item.location === '山西')
                    break
                case '7':
                    arr = data.filter(item => item.location === '辽宁')
                    break
                case '8':
                    arr = data.filter(item => item.location === '吉林')
                    break
                case '9':
                    arr = data.filter(item => item.location === '黑龙江')
                    break
                case '10':
                    arr = data.filter(item => item.location === '江苏')
                    break
                case '11':
                    arr = data.filter(item => item.location === '浙江')
                    break
                case '12':
                    arr = data.filter(item => item.location === '安徽')
                    break
                case '13':
                    arr = data.filter(item => item.location === '福建')
                    break
                case '14':
                    arr = data.filter(item => item.location === '江西')
                    break
                case '15':
                    arr = data.filter(item => item.location === '山东')
                    break
                case '16':
                    arr = data.filter(item => item.location === '河南')
                    break
                case '17':
                    arr = data.filter(item => item.location === '湖北')
                    break
                case '18':
                    arr = data.filter(item => item.location === '湖南')
                    break
                case '19':
                    arr = data.filter(item => item.location === '广东')
                    break
                case '20':
                    arr = data.filter(item => item.location === '海南')
                    break
                case '21':
                    arr = data.filter(item => item.location === '四川')
                    break
                case '22':
                    arr = data.filter(item => item.location === '贵州')
                    break
                case '23':
                    arr = data.filter(item => item.location === '云南')
                    break
                case '24':
                    arr = data.filter(item => item.location === '陕西')
                    break
                case '25':
                    arr = data.filter(item => item.location === '甘肃')
                    break
                case '26':
                    arr = data.filter(item => item.location === '青海')
                    break
                case '27':
                    arr = data.filter(item => item.location === '台湾')
                    break
                case '28':
                    arr = data.filter(item => item.location === '内蒙古')
                    break
                case '29':
                    arr = data.filter(item => item.location === '广西')
                    break
                case '30':
                    arr = data.filter(item => item.location === '西藏')
                    break
                case '31':
                    arr = data.filter(item => item.location === '宁夏')
                    break
                case '32':
                    arr = data.filter(item => item.location === '新疆')
                    break
                case '33':
                    arr = data.filter(item => item.location === '香港')
                    break
                case '34':
                    arr = data.filter(item => item.location === '澳门')
                    break
            }
            render(arr)
            console.log(arr);
        }
    })
})();