import { client, q } from '../config/db'

const deleteEntry = (noteId, newText) => client.query(
  q.Update(
    q.Ref(q.Collection('current'), noteId),
    { data: { text: newText } },
  )
)
.then((ret) => console.log(ret))
.catch(err => console.warn(err))


export default deleteEntry