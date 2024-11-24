(() => {
    // Capturar os elementos
    const formLogin = document.getElementById('form-login')
    const emailInput = document.getElementById('email-login')
    const passwordInput = document.getElementById('password-login')
  
    // Alerts
    const successAlert = document.getElementById('success-alert-login')
    const errorAlert = document.getElementById('error-alert-login')
  
    formLogin.addEventListener('submit', async (event) => {
      event.preventDefault()
  
      const data = {
        email: emailInput.value,
        password: passwordInput.value
      }
  
      try {
        const response = await api.post('/users/login', data)
  
        if (response.status === 200) {
          const userData = response.data
    
          localStorage.setItem('userId', userData.userId)
    
          successAlert.classList.remove('d-none')
  
          setTimeout(() => {
            location.href = '/notes.html'
          }, 3000)
        }
      } catch (error) {
        const errorMessage = error?.response?.data?.message ?? "Erro ao fazer login. Por favor, tente novamente."
  
        errorAlert.innerText = `Erro ao fazer login: ${errorMessage}`
        errorAlert.classList.remove('d-none')
        successAlert.classList.add('d-none')
  
        console.log('Erro', error)
      }
    })
  })()