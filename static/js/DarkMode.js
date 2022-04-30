function ChangeMode() {
    const html = document.getElementById('html');
    var theme = html.getAttribute('data-theme');
    var ModeName = document.getElementById('mode');

    if (theme == 'light') {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        ModeName.innerHTML = '다크 모드';
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        ModeName.innerHTML = '라이트 모드';
    }
}