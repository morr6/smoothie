export const localStorageInit = () => {
  if (!getEmailsFromStorage()) {
    localStorage.setItem('emailList', JSON.stringify([]))  
  }
}

export const addEmailToStorage = (email) => {
  localStorage.setItem('emailList', JSON.stringify([{
      email
    },
    ...getEmailsFromStorage()
    
  ]))
}

export const getEmailsFromStorage = () => {
  try {
    let emails = JSON.parse(localStorage.getItem('emailList'))

    return emails
  }
  catch (err){
    console.log(err)
  }
} 