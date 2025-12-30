import React from 'react';
import { useSearchParams } from "react-router-dom";

function Filter() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log("-------------->", searchParams); //📗🔖Learning 1 :by default init a object named URLSearchParams { size: 0 } amd After its set function run means data set then size : 1 ho jata h.
    console.log("-------------->", searchParams.get('filter'));

    // STEP 2 : get the query parameter form url.
    //  const selected = searchParams.get("filter")
    //  console.log("The selected  text :- ",selected);


    // const selected = searchParams.get("filter") || "all";
    // console.log("The selected element :- ", selected); //📗🔖Learing 2 : initailly it is null bcz jb select-option run hoga tb hi to searchParams mei object bnege. so na obj bna to unski propery or key which is filter name ki h hi nahi.

    // keep both search + filter in URL
    //   const search = searchParams.get("search") || "";


    return (
        <>
            {/* <br />
            <hr />
            <br />
            <h1>  Component 3 :  Filter </h1> <br />
            <p>---------------- Ex 2 ------------------ UseCase 2 : Filter </p> */}

            <select
                style={sty}
                name="filter"
                // STEP 1 : set the query parameter in url
                onChange={(e) => setSearchParams(
                    {
                        [e.target.name] : e.target.value
                        // "filter.v.course" : "web developement"
                    }
                )}
                 //value="artificial intelligence"   //🔖📗 Learning 1 : jab hum non-existing option 's value dete h tb First option ko by default manta and UI yani dropdown mei usko hi show krta rhta h. 
                // and jb existing value dete h to us option ko default and har bar usko hi show krta rheta h.
                 value={searchParams.get('filter') || "all"}   //🔖📗 Learning 2 : keeps UI & URL in sync --OR-- The value of a <select> carries the value of the currently one of the  <option> 's value.
            >
                {/* 🔖📗 👇Learning 3 : in option value name DONT spaces, DONT inconsistent name casing, only smallcase in slug style for best for API and Database matching.   */}
                <option value="all">All</option>
                <option value="web Development">Web Developement</option>
                <option value="App Developement">App Developement</option>
                <option value="Artificial intelligence">AI Courses</option>
                <option value="Data">Data Courses</option>
            </select>

            {/* <div style={{marginBlock:"10rem"}}>Empty Space</div> */}

            {/* { selected ? <p>Your selected filter is <strong>{selected}</strong> </p> : null} */}

        </>
    );
}
export default Filter;


let sty = { padding: "10px", margin: "10px" }