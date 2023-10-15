<script>
  import thumbnail1 from '$lib/assets/thumbnail-1.jpg'
  import thumbnail2 from '$lib/assets/thumbnail-2.jpg'
  import thumbnail3 from '$lib/assets/thumbnail-3.jpg'
  import thumbnail4 from '$lib/assets/thumbnail-4.jpeg'
  import thumbnail5 from '$lib/assets/thumbnail-5.png'
  import mieSetan from '$lib/assets/Mie setan.jpg'
  import mieAngel from '$lib/assets/mie angel.jpg'
  import userImg from '$lib/assets/user.jpg'
  import endraImg from '$lib/assets/endra.png'
  import udangRambutan from '$lib/assets/udang rembutan.jpg'

  let tab = 'login'
  let user = ''
  const orders = [
    {
      buyer: 'Endra Arif',
      shop: 'Mie Gacoan',
      last_order_at: '14:30',
      url: thumbnail1,
    },
    {
      buyer: 'Dima Alam',
      shop: 'Soto Ayam Syahid',
      last_order_at: '14:45',
      url: thumbnail2,
    },
    {
      buyer: 'Dany Muhammad',
      shop: 'Telur Ceplok',
      last_order_at: '15:00',
      url: thumbnail3,
    },
    {
      buyer: 'Amalia',
      shop: 'Ankringan Syahid',
      last_order_at: '13:50',
      url: thumbnail4,
    },
    {
      buyer: 'Arin',
      shop: 'Mie Ayam Papa',
      last_order_at: '14:00',
      url: thumbnail5,
    },
  ]
  const menus = [
    { name: 'Mie Angel', 'price': 9000, url: mieSetan, quantity: 0},
    { name: 'Mie Setan', 'price': 9000, url: mieAngel, quantity: 0},
    { name: 'Mie Iblis', 'price': 9000, url: thumbnail1, quantity: 0},
    { name: 'Udang Rambutan', 'price': 10000, url: udangRambutan, quantity: 0},
  ]
  const orderItems = [
    { name: 'Mie Goreng Setan Pangsit', 'price': 34000, 'quantity': 3, url: mieSetan}
  ]
  function reduceQuantity(order) {
    if (order.quantity > 0) order.quantity--
  }
  function addQuantity(order) {
    order.quantity++
  }
  function handleLogin() {
    let email = document.getElementById('exampleInputEmail1').value
    let arr = email.split('@')
    console.log(email.split('@'))
    user = email ? arr[0] : 'guest'
    tab = 'buyer'
  }
  function buyerClick() {
    tab = 'buyer'
  }
  function sellerClick() {
    tab = 'seller'
  }
  $: countItem = () => {
    return menus.filter(menu => menu.quantity > 0).length
  }
  $: totalItem = () => {
    return menus.filter(menu => menu.quantity > 0).reduce((total, {quantity, price}) => total + (quantity * price), 0)
  }
</script>
<div class="container mt-3">
  {#if tab==='login'}
    <div class="card px-3" style="margin-top: 40px;background-color: #4B92D4; border: 0">
      <div class="d-block" style="margin-left: 46px">
        <h1 class="login-title">UMAI</h1>
        <span class="login-title" style="font-size: 24px;">COMFORTABLE EATING</span>
      </div>
      <form class="my-5">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label login-label">Email address</label>
          <input style="border-radius: 100px" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label  login-label">Password</label>
          <input style="border-radius: 100px" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="d-flex justify-content-center" style="margin-top: 100px">
          <button on:click={handleLogin} type="submit" class="btn btn-light" style="border-radius: 100px; width: 200px; color: #8385BC">Login</button>
        </div>
      </form>
    </div>
  {:else }
    <div class="row mb-1">
      <div class="col-6">
        <h1 class="mb-0" style="color: white">UMAI</h1>
        <span style="font-size: 12px;color: white;">COMFORTABLE EATING</span>
      </div>
      <div class="col-6 d-flex align-items-center" style="justify-content: end; color: white">
        Welcome {user}!
      </div>
    </div>
    <div class="row mb-1">
      <div class="col-6">
        {#if tab==='join order'}
          <button on:click={buyerClick} type="button" class="btn btn-close-white" style="border-radius: 100px"><i class='bx bx-chevron-left' ></i>Back</button>
        {/if}
      </div>
      <div class="col-6" style="display: flex;justify-content: end">
        <button on:click={buyerClick} type="button" class="{tab !== 'seller' ? 'btn btn-warning me-1' : 'btn btn-secondary me-1'}" style="border-radius: 100px">Buyer</button>
        <button on:click={sellerClick} type="button" class="{tab === 'seller' ? 'btn btn-warning' : 'btn btn-secondary'}" style="border-radius: 100px">Seller</button>
      </div>
    </div>
    {#if tab === 'buyer'}
      <div class="row">
        {#each orders as order}
          <div class="col-sm-12 col-md-6">
            <div on:click={() => {tab = 'join order'}} class="card p-3 order-list mb-2 d-flex" style="height: 100px; border-radius:8px">
              <div class="row">
                <div class="col-3">
                  <img class="img-thumbnail" src="{order.url}" alt="Deskripsi Gambar"  height="70" width="70"/>
                </div>
                <div class="col-8">
                  <p class="open-order-label">{order.buyer}</p>
                  <p class="open-order-label" style="font-size: 14px;color: rgba(255, 255, 255, 0.7)">Restoran: {order.shop}</p>
                  <p class="open-order-label" style="font-size: 14px;color: rgba(255, 255, 255, 0.7)">Tutup order: {order.last_order_at}</p>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else if tab === 'join order'}
      <div class="row">
        <div class="col-12 d-md-flex justify-content-md-center">
          <div class="card p-3 order-list mb-2 d-flex" style="height: 100px; border-radius:8px; max-width: 500px">
            <div class="row">
              <div class="col-3">
                <img src="{endraImg}" class="img-thumbnail"  alt="Deskripsi Gambar"  height="70" width="70"/>
              </div>
              <div class="col-8">
                <p class="open-order-label">Endra Arif</p>
                <p class="open-order-label" style="color: rgba(255, 255, 255, 0.7)">Restoran: Mie Gacoan</p>
                <p class="open-order-label" style="color: rgba(255, 255, 255, 0.7)">Tutup order: 14:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12 text-center">
          <button style="border-radius: 100px; border: 1px solid white; width: 200px">Menu Mie Gacoan</button>
        </div>
      </div>
      <div class="row">
        {#each menus as item}
          <div class="col-sm-12 col-md-6">
            <div class="card p-3 order-list mb-2 d-flex" style="height: 110px; border-radius:8px">
              <div class="row">
                <div class="col-3">
                  <img class="img-thumbnail" src="{item.url}" alt="Deskripsi Gambar"  height="70" width="70"/>
                </div>
                <div class="col-8">
                  <p class="open-order-label">{item.name}</p>
                  <p class="open-order-label" style="font-size: 14px;color: rgba(255, 255, 255, 0.7)">Rp {item.price}</p>
                  <button on:click={ () => item.quantity > 0 ? item.quantity--:null} class="btn btn-sm btn-light" style="border-radius: 100px"><i class='bx bx-minus'></i></button>
                  <input type="number" value="{item.quantity}" style="max-width: 50px">
                  <button on:click={() => item.quantity++} class="btn btn-sm btn-light" style="border-radius: 100px"><i class='bx bx-plus'></i></button>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="row">
        <div class="col-12 d-md-flex justify-content-md-center">
          <div class="card p-3 order-list mb-2 d-flex" style="height: 100px; border-radius:8px; max-width: 500px">
            <div class="row">
              <div class="col-3">
                <img src="{userImg}" class="img-thumbnail"  alt="Deskripsi Gambar"  height="70" width="70"/>
              </div>
              <div class="col-8">
                <p class="open-order-label">Dany Muhammad G.</p>
                <p class="open-order-label" style="color: rgba(255, 255, 255, 0.7)">Restoran: Mie Gacoan</p>
                <p class="open-order-label" style="color: rgba(255, 255, 255, 0.7)">Tutup order: 14:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-12 text-center">
          <button style="border-radius: 100px; border: 1px solid white; width: 200px">Menu Mie Gacoan</button>
        </div>
      </div>
      <div class="row">
        {#each menus.filter((menu) => menu.quantity > 0) as item}
          <div class="col-sm-12 col-md-6">
            <div class="card p-3 order-list mb-2 d-flex" style="height: 100px; border-radius:8px">
              <div class="row">
                <div class="col-3">
                  <img class="img-thumbnail" src="{item.url}" alt="Deskripsi Gambar"  height="70" width="70"/>
                </div>
                <div class="col-8">
                  <p class="open-order-label">{item.name}</p>
                  <p class="open-order-label" style="font-size: 14px;color: rgba(255, 255, 255, 0.7)">Jumlah: {item.quantity}x</p>
                  <p class="open-order-label" style="font-size: 14px;color: rgba(255, 255, 255, 0.7)">Rp {item.price}</p>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <div class="card order-list mb-2 d-flex" style="padding: 4px;border-radius:8px; width: 200px">
            <p class="open-order-label" style="font-size: 14px;color: white">{countItem()} item</p>
            <p class="open-order-label" style="font-size: 14px;color: white">Rp {totalItem()}</p>
          </div>
        </div>
      </div>
    {/if}
  {/if}

</div>
<style>
    .login-label {
        color: white;
    }
    .login-title {
        color: white;
        font-size: 80px;
        margin-bottom: 4px;
    }
    .brand {
        color: white;
        font-family: Gothic A1;
        font-size: 32px;
        font-style: normal;
        font-weight: 900;
        line-height: 130%; /* 41.6px */
        margin: 0;
    }
    .tagline {
        margin: 0;
        color: white;
        font-family: Gothic A1;
        font-size: 6px;
        font-weight: 900;
        line-height: 8px;
        letter-spacing: 0em;
        text-align: left;

    }
    .open-order-label {
        font-family: Gothic A1;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;

        color: white;
        margin: 0;
        padding: 0;
    }
    .order-list {
        background-color: #333333;

    }
</style>