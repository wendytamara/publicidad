const user = $('.user');
const password = $('.password')
const btnlogIn = $('.btnlogIn');
debugger

function init() {

// alert('usuario: america@gmail.com  password: 123456');

btnlogIn.on('click', (event) => {  
    event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(user.val(), password.val())
  
  .then(() => {
    if(user.val() === 'america@gmail.com' && password.val() === '123456') {
      event.preventDefault();
      location.href = 'views/vista1.html';
    }
  })

  .catch((error) => {   
    console.log(user.value);
    console.log(password.value);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert(errorMessage);
  });
});

function observer() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('usuario activo');
    } else {
      console.log('no existe usuario activo');
    }
  });
}
observer();

}
 
window.onload = init;
