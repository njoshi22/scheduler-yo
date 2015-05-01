console.log('\'Allo \'Allo!');

var mainRef = new Firebase('https://eatery.firebaseio.com');
var usersRef = mainRef.child('users');

function saveThis() {
  usersRef.set({
    neil: {
      name: 'neil',
      dob: '22-09-1987'
    }
  }, function(error) {
    if(!error) {
      alert('Yay!');
    }
  });
}
