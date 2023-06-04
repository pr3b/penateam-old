import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

function FloatingNavAuth() {
  const {data: session} = useSession();

  if(session){
    return(
      <>
        Signed as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <a href='#' className='floating-nav__link w-nav-link'>
      <button onClick={() => signIn()}>Sign in</button>
    </a>
  )
}

export default FloatingNavAuth