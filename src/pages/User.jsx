import {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import GithubContext from '../context/Github/GithubContext'

function User({}) {
  const {getUser, user} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
    // getUserRepos(params.login)
  }, [])
  return (
    <div>
      {user.login}
    </div>

  )
}

export default User