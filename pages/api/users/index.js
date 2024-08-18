export default function users(req, res) {
    const users = [
        { id: 1, name: 'Gabriel'},
        { id: 2, name: 'Marcus'},
        { id: 3, name: 'Arthur'},
        { id: 4, name: 'Rafa'}
    ]

    return res.json(users)
  }