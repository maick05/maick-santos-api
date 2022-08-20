$(document).ready(function () {
    $(document).on('click', '#send', function () {
        const id = $('#postId').val();
        if (!id) {
            alert('Post ID is required!');
            return;
        }

        runWaitMe('bounce');

        $.get(`${getUrl(`posts/${id}`)}`, function () {
            window.location.href = getUrl(`post/${id}`);
            runWaitMe('hide');
        }).fail(function (xhr) {
            const responseErr = JSON.parse(xhr.responseText);
            alert(`Error getting the post details: ${responseErr.message}`);
        });
    });
});

function getUrl(url) {
    return `${window.location.origin}/${url}`;
}

function runWaitMe(effect) {
    $('#send').waitMe({
        //none, rotateplane, stretch, orbit, roundBounce, win8,
        //win8_linear, ios, facebook, rotation, timer, pulse,
        //progressBar, bouncePulse or img
        effect: effect,

        //place text under the effect (string).
        text: '',

        //background for container (string).
        bg: 'rgba(255,255,255,0.7)',

        //color for background animation and text (string).
        color: '#000',

        //max size
        maxSize: '',

        //wait time im ms to close
        waitTime: -1,

        //url to image
        source: '',

        //or 'horizontal'
        textPos: 'vertical',

        //font size
        fontSize: '',

        // callback
        onClose: function () {}
    });
}
