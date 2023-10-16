import { redirect } from '@sveltejs/kit'

export const actions = {
  login: async (event) => {
    // TODO log the user in
  },
  register: async (event) => {
    throw redirect(302, '/register')
  }
};