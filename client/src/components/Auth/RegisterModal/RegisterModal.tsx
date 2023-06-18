import React from 'react'

interface Props{
  setShowAuthModal: (value:boolean) => void,
  setShowLogin: (value:boolean) => void
}

const RegisterModal = ({setShowAuthModal,setShowLogin}: Props) => {
  return (
    <div>RegisterModal</div>
  )
}

export default RegisterModal