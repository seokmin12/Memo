$(document).ready(function() {
    $('#memo-content').keyup(function(e) {
        var content = $(this).val();
        $('#memo-len').text(content.length);
    })
})