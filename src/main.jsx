import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {BrowserRouter,useSearchParams,Link} from 'react-router-dom'


// function App(){

//     const [searchParam,setparam]=useSearchParams()
//     const typeFilter=searchParam.get("type")


//     const swCharacters = [

//         {
//           name:"Luke",
//           type:"jedi"
//         },
//         {
//           name:"drake",
//           type:"sith"
//         },
//         {
//           name:"tess",
//           type:"jedi"
//         }
//       ]
    
    
//     const displayedCharacters = typeFilter ?
//           swCharacters.filter(char=>char.type.toLocaleLowerCase()===typeFilter)
//         :
//           swCharacters

//     const cahrEls=displayedCharacters.map((char)=>(
//       <div className='text-white text-4xl border-amber-200 mt-4 border-2' key={char.name}>
//         <h3>name:{char.name}</h3>
//         <p>type:{char.type}</p>
//       </div>
//     ))
    
    
//     return(
//         <div className=' caret-transparent h-auto min-h-screen flex  justify-center  items-center  pt-10  bg-slate-900'>
//             <div className='max-w-full w-[800px] h-auto   mb-[60px] rounded-2xl '>
//                 {cahrEls}
// <div className='flex flex-col gap-3 text-white'>
// <Link to="?type=sith">sith</Link>
//                 <Link to="?type=jedi">jedi</Link>
//                 <Link to="?">clear</Link>
// </div>
                

//             </div>
//       </div>

//     )
// }

createRoot(document.getElementById('root')).render(

<App/>

   

    


  

)
