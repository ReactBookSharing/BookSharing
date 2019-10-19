import React, { Component } from "react";
import "./BookFiltering.css";
class BookFiltering extends Component {
  render() {
    return (
        <div class="col-xl-3 col-lg-3 col-md-12">
          <div class="card overflow-hidden">
            <div class="px-4 py-3 border-bottom">
              <h4 class="mb-0">Categories</h4>
            </div>
            <div class="card-body">
              <div class="" id="container">
                <div class="filter-product-checkboxs">
                  <label class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      name="checkbox7"
                      value="option3"
                    />
                    <span class="custom-control-label">
                      <a href="" class="text-dark">
                        Killington
                        <span class="label label-secondary float-right">
                          05
                        </span>
                      </a>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default BookFiltering;
