import { client, q } from '../config/db'

const getAllEntries = client.query(
  q.Paginate(
    q.Match(
      q.Ref('indexes/loan_amount')))
)
  .then(response => {
    const notesRefs = response.data
    // create new query out of notes refs. 
    // https://docs.fauna.com/fauna/current/api/fql/
    const getAllProductDataQuery = notesRefs.map((ref) => {
      return q.Get(ref)
    })
    // query the refs
    return client.query(getAllProductDataQuery).then((data) => data)
  })
  .catch(error => console.warn('error', error.message))

export default getAllEntries;