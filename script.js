let tab;
let tabcontent;

window.onload = function () {
    tabcontent = document.getElementsByClassName('tabcontent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('show');
        tabcontent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function (event) {
    let target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabcontent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabcontent[b].classList.remove('hide');
        tabcontent[b].classList.add('show');
    }
}