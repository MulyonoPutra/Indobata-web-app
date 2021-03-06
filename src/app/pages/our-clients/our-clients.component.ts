import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div class="jumbotron" style="color: #40a11ade;">
      <div
        class="title-header animate__animated animate__zoomInDown font-poppins"
      >
        <h1>Our Clients</h1>
        <div style="color: #ffffff23;">
          <h2>Indobata</h2>
          <h3>Concrete Roof Tile & Concrete Block Manufacturing</h3>
        </div>
      </div>
    </div>

    <div class="container mb-5">
      <div class="card-group">
        <div data-aos="zoom-in-down" class="card ml-2 shadow zoom">
          <img
            src="assets/img/tiara.jpg"
            class="card-img-top oc-img"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="text-align: center;">
              Perumahan Tiara Regency
            </h5>
            <p class="card-text">
              Limbangan, Kec. Sukaraja, Sukabumi Regency, Jawa Barat 43192
            </p>
            <p class="card-text">
              <a
                href="https://www.facebook.com/tiararegencysukabumi/"
                target="blank"
              >
                <small class="text-muted"> Details </small>
              </a>
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-down" class="card ml-2 shadow zoom">
          <img
            src="assets/img/jugala.jpg"
            class="card-img-top oc-img"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="text-align: center;">
              Jugala Residence
            </h5>
            <p class="card-text">
              Batununggal, Kec. Cibadak, Sukabumi Regency, Jawa Barat 43351
            </p>
            <p class="card-text">
              <a href="" target="blank">
                <small class="text-muted"> Details </small>
              </a>
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-down" class="card ml-2 shadow zoom">
          <img src="assets/img/bnn.png" class="card-img-top oc-img" alt="..." />
          <div class="card-body">
            <h5 class="card-title" style="text-align: center;">BNN Lido</h5>
            <p class="card-text">
              Jl. HR Edi Sukma, Watesjaya, Cigombong, Bogor, Jawa Barat 16110
            </p>
            <p class="card-text">
              <a
                href="https://rehabilitasi.bnn.go.id/public/about"
                target="blank"
              >
                <small class="text-muted"> Details </small>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="card-group mt-3">
        <div data-aos="zoom-in-up" class="card ml-2 shadow zoom">
          <img
            src="assets/img/benda.jpg"
            class="card-img-top oc-img"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="text-align: center;">
              PT. Anugerah Bangun Sentosa
            </h5>
            <p class="card-text">
              Perum Griya Benda Asri 2 blok CE 1, Benda, Kec. Cicurug, Sukabumi
              Regency, Jawa Barat 43359
            </p>
            <p class="card-text">
              <a
                href="https://www.google.com/maps/uv?hl=id&pb=!1s0x2e69cc9152bec8ad%3A0xc25edabcc058dcd8!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPigY6aX3o-RZkxqi5-qOE90CLz-Wf25kQWt246%3Dw237-h200-k-no!5sperum%20griya%20benda%20asri%20-%20Penelusuran%20Google!15sCgIgAQ&imagekey=!1e10!2sAF1QipPigY6aX3o-RZkxqi5-qOE90CLz-Wf25kQWt246&sa=X&ved=2ahUKEwif_JuT8bzpAhUHXSsKHY1oDuMQoiowCnoECBAQBg  "
                target="blank"
              >
                <small class="text-muted" style="margin-bottom: auto;">
                  Details
                </small>
              </a>
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" class="card ml-2 shadow zoom">
          <img
            src="assets/img/adhita.jpg"
            class="card-img-top oc-img"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="text-align: center;">
              PT. Adhita Karya Pratama
            </h5>
            <p class="card-text">
              Jl Kartika Puspa Raya No.23, Bojong Baru, Kec. Bojong Gede, Bogor,
              Jawa Barat 16920
            </p>
            <p class="card-text">
              <a
                href="https://www.google.com/search?safe=strict&rlz=1C1CHBD_enID900ID900&sxsrf=ALeKk00s1E1K3f5ugOehgl8Xn5VGvZyQcA:1589786830014&q=graha%20kartika%20puspa%20raya&sa=X&ved=2ahUKEwiT2ZW68bzpAhX6zjgGHTxSDIEQvS4wAHoECAwQIA&biw=1536&bih=722&npsic=0&rflfq=1&rlha=0&rllag=-6489523,106803374,1241&tbm=lcl&rldimm=16262552073857839518&lqi=ChhncmFoYSBrYXJ0aWthIHB1c3BhIHJheWFaNAoYZ3JhaGEga2FydGlrYSBwdXNwYSByYXlhIhhncmFoYSBrYXJ0aWthIHB1c3BhIHJheWE&rldoc=1&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:16262552073857839518,l,ChhncmFoYSBrYXJ0aWthIHB1c3BhIHJheWFaNAoYZ3JhaGEga2FydGlrYSBwdXNwYSByYXlhIhhncmFoYSBrYXJ0aWthIHB1c3BhIHJheWE;mv:[[-6.4808892,106.8131164],[-6.5099795,106.7936335]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                target="blank"
              >
                <small class="text-muted"> Details </small>
              </a>
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" class="card ml-2 shadow zoom">
          <img
            src="assets/img/ciangsana.jpg"
            class="card-img-top oc-img"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style="text-align: center;">
              Kawasan Industri Cikembar
            </h5>
            <p class="card-text">
              Jl. Perintis Kemerdekaan Km. 6 KP Cimenteng RT 001 RW 005,
              Cikembar, Sukabumi, West Java 43157
            </p>
            <p class="card-text">
              <a href="" target="blank">
                <small class="text-muted"> Details </small>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div> `,
})
export class OurClientsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
