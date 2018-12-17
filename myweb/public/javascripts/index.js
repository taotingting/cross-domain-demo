// http://127.0.0.1:8085  -- index.js
document.getElementById('btn-1').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
        }
    }
    xhr.open('get', 'http://127.0.0.1:3000/info/normal');
    xhr.send(null);
});

document.getElementById('btn-2').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
        }
    }
    xhr.open('get', '/proxy/info/normal');
    xhr.send(null);
});

document.getElementById('btn-3').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;  // 设置withCredentials以便发送cookie
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
        }
    }
    xhr.open('get', 'http://127.0.0.1:3000/info/cors');  // 跨域请求
    xhr.send(null);
});

function myCallback(res) {
    alert(JSON.stringify(res, null , 2));
}
document.getElementById('btn-4').addEventListener('click', function() {
    // 2. 动态创建script标签，并设置src属性，注意参数cb=myCallback
    var script = document.createElement('script');
    script.src = 'http://127.0.0.1:3000/info/jsonp?cb=myCallback';
    document.getElementsByTagName('head')[0].appendChild(script);
});

document.getElementById('btn-5').addEventListener('click', function() {
    $.ajax({
        url: 'http://127.0.0.1:3000/info/jsonp?cb=myCallback',
        dataType: 'jsonp', // 注意，此处dataType的值表示请求使用JSONP
        jsonp: 'cb', // 请求query中callback函数的键名
    }).done(function (res) {
        alert(JSON.stringify(res, null , 2));
    });
    
});