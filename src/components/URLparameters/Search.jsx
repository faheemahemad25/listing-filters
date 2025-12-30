import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

function Search() {
    // const [searchParams, setSearchParams] = useState()
    const [searchParams, setSearchParams] = useSearchParams()
    
    // STEP 2 : get the query parameter form url.
    //  const searched = searchParams.get("search");
    //   console.log("The searched  text :- ",searched);

//   const searched = searchParams.get("search") || "";
    //  console.log("The searched  text :- ",searched);
//   const filter = searchParams.get("filter") || "all";
    
    
   
    return (
        <div>
            {/* <br />
            <hr />
            <br />
            <p> ------------- 📗🔖 useSearchParams() ------------- </p> <br />

            <h1>  Component 2 :  Search </h1> <br />
            <p>---------------- Ex 1 ------------------ UseCase 1 : Search </p> */}

            {/* { searched ? <p>Your searched text is <strong>{searched}</strong> </p> : null} */}
             
            <input
               style={sty}
               type="text"
               placeholder='Enter the name of user'
               name="search"
            //    onChange={(e)=>setSearchParams(e.target.value)}
            //    onChange={(e)=>setSearchParams({"q":e.target.value})}
            //📗🔖Learning 2.1 : 👇Updating the URL via setSearchParams() triggers a re-render of the component on evrty input.
               onChange={(e)=>setSearchParams({[e.target.name]:e.target.value})}  //📗🔖Learning 2 : how we create dynamic key propery in an object?
            //    value={search}
               />
            {/* <button style={{ padding: "10px" }}>Search</button> */}

            {/* <p>No results found for {searched}</p> */} {/*📗🔖📗🔖📗🔖THIS line only show when searched match  not found.  */}
            
        </div>
    );
}
export default Search;





















let sty = { padding: "10px", margin: "10px" }

//    onInput={(e)=>setSearchParams({[e.target.name]:e.target.value})} //📗🔖Learning 1 : onChange alternate is onInput event listner exist. //📗🔖Learning 2 : how we create dynamic key propery in an object?

// function Search() {
//     const [searchParams, setSearchParams] = useSearchParams();

//     // Read query parameter
//     const name = searchParams.get("name");
//     const age = searchParams.get("age");

//     // Update query parameter
//     const handleClick = () => {
//         setSearchParams({ name: "John", age: "25" });
//     };

//     return (
//         <div>
//             <br />
//             <hr />
//             <br />
//             <h1>  Component 2 :  useSearchParams()  </h1> <br />
//             <p>---------------- Ex 1 ------------------ UseCase 1 : Search </p>

//             <h2>Name: {name}</h2>
//             <h2>Age: {age}</h2>
//             <button onClick={handleClick}>Set Params</button>
//         </div>
//     );
// }
// export default Search;


