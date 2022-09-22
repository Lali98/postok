/*
 * AJAX kérések
 * Asynchronous JavaScript and XML
 */

// https://jsonplaceholder.typicode.com/posts

document.getElementById('fetch-posts').onclick = function () {
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);

            let podtListHTML = '';
            for(let post of posts) {
                podtListHTML += '<p>' + post.title + '</p><small>' + post.body +  '</small>';
            }
            
            document.getElementById('post-list-contner').innerHTML = podtListHTML;
        }
    };
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
};
