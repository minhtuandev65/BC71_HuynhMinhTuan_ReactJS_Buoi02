import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3">
            <div className="m-4 m-lg-5 text-center">
              <h1 className="display-5 fw-bold">A warm welcome!</h1>
              <p className="fs-4">
                Bootstrap utility classes are used to create this jumbotron
                since the old component has been removed from the framework. Why
                create custom CSS when you can use utilities?
              </p>
              <button className="btn btn-primary btn-lg">Call to action</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
