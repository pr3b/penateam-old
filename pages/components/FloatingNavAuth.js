import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';

function FloatingNavAuth() {
  const {data: session} = useSession();

  if(session){
    return(
      <> 
        <a href="#" class="floating-nav__link w-nav-link">
          Signed as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </a>
        <Link href="/my-subscriptions" class="floating-nav__link w-nav-link">
            My Subscriptions
        </Link>
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