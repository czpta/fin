import { client, q } from '../config/db'

const deleteEntry = noteRef => client.query(
  q.Delete(q.Ref(q.Collection('current'), noteRef))
)
.then(res => res)
.catch(err => console.warn(err.message))

export default deleteEntry