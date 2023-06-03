//验证
(function () {
    const reg = /^[a-zA-Z0-9-_]{6,16}$/
    const input = document.querySelector('input[class=check_input]')
    const span = input.nextElementSibling
    input.addEventListener('blur', function () {//失去焦点
        // console.log(reg.test(this.value))
        if (reg.test(this.value)) {
            span.innerHTML = '输入正确'
            span.className = 'check_prompt right'
        } else {
            span.innerHTML = '请输入6-16位的英文数字下划线'
            span.className = 'check_prompt error'
        }
    })
})();