<div class="container py-4 px-3 mx-auto">
  <div class="row mb-3">
    <div class="col-6">
      <h1 class="m-0" style="color: white">UMAI</h1>
    </div>
    <div class="col-6 d-flex align-items-center justify-content-end"  style="color: white">Welcome Dany!</div>
  </div>
  <div class="row">
    <div class="card">
      <h5 class="card-title">Buka Jasa Titip</h5>
      <form id="order-form" method="POST">
        <div class="mb-3">
          <label for="orderBy" class="form-label">Pemesanan lewat</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Pilih cara pemesanan</option>
            <option value="grab">Grab</option>
            <option value="gojek">Gojek</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Restoran</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Pilih restoran</option>
            <option value="mie gacoan">Mie Gacoan</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="lastOrderAt" class="form-label">Order ditutup pada</label>
          <input type="time" class="form-control" id="lastOrderAt">
        </div>
        <button type="submit" class="btn btn-primary">Simpan</button>
      </form>
    </div>
  </div>
</div>