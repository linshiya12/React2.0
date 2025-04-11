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













**doubts**
<!-- reconsilation -->