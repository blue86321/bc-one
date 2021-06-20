# Project - BC One

Chunwei's first <b>React</b> project, which clones main features of [RedBull BC One website](https://www.redbull.com/int-en/event-series/bc-one).

## Introduction

Using <b>React</b> class components, this project includes:
* image slider
* React `Router`
* `axios` with proxy server to deal with CROS (need to start the proxy server in `src/adapter/proxy-server.js`, otherwise all data is test data)
* css based on `less`

## Project Preview
### main page
![](https://github.com/blue86321/bcone/ProjectPreview_01.gif)

### `Router`
![](https://github.com/blue86321/bcone/ProjectPreview_02.gif)

## Features waiting to improve/develop
* **Lazy Load and Loading Effect**
    ```js
    // lazy load
    import { lazy } from 'react'
    lazy(() => import('./ComponentName'))
    ```
* **Error Boundary**
    ```js
    static getDerivedStateFromError(error){... return {hasError:true}}
    ```
* **Implement `PureComponent` to reduce `render` (compare address of variables in `this.state`)**
    ```js
    class componentName extends PureComponent(){...}
    // or overwrite shouldComponentUpdate()
    ```
* **Image Crop Analysis**
RedBull api return imageURL as `https://img.redbull.com/images/{op}/...`, where `{op}` is different in every image to get the best crop from origin images. How does `{op}` generate is remained unknown for me.

* **User Login Module**