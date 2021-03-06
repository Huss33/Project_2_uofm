const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
  
    const response = await fetch('/api/login/', {
      method: 'POST',
      body: JSON.stringify({
        email: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  // change dirct
    if (response.ok) {
      console.log(response);
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);