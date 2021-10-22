import React from 'react'
import firebase from 'firebase'
import {auth} from '../firebase.js'
import {Button} from '@material-ui/core'
function SignIn() {
  function singInWithGoogle() {
    const provider = new firebase.auth.GithubAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div>
      <Button onClick={singInWithGoogle} >Sign in with Google</Button>
    </div>
  )
}

export default SignIn
