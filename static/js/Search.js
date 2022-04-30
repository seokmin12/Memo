function Search() {
    var value = document.getElementById('search').value;
    var memo = document.getElementsByClassName('memo');

    for(i=0;i<memo.length;i++) {
        var title = memo[i].getElementsByClassName('title');
        if(title[0].innerHTML.indexOf(value) > -1) {
            memo[i].style.display = "block";
        } else {
            memo[i].style.display = "none";
        }
    }
}