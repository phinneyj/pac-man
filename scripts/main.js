//var img = document.querySelector('img');
var pacmanImage = document.getElementById('img-pacman');
pacmanImage.onclick = function() {
    var src = pacmanImage.getAttribute('src');
    if (src === 'images/pacman.png') {
        pacmanImage.setAttribute('src', 'images/pacman2.svg');
        pacmanImage.style.width = '234px';
    } else {
        pacmanImage.setAttribute('src', 'images/pacman.png');
        pacmanImage.style.width = '320px';
    }
}

var changeUserButton = document.getElementById('btn-change-user');
var clearUserButton = document.getElementById('btn-clear-user');
var heading = document.querySelector('h1');
var originalHeadingText = heading.textContent;

function setUserNameTo(newUserName) {
    heading.textContent = 'Welcome ' + newUserName + '!';
}

function changeUserName() {
    var newUserName = prompt('Please enter your name:');
    if (newUserName) {
        localStorage.setItem('userName', newUserName);
        setUserNameTo(newUserName);
    }
}

function clearUserName() {
    localStorage.removeItem('userName');
    heading.textContent = originalHeadingText;
    var clearedText = document.getElementById('i-cleared');
    clearedText.textContent = 'Cleared!';
    document.scrollingElement.scrollTo(0,0);
}

var storedUserName = localStorage.getItem('userName');
if (storedUserName) {
    setUserNameTo(storedUserName);
} else {
    changeUserName();
}

changeUserButton.onclick = changeUserName;
clearUserButton.onclick = clearUserName;