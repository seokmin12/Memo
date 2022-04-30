function OpenWriteModal() {
    document.documentElement.classList.add('modal-is-open', 'modal-is-opening');
    setTimeout(() => {
        document.documentElement.classList.remove('modal-is-opening');
    }, 400);
    document.getElementById("write-memo").setAttribute('open', 'true');
}

function CloseWriteModal() {
    document.documentElement.classList.add('modal-is-closing');
    setTimeout(() => {
        document.documentElement.classList.remove('modal-is-closing', 'modal-is-open');
        document.getElementById("write-memo").removeAttribute('open');
    }, 400);
}

function OpenDeleteModal() {
    document.documentElement.classList.add('modal-is-open', 'modal-is-opening');
    setTimeout(() => {
        document.documentElement.classList.remove('modal-is-opening');
    }, 400);
    document.getElementById("delete-memo").setAttribute('open', 'true');

    var number = document.getElementById('number').innerText;
    document.getElementById('delete_btn').href = "/delete_memo?number=" + number;
}

function CloseDeleteModal() {
    document.documentElement.classList.add('modal-is-closing');
    setTimeout(() => {
        document.documentElement.classList.remove('modal-is-closing', 'modal-is-open');
        document.getElementById("delete-memo").removeAttribute('open');
    }, 400);
}

function OpenPwModal(number) {
    document.documentElement.classList.add('modal-is-open', 'modal-is-opening');
    setTimeout(() => {
        document.documentElement.classList.remove('modal-is-opening');
    }, 400);
    document.getElementById("check-pw").setAttribute('open', 'true');
    document.getElementById('memo-number').value = number;
}

function ClosePwModal() {
    document.documentElement.classList.add('modal-is-closing');
    setTimeout(() => {
        document.documentElement.classList.remove('modal-is-closing', 'modal-is-open');
        document.getElementById("check-pw").removeAttribute('open');
    }, 400);
}