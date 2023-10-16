// import { error, redirect } from '@sveltejs/kit'
//
// /** @type {import('./$types').PageLoad} */
// export function load({ params }) {
//   const isBrowser = typeof window !== 'undefined'
//   if (!isBrowser) return
//   // let users = localStorage.users ?? []
//   // let dany = users.find(user => user.email === 'dany@jala.tech')
//   // console.log(dany)
//   //
//   // if (!dany) {
//   //   users.push({
//   //     name: 'Dany M.G.',
//   //     email: 'dany@jala.tech',
//   //   })
//   //   localStorage.setItem('users', JSON.parse(users))
//   // }
//   const user = localStorage.user
//   if (!user) throw redirect(307, '/login')
//   return user
// }