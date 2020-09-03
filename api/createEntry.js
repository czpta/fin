import { client, q } from '../config/db'

const createEntry = text => client.query(
  q.Create(
    q.Collection('current'),
    {
      data: {
        text
      },
    },
  )
)
.then(ret => ret)
.catch(err => console.warn(err))


export default createEntry