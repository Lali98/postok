/*
 * AJAX kérések
 * Asynchronous JavaScript and XML
 */

// https://jsonplaceholder.typicode.com/posts

document.getElementById('fetch-posts').onclick = function () {
    sentRequest('GET', 'https://jsonplaceholder.typicode.com/posts', null, function (posts) {
        let postListHTML = '';
        for (let post of posts) {
            postListHTML += '<p>' + post.title + '</p><small>' + post.body + '</small>';
        }

        document.getElementById('post-list-contner').innerHTML = postListHTML;
    });
};

function sentRequest(method, url, body, callback) {
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.open(method, url);
    xhr.send(body);
}
