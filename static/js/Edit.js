function OpenEdit() {
    $('.edit-item').css('display', 'block');
    $('#content').attr('readonly', false);
}
function CloseEdit() {
    $('.edit-item').css('display', 'none');
    $('#content').attr('readonly', true);
}
function Edit() {
    var number = document.getElementById('number').innerText;
    var content = document.getElementById('content').value;
    var pw_switch = document.getElementById('secret-check');
    var pw = document.getElementById('memo-pw').value;

    if (pw_switch.checked == false || pw == '') {
        var locked = "F";
    } else {
        var locked = "T";
    }

    document.getElementById('edit_btn').href = "/update_memo?number=" + number + "&content=" + content + "&locked=" + locked + "&pw=" + pw;
}