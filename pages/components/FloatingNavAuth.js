import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';

function FloatingNavAuth() {
  const {data: session} = useSession();

  if(session){
    return(
      <> 
        {session && (
          <Link href="/dashboard" className="floating-nav__link w-nav-link">
            Dashboard
          </Link>
        )}
        <a href="#" className="floating-nav__link w-nav-link">
          Hi, {session.user.email} <br />
        </a>
        <button className='floating-nav__link w-nav-link' onClick={() => signOut()}>Sign out</button>
        {/* <Link href="/dashboard" className="floating-nav__link w-nav-link">
            My Dashboard
        </Link> */}
      </>
    )
  }
  return (
    <a href='#' className='floating-nav__link w-nav-link'>
      <button onClick={() => signIn()}>Sign in</button>
    </a>
  )
}

export default FloatingNavAuth;