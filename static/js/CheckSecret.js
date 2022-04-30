function CheckSecret() {
    var checkbox = document.getElementById('secret-check');
    var pw_box = document.getElementById('memo-pw');

    if (checkbox.checked == true) {
        pw_box.disabled = false;
    } else {
        pw_box.disabled = true;
    }
}