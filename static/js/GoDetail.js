function GoDetail(memo) {
    var Ids = memo.id.split(' ');
    var number = Ids[0];
    var locked = Ids[1];

    if (locked == 'F') {
        window.location.href = '/memo_detail?number=' + number;
    } else {
        OpenPwModal(number);
    }
}