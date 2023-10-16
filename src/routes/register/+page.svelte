<div class="row">
  <div class="col-6">
    <div class="row">
      <span class="brand">UMAI</span>
    </div>
    <div class="row">
      <span class="brand-tagline">COMFORTABLE EATING</span>
    </div>
  </div>
</div>
<form class="mt-4">
  <div class="card">
    <div class="card-body">
      <div class="mb-3">
        <label for="name" class="form-label">Nama</label>
        <input type="text" name="name" class="form-control" id="name" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp">
        <div id="emailFeedback" class="invalid-feedback">
          Please provide a valid email.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" name="password" class="form-control" id="exampleInputPassword1">
      </div>
    </div>
    <div class="d-grid col-8 mx-auto">
      <button on:click={handleSubmit} type="submit" class="btn btn-primary block my-2">Masuk</button>
      <div class="d-inline-block text-center">

        <span>Belum punya akun?</span><a href="/register" formaction="?/register" class="btn btn-link">Daftar</a>

      </div>
    </div>
  </div>
</form>


<style>
    .brand {
        color: white;
        font-family: Gothic A1;
        font-size: 24px;
        font-weight: 900;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
    }
    .brand-tagline {
        color: white;
        font-family: Gothic A1;
        font-size: 6px;
        font-weight: 900;
        line-height: 8px;
        letter-spacing: 0em;
        text-align: left;
    }
    input.form-control {
        border-radius: 100px;
        box-shadow: none;
    }
</style>