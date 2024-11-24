(() => {
    // Capturar os elementos
    const formSignup = document.getElementById('form-signup')
    const nameInputSignup = document.getElementById('name')
    const emailInputSignup = document.getElementById('email')
    const passwordInputSignup = document.getElementById('password')
    const rePasswordInputSignup = document.getElementById('re-password')
  
    // Alerts
    const successAlertSignup = document.getElementById('success-alert-signup')
    const errorAlertSignup = document.getElementById('error-alert-signup')
  
    formSignup.addEventListener('submit', async (event) => {
      event.preventDefault()
  
      const passwordValue = passwordInputSignup.value
      const rePasswordValue = rePasswordInputSignup.value
  
      if (passwordValue !== rePasswordValue) {
        errorAlertSignup.innerText = "As senhas precisam ser iguais. Por favor, digite novamente."
  
        errorAlertSignup.classList.remove('d-none')
  
        passwordInputSignup.value = ''
        rePasswordInputSignup.value = ''
      } else {
        errorAlertSignup.classList.add('d-none')
  
        const data = {
          name: nameInputSignup.value,
          email: emailInputSignup.value,
          password: passwordValue
        }
  
        try {
          const response = await api.post('/users/signup', data)
  
          if (response.status === 201) {
            successAlertSignup.classList.remove('d-none')
  
            setTimeout(() => {
              location.href = '/index.html'
            }, 3000)
          }
        } catch (error) {
          const errorMessage = error?.response?.data?.message ?? "Erro ao cadastrar usuário. Por favor, tente novamente."
    
          errorAlertSignup.innerText = `Erro ao cadastrar usuário: ${errorMessage}`
          errorAlertSignup.classList.remove('d-none')
          successAlertSignup.classList.add('d-none')
    
          console.log('Erro', error)
        }
      }
    })
  })()