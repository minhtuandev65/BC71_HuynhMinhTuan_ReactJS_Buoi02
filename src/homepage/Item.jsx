import React, { Component } from "react";
import "./css/Item.css";

export default class Item extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            {/* Item 1 */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div class="card bg-light border-0 h-100">
                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div class="iconStyle bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="fs-4 fw-bold">Fresh new layout</h2>
                  <p class="mb-0">
                    With Bootstrap 5, we've created a fresh new layout for this
                    template!
                  </p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div class="card bg-light border-0 h-100">
                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div class="iconStyle bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-cloud-download"></i>
                  </div>
                  <h2 class="fs-4 fw-bold">Free to download</h2>
                  <p class="mb-0">
                    As always, Start Bootstrap has a powerful collectin of free
                    templates.
                  </p>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div class="card bg-light border-0 h-100">
                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div class="iconStyle bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-card-heading"></i>
                  </div>
                  <h2 class="fs-4 fw-bold">Jumbotron hero header</h2>
                  <p class="mb-0">
                    The heroic part of this template is the jumbotron hero
                    header!
                  </p>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div class="card bg-light border-0 h-100">
                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div class="iconStyle bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-bootstrap"></i>
                  </div>
                  <h2 class="fs-4 fw-bold">Feature boxes</h2>
                  <p class="mb-0">
                    We've created some custom feature boxes using Bootstrap
                    icons!
                  </p>
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div class="card bg-light border-0 h-100">
                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div class="iconStyle bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-code"></i>
                  </div>
                  <h2 class="fs-4 fw-bold">Simple clean code</h2>
                  <p class="mb-0">
                    We keep our dependencies up to date and squash bugs as they
                    come!
                  </p>
                </div>
              </div>
            </div>
            {/* Item 6 */}
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div class="card bg-light border-0 h-100">
                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div class="iconStyle bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-patch-check"></i>
                  </div>
                  <h2 class="fs-4 fw-bold">A name you trust</h2>
                  <p class="mb-0">
                    Start Bootstrap has been the leader in free Bootstrap
                    templates since 2013!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
