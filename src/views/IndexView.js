/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import PostView from './PostView'
import PostView from './PostView'
import PostView from './PostView'
import PostView from './PostView'
import PostView from './PostView'
import PostView from './PostView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5f166dff79f98fa4570f5b3f").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\blog-cf8ba0.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-nav w-nav">
              <div className="w-container">
                <a href="#" className="w-nav-brand">
                  <div className="af-class-text-block-2">Zachary Myers</div>
                </a>
                <nav role="navigation" className="w-nav-menu"><a href="#" className="af-class-link w-nav-link">Home</a><a href="#" className="af-class-link w-nav-link">About</a><a href="#" className="af-class-link w-nav-link">Contact</a></nav>
                <div className="w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-hero-header">
              <div className="af-class-hero-container w-container">
                <div className="af-class-abv-title">Welcome to</div>
                <h1 className="af-class-title">Zack's Blog.</h1>
              </div>
            </div>
            <div className="w-container">
              <div className="w-layout-grid af-class-grid">
                <PostView.Controller />
                <PostView.Controller />
                <PostView.Controller />
                <PostView.Controller />
                <PostView.Controller />
                <PostView.Controller />
              </div>
            </div>
            <div className="af-class-footer">
              <div className="af-class-ftr-text">Built by Zack</div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */