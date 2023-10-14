import { redirect } from '@sveltejs/kit'

export const actions = {
  default: async (event) => {
    console.log('submit')
    let user = localStorage.getItem('user') ?? 'dany'
    let orders = localStorage.getItem('orders') ?? []
    orders.push({
      order_by: user,
      shop: 'Gojek',
      last_order_at: document.getElementById('lastOrderAt').value,
    })
    localStorage.setItem('orders', orders)
    throw redirect(302, '/dashboard');
  }
};