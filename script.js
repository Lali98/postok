/*
 * AJAX kérések
 * Asynchronous JavaScript and XML
 */

// https://jsonplaceholder.typicode.com/posts

/*document.getElementById('fetch-posts').onclick = function () {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    sentRequest('GET', 'https://jsonplaceholder.typicode.com/posts', null, function (posts) {
        let postListHTML = '';
        for (let post of posts) {
            postListHTML += '<p>' + post.title + '</p><small>' + post.body + '</small>';
        }

        document.getElementById('post-list-contner').innerHTML = postListHTML;
    });
};*/

document.getElementById('login').onclick = function () {
    const url = 'https://reqres.in/api/login';
    let body = JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    });
    sentRequest('POST', url, body, function (token) {
        console.log(token);
        sentRequest('GET', 'https://reqres.in/api/users', null, function (users) {
            console.log(users); 
        });
    });
}

function sentRequest(method, url, body, callback) {
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(body);
}
