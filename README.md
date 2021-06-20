# Project - BC One

Chunwei's first <b>React</b> project, which clones main features of offical RedBull BC One website.
* [Project Preview](https://blue86321.github.io/bc-one/) (test data by default)
* [Official RedBull BC One website](https://www.redbull.com/int-en/event-series/bc-one)

**Note:** `Projecct Preview` implement test data by default, because real data need a proxy server dealing with **CORS problem**.
To get real data:
1. Clone the repository
2. Start the proxy server
    2.1. `cd {repo}/src/adapter`
    2.2. `node proxy-server.js`
3. Visit [Project Preview](https://blue86321.github.io/bc-one/)

## Introduction

Using <b>React</b> class components, this project includes:
* image slider
* React `Router`
* `axios` with proxy server to deal with CORS (need to start the proxy server in `src/adapter/proxy-server.js`, otherwise all data is test data)
* css based on `less`

## Project Preview
* ### main page
![](https://github.com/blue86321/bc-one/blob/master/ProjectPreview_01.gif)

* ### `Router`
![](https://github.com/blue86321/bc-one/blob/master/ProjectPreview_02.gif)

## Features waiting to improve/develop
* **Lazy Load and Loading Effect**
    ```jsx
    // lazy load
    import { lazy } from 'react'
    lazy(() => import('./ComponentName'))
    
    // loading effect
    import { Suspense } from 'react'
    import LoadingEffect from './LoadingEffect'
    <Suspense fallback={<LoadingEffect/>}>
        <Route path="/xxx" component={componentName}/>
        <Route path="/xxx" component={componentName}/>
    </Suspense>
    ```
* **Error Boundary**
    ```jsx
    // in parent components
    static getDerivedStateFromError(error){
        // do something
        return {hasError:true}
    }
    render(){
        return (
            {this.state.hasError ? <h2>Error...</h2> : <ChildComponent/>}
        )
    }
    ```
* **Implement `PureComponent` to reduce `render` (simply compare variable address in `this.state` to decide whether to render or not)**
    ```jsx
    import { PureComponent } from 'react'
    class componentName extends PureComponent(){...}
    // or manually overwrite shouldComponentUpdate()
    ```
* **Image Crop Analysis**
RedBull api return `imageURL` as `https://img.redbull.com/images/{op}/...`, where `{op}` is different in every image to crop images. How does `{op}` generate is remained unknown for me. I hard coded `{op}` in this project.

* **Redux**
    init `react-redux` but never used in this project since there is no such scenario. May use `react-redux` when developing <b>user login module</b>.
* **Functional Component**
    I might practice `fucntional component` in the next project.