import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Lauryn Claxton',
    email: 'lncsstreats@gmail.com',
    number: '432-425-5029',
    password: bcrypt.hashSync('Dominic11', 10),
    isAdmin: true,
  },
  {
    name: 'Josh Claxton',
    email: 'jrccode@outlook.com',
    number: '432-425-2593',
    password: bcrypt.hashSync('Qzl225ldci', 10),
  },
]
export default users
