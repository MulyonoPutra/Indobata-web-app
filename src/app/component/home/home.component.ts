import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div>
    <div class="jumbotron" style="color: #40a11ade;">
      <div
        class="title-header animate__animated animate__zoomInDown font-poppins"
      >
        <h1>Indobata</h1>
        <h2 style="color: #6b6363a1;">
          Concrete Roof Tile & Concrete Block Manufacturing
        </h2>
      </div>
    </div>

    <section
      class="mb-4 animate__animated animate__flipInY"
      data-aos="flip-left"
    >
      <br />
      <div id="article" class="row justify-content-center rounded-top">
        <div class="card vision mr-2 animate__fadeInTopLeft">
          <img
            class="card-img-top mb-2 mt-3"
            srcset="assets/img/business.png"
            alt="Save Money"
          />
          <h4
            class="font-poppins"
            style="text-align: center; color: rgb(36, 35, 35);"
          >
            Save Money
          </h4>
          <div class="card-body">
            <p class="card-text" style="text-align: center;">
              Produk dengan bahan beton berkualitas dan mampu bersaing dengan
              perusahaan konstruksi nasional, Indobata mampu memberikan harga
              jual yang terjangkau oleh masyarakat.
            </p>
          </div>
        </div>
        <div class="card vision mr-2">
          <img
            class="card-img-top mb-2 mt-3"
            src="assets/img/medal.png"
            alt="Good Quality"
          />
          <h4
            class="font-poppins"
            style="text-align: center; color: rgb(36, 35, 35);"
          >
            Good Quality
          </h4>
          <div class="card-body">
            <p class="card-text" style="text-align: center;">
              Menggunakan bahan baku bermutu dengan pengawasan yang baik sesuai
              standar yang ada sehingga banyak digunakan dalam berbagai proyek,
              baik berskala nasional maupun lokal.
            </p>
          </div>
        </div>
        <div class="card vision me-2">
          <img
            class="card-img-top mb-2 mt-3"
            src="assets/img/management.png"
            alt="Innovation"
          />
          <h4
            class="font-poppins"
            style="text-align: center; color: rgb(36, 35, 35);"
          >
            Innovation
          </h4>
          <div class="card-body">
            <p class="card-text" style="text-align: center;">
              Indobata terus melakukan inovasi dalam mengembangkan produk hingga
              tidak ketinggalan trend desain arsitektur yang terus berkembang.
            </p>
          </div>
        </div>
      </div>
      <br />
    </section>
    <!-- <hr class="line"> -->

    <div class="mb-4" style="color: rgb(109, 109, 107);">
      <div class="container">
        <article style="text-align: center;">
          <p>
            CV. Indobata berdiri sejak tahun 2003
            <br />
            merupakan perusahaan yang memproduksi bahan konstruksi berupa
            genteng beton, ubin, paving block (conblock),
            <br />
            batako press, buis beton (gorong-gorong), roster atau loster,
            kansteen (kanstin), serta genteng keramik berbagai merk.
            <br />
            Dengan harga yang relatif murah namun kami tidak melupakan nilai
            estetika dari suatu produk,
            <br />
            kami memilih bahan baku dengan kualitas terbaik, Dengan harga
            terjangkau, relatif murah.
            <br />
            Akan tetapi, Indobata tetap mengedepankan nilai estetika serta
            menggunakan bahan baku dengan kualitas terbaik yang telah
            terstandarisasi.
          </p>
        </article>
      </div>
    </div>
    <!-- <hr class="line"> -->

    &nbsp; &nbsp;
    <section id="our-product" class="mb-4">
      <h1 style="text-align: center; font-size: 35px;" class="font-poppins">
        Produk Kami
      </h1>
      &nbsp;
      <div
        data-aos="zoom-in-down"
        class="row justify-content-center rounded-top"
      >
        <div class="card ex-product mr-2 zoom" style="width: 20rem;">
          <img
            class="card-img-top"
            src="assets/img/ubin.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text" style="text-align: center;">Ubin Difable</p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          class="card ex-product mr-2 zoom"
          style="width: 20rem;"
        >
          <img
            class="card-img-top"
            src="assets/img/kanstin.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text mt-4" style="text-align: center;">Kanstin S</p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          class="card ex-product mr-2 zoom"
          style="width: 20rem;"
        >
          <img
            class="card-img-top"
            src="assets/img/batako.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text mt-4" style="text-align: center;">
              Batako Press
            </p>
          </div>
        </div>
      </div>
      &nbsp; &nbsp;
      <div style="text-align: center;" class="col-md-auto">
        <button
          id="btn-product"
          class="btn btn-primary border"
          [routerLink]="['/product']"
          routerLinkActive="router-link-active"
        >
          View All Product
        </button>
      </div>

      &nbsp;
    </section>

    &nbsp; &nbsp;
    <section id="marketplace" style="min-height: 320px;" class="bg-section">
      <div class="container">
        <div class="row pb-4 mb-5">
          <div class="col mb-5 text-center" style="margin-left: 40px;">
            &nbsp;
            <h1 class="font-poppins" style="text-align: center;">
              Tersedia di Marketplace
            </h1>
            <div class="row mt-5" data-aos="zoom-in-down">
              <a href="https://www.tokopedia.com/" target="_blank">
                <img
                  class="col card-img-top brand1"
                  src="assets/img/tokopedia.png"
                  alt="tokopedia"
                />
              </a>
              <a href="https://www.bukalapak.com/" target="_blank">
                <img
                  class="col card-img-top brand"
                  src="assets/img/bukalapak.png"
                  alt="Bukalapak"
                />
              </a>
              <a href="https://www.lazada.com/" target="_blank">
                <img
                  class="col card-img-top brand"
                  src="assets/img/lazada.png"
                  alt="Lazada"
                />
              </a>
              <a href="https://www.shopee.com/" target="_blank">
                <img
                  class="col card-img-top brand"
                  src="assets/img/shopee.png"
                  alt="Shopee"
                />
              </a>
              <a href="https://www.blibli.com/" target="_blank">
                <img
                  class="col card-img-top brand"
                  src="assets/img/blibli.png"
                  alt="Blibli"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> `,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const btn = document.getElementById('btn-product');

    btn.innerHTML = 'View Our Product';
    btn.style.borderRadius = '25px';
  }
}
