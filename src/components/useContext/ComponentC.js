import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../../App'

function ComponentC() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
        hello this is useContext example {user} - {channel}
    </div>
  )
}

export default ComponentC