# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.








<!-- naste react -->

***React hooks:***
-Normal javascript  function.it has some    super powers
-its kind of some utility function
-useState()- superpowerful state variable in react
-useEffect()

**useRouteError**
for error components like 404 forbiddon

**createBrowserRouter**
creating routing configeration
createBrowserrouter takes some configeration as list of objects

eg:if the path is "/about" load my about page,that is telling configeration

**Routerprovider**
provide configeration to our app

providing routing configeration to rendering page

**useParams()**
useParams() helps access dynamic URL parameters inside a component.

Useful for fetching data, displaying details, or performing operations based on the URL.

Works only inside components wrapped with < Router>.



**class component**

its a normal javascript class which extends from react.component and its have a render function that returns a pies of jsx code.

applying props using constructor,super,and this.

for state variable we are using this.state! this.state is a bigobject contains all state variable.so we can create one or more state variable in this.state object


**classcomponentrendering**
when classcomponent rendering,first calls constructor,then render method,then child constructor,then child render method,then child componentdidmount method,finally calls parent componentdidMunt method

if parent have multple childen it follows:
    parent constructor             
    parent render                  |
    firstchild constructor         |
    firstchild render              |  render phase
    secondchild constructor        |
    secondchild render
    <!-- Dom updated through below-->
    firstchild componentdidmount   |
    secondchild componentdidmount  |  commit phase
    parent componentdidmount       |


**componentDidMount**
this method is used for Api calling in class compound method


**rendering react**
first of all we loaded the component,once the component loaded with basic details,then we make api call,then rendering the data.
react is not waiting for api call


**lifecycleMethod**
1.rendering/mounting
2.updating
3.unmounting


**componentWIllUnmount**
-used for cleanup
-react is using only one html page.when we are requestiong for another page react will be updated the page.at the time componentWillUnmount clean up that page.(automatically cleanup,but in the case od set intervel we want to write code)

eg:componentDidMount(){
   this.timer= setInterval(()=>{
        console.log("nameaset")
    },1000)
}

componentWillUnmount(){
    clearInterval(this.timer)
    console.log("component unmount")
}


**unmounting in functionbased component**
useeffect(()=>{
    const timer=setInterval(()=>{
        console.log("nameset")
    },1000)

    console.log("useeffect")
<!-- unmounting -->
    return()=>{
        clearInterval(timer);
        console.log("unmount)
    }
},[]);


**react advantage**
-reusable
-maintainable
-readable
-testable


**creating owncustomhooks**
-It's a normal JavaScript helper function.
-We can create our own custom hooks, just like we create components.
-The only rule is: the name of a hook must start with use, like useRestaurantMenu.


**bundling**
-Bundling is one of the main functionalities of Vite (and other build tools).
-Bundling means combining all your files (JavaScript, CSS, etc.) into one or more optimized files that the browser can load efficiently.
-This helps improve performance and loading speed in production.


**chunking/lazy loading/dynamic bundling**
whenever user going on to the particular page,then only load the page
Lazy loading means loading a component only when it is needed, not during the initial render.

For example:
    -Imagine your app has two main components:
        Flight Booking
        Bus Booking
    -On initial load, only Bus Booking is loaded.
    -Flight Booking is loaded only when the user clicks on it.

-This improves performance by reducing the initial bundle size and loading only what's necessary.
-for implimenting this we are using lazy,suspense and fallback


**suspense**
Suspense is a special React component used to handle lazy loading.
It tells React:
👉 “While this lazy-loaded component is loading, show something else (like a loader).”


**fallback**
-fallback is a prop you pass to Suspense.
-It defines what to show while waiting for the component to load.
-Usually, it’s a loading spinner, text, or a skeleton screen.


**postcssrc**
parcel is used postcssrs to read tailwind


**useRef**
-useRef is a hook in React used to store a reference to a DOM element or value without re-rendering the component.
-We use the useRef hook when we want to directly access or reference a DOM element, like an input field.
-For example, if we have an input field for email verification and we want to get its value without using state, we can use useRef.
-First, we create a ref using const emailRef = useRef(null), then attach it to the input field using ref={emailRef}.
-Later, we can access the value like emailRef.current.value.


**higherordercomponent**
-it's a function that takes a component and then enhances the component. then return back

example:giving promotedlable doe products






**doubts**
<!-- reconsilation -->
<!-- sass -->