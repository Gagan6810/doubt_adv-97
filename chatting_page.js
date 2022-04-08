username = localStorage.getItem('username');

function logout(){
    localStorage.removeItem('username');
    window.location = 'index.html';
}