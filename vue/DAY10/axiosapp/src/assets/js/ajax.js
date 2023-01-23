function ajax(url, callback) {
    let ajax = new XMLHttpRequest();
    ajax.open('get', url)
    ajax.send()
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            // json 字符串 是字符串 所以我们可以 通过  responseText获取
            // console.log(ajax.responseText);

            // 转化为 js对象
            var jsObj = JSON.parse(ajax.responseText);

            callback(jsObj);
        }
    }
}

function Pget(url, callback) {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();
        ajax.open('get', url)
        ajax.send()
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // json 字符串 是字符串 所以我们可以 通过  responseText获取
                // console.log(ajax.responseText);

                // 转化为 js对象
                var jsObj = JSON.parse(ajax.responseText);

                resolve(jsObj);
            }
        }
    })
}

export default {
    ajax, Pget
}