$(document).ready(function () {
    $(document).on('click', '#send', function () {
        const id = $('#postId').val();
        if (!id) {
            alert('Post ID is required!');
            return;
        }
        $.get(`${getUrl(`posts/${id}`)}`, function () {
            window.location.href = getUrl(`view/post/${id}`);
        }).fail(function (xhr) {
            const responseErr = JSON.parse(xhr.responseText);
            alert(`Error getting the post details: ${responseErr.message}`);
        });
    });
});

function getUrl(url) {
    return `${window.location.origin}/${url}`;
}
