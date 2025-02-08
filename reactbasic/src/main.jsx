import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Hello()
{
  return (
    <div>

   
    <h1>Hello World</h1>
    </div>
  )
}
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank',
      children: 'Click me to visit Google'
  }
};
const anotherelem=(
  <a href='https://google.com' target='_blank'>
    Visit Google
  </a>
)
const varii='krona'
const react_elem=React.createElement('a',{href:'https://google.com',target:'_blank'},'click me to visit google' ,varii)//kro na variable injects in the end

ReactDOM.createRoot(document.getElementById('root')).render(

//reactElemen // it will not run because of  react bunbler has particular syntax
   
   react_elem
  
//<App/>
)
