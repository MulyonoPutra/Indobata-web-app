import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <div class="jumbotron" style="color: #40a11ade;">
      <div
        class="title-header animate__animated animate__zoomInDown font-poppins"
      >
        <h1>Our Product</h1>
        <div style="color: #ffffff23;">
          <h2>Indobata</h2>
          <h3>Concrete Roof Tile & Concrete Block Manufacturing</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="mt-4 mb-2" data-aos="zoom-out-left">
        <div class="container">
          <!-- Button -->
          <div class="row">
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
              (click)="showGentengImage()"
            >
              Genteng Beton
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
              (click)="showPavingImage()"
            >
              Paving Block
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
              (click)="showRosterImage()"
            >
              Roster
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
              (click)="showBatakoImage()"
            >
              Batako Press
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Kanstin
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Buis Beton
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Rangka Atap Baja Ringan
            </button>
            <button
              type="button"
              class="btn btn-outline-success btn-lg ml-2 col"
            >
              Ubin Difabel
            </button>
          </div>
          <!-- Button -->
        </div>
        &nbsp;
        <div class="container">
          <div style="border-radius: 20px;">
            <div>
              <!-- Empty Image Preview -->
              <div class="container">
                <div *ngIf="emptyImage" style="height: 350px;">
                  <!-- <h1 style="color: rgb(187, 187, 187); text-align: center;">
                Click to Show Image
              </h1> -->
                </div>
              </div>

              <!-- Genteng -->
              <div class="container">
                <div class="ml-5" *ngIf="gentengBeton">
                  <div class="row" data-aos="zoom-in-down">
                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/genteng1.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Genteng Beton</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/genteng2.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Genteng Beton</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/genteng3.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Genteng Beton</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/genteng4.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Genteng Beton</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Paving -->
              <div class="container">
                <div class="ml-5" *ngIf="pavingBlock">
                  <div class="row" data-aos="zoom-in-down">
                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/paving5.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Paving Hexagon 6cm mnl</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/paving2.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Paving Antik</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/kanstin3.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Kanstin M</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/paving4.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Paving Bata Hidrolik</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/kanstin4.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Kanstin M</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/kanstin4.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Kanstin Taman</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Roster -->
              <div class="container">
                <div class="ml-5" *ngIf="roster">
                  <div class="row" data-aos="zoom-in-down">
                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/roster.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Roster Bintang 30×30</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/roster2.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Roster Minimalis 15×30</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          class="card-img-top img-size"
                          src="assets/img/roster3.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Roster Kotak 9 20×20</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="zoom card-img-top img-size"
                          src="assets/img/roster4.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Roster Bintang 20×20</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Batako -->
              <div class="container">
                <div class="ml-5" *ngIf="batako">
                  <div class="row" data-aos="zoom-in-down">
                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/batako-super.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Batako Super</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          style="margin: auto;"
                          class="card-img-top img-size"
                          src="assets/img/batako-jumbo.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Batako Jumbo</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>

                    <div class="col res">
                      <div
                        class="card shadow zoom"
                        style="
                      width: 18rem;
                      padding: 10px;
                      border-radius: 20px 50px;
                      margin-bottom: 20px;
                    "
                      >
                        <img
                          class="card-img-top img-size"
                          src="assets/img/batako-press.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <p class="card-text">Batako Press</p>
                          <p style="text-align: center;">Harga: 15.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Big Container -->
    </div>
  `,
})
export class ProductComponent implements OnInit {
  public emptyImage: any;
  public gentengBeton: any;
  public pavingBlock: any;
  public roster: any;
  public batako: any;

  constructor() {}

  ngOnInit(): void {
    this.emptyImage = true;
  }

  public showGentengImage() {
    this.gentengBeton = true;
    if (this.gentengBeton) {
      this.emptyImage = this.pavingBlock = this.roster = this.batako = false;
    }
  }

  public showPavingImage() {
    this.pavingBlock = true;
    this.emptyImage = this.gentengBeton = this.roster = this.batako = false;
  }

  public showRosterImage() {
    this.roster = true;
    this.emptyImage =
      this.gentengBeton =
      this.pavingBlock =
      this.batako =
        false;
  }

  public showBatakoImage() {
    this.batako = true;
    this.emptyImage =
      this.gentengBeton =
      this.roster =
      this.pavingBlock =
        false;
  }
}
