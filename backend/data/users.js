import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Tope',
    email: 'tope@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ayo',
    email: 'ayo@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users