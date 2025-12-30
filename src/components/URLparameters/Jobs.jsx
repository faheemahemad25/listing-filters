import React from 'react';
import '../../styles/jobs.css'
import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

function Jobs() {

    let jobs = [
        // ---------------- FRONTEND DEVELOPMENT ----------------
        {
            id: "gsf06112025141801",
            job_title: "Frontend Developer",
            category: "frontend",
            company: "GSF Infotech",
            skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
            job_location: "gurugram",
            job_type: "remote",
            posted_date: "05/10/25"
        },
        {
            id: "gsf06112025141802",
            job_title: "ReactJS Developer",
            category: "frontend",
            company: "PixelCode Labs",
            skills: ["React", "Next.js", "Redux", "TypeScript"],
            job_location: "banglore",
            job_type: "fulltime",
            posted_date: "07/10/25"
        },
        {
            id: "gsf06112025141803",
            job_title: "Frontend Engineer",
            category: "frontend",
            company: "Webify Tech",
            skills: ["Vue.js", "Nuxt.js", "SCSS", "JavaScript"],
            job_location: "Delhi",
            job_type: "remote",
            posted_date: "10/10/25"
        },
        {
            id: "gsf06112025141804",
            job_title: "UI Engineer",
            category: "frontend",
            company: "SoftCraft",
            skills: ["React", "Bootstrap", "REST APIs"],
            job_location: "Hydrebad",
            job_type: "parttime",
            posted_date: "12/10/25"
        },
        {
            id: "gsf06112025141805",
            job_title: "Frontend Developer (Next.js)",
            category: "frontend",
            company: "CodeNest",
            skills: ["Next.js", "TypeScript", "Tailwind", "Figma"],
            job_location: "Pune",
            job_type: "fulltime",
            posted_date: "15/12/25"
        },
        {
            id: "gsf061120251418066",
            job_title: "ReactJS Developer",
            category: "frontend",
            company: "Techo fino",
            skills: ["React", "Next.js", "Redux", "Bootstrap"],
            job_location: "noida",
            job_type: "fulltime",
            posted_date: "07/10/25"
        },
        {
            id: "gsf061120251418077",
            job_title: "Nextjs Developer",
            category: "frontend",
            company: "WeboLabs",
            skills: ["React", "Next.js", "Redux", "Tailwind"],
            job_location: "noida",
            job_type: "parttime",
            posted_date: "23/11/25"
        },

        // ---------------- BACKEND DEVELOPMENT ----------------
        {
            id: "gsf06112025141806",
            job_title: "Backend Developer",
            category: "backend",
            company: "DataForge Systems",
            skills: ["Node.js", "Express", "MongoDB", "JWT"],
            job_location: "Hyderabad",
            job_type: "remote",
            posted_date: "16/10/25"
        },
        {
            id: "gsf06112025141807",
            job_title: "Java Backend Engineer",
            category: "backend",
            company: "Cloudlytic",
            skills: ["Java", "Spring Boot", "MySQL", "Kafka"],
            job_location: "Gurugram",
            job_type: "parttime",
            posted_date: "17/10/25"
        },
        {
            id: "gsf06112025141808",
            job_title: "Python Backend Developer",
            category: "backend",
            company: "ByteStack",
            skills: ["Python", "Django", "PostgreSQL", "Redis"],
            job_location: "Noida",
            job_type: "parttime",
            posted_date: "19/10/25"
        },
        {
            id: "gsf06112025141809",
            job_title: "GoLang Developer",
            category: "backend",
            company: "DevNation",
            skills: ["Go", "gRPC", "Docker", "Kubernetes"],
            job_location: "Mumbai",
            job_type: "remote",
            posted_date: "21/10/25"
        },
        {
            id: "gsf06112025141810",
            job_title: "Backend Engineer",
            category: "backend",
            company: "CodeHive",
            skills: ["Node.js", "GraphQL", "AWS", "SQL"],
            job_location: "banglore",
            job_type: "fulltime",
            posted_date: "23/10/25"
        },

        // ---------------- FULLSTACK DEVELOPMENT ----------------
        {
            id: "gsf06112025141811",
            job_title: "Fullstack Developer (MERN)",
            category: "fullstack",
            company: "Techverse Labs",
            skills: ["React", "Node.js", "MongoDB", "Express"],
            job_location: "noida",
            job_type: "fulltime",
            posted_date: "24/10/25"
        },
        {
            id: "gsf06112025141812",
            job_title: "Fullstack Developer (MEAN)",
            category: "fullstack",
            company: "WebCrafters",
            skills: ["Angular", "Node.js", "MongoDB", "Express"],
            job_location: "Hydrebad",
            job_type: "parttime",
            posted_date: "26/10/25"
        },
        {
            id: "gsf06112025141813",
            job_title: "Fullstack Engineer",
            category: "fullstack",
            company: "InnoTech",
            skills: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
            job_location: "Delhi",
            job_type: "remote",
            posted_date: "27/10/25"
        },
        {
            id: "gsf06112025141814",
            job_title: "Web Developer (React + Django)",
            category: "fullstack",
            company: "FusionByte",
            skills: ["React", "Django", "REST API", "SQLite"],
            job_location: "Pune",
            job_type: "fulltime",
            posted_date: "28/10/25"
        },
        {
            id: "gsf06112025141815",
            job_title: "Fullstack Developer",
            category: "fullstack",
            company: "Skyware Digital",
            skills: ["Vue.js", "Flask", "MySQL"],
            job_location: "banglore",
            job_type: "fulltime",
            posted_date: "29/10/25"
        },

        // ---------------- DATA ----------------
        {
            id: "gsf06112025141816",
            job_title: "Data Analyst",
            category: "data",
            company: "InsightPro",
            skills: ["SQL", "Excel", "Power BI", "Python"],
            job_location: "Noida",
            job_type: "remote",
            posted_date: "30/10/25"
        },
        {
            id: "gsf06112025141817",
            job_title: "Data Engineer",
            category: "data",
            company: "InnoData Labs",
            skills: ["Airflow", "Spark", "ETL", "AWS"],
            job_location: "banglore",
            job_type: "parttime",
            posted_date: "31/10/25"
        },
        {
            id: "gsf06112025141818",
            job_title: "Data Scientist",
            category: "data",
            company: "DeepData AI",
            skills: ["Python", "TensorFlow", "Pandas", "Machine Learning"],
            job_location: "Hyderabad",
            job_type: "fulltime",
            posted_date: "01/11/25"
        },
        {
            id: "gsf06112025141819",
            job_title: "Data Analyst",
            category: "data",
            company: "DataLogic",
            skills: ["Excel", "Tableau", "SQL", "Statistics"],
            job_location: "Delhi",
            job_type: "remote",
            posted_date: "02/11/25"
        },
        {
            id: "gsf06112025141820",
            job_title: "Data Engineer (Big Data)",
            category: "data",
            company: "CloudMatrix",
            skills: ["Hadoop", "Kafka", "Python", "Spark"],
            job_location: "Hydrebad",
            job_type: "fulltime",
            posted_date: "03/11/25"
        },

        // ---------------- ARTIFICIAL INTELLIGENCE ----------------
        {
            id: "gsf06112025141821",
            job_title: "AI Engineer",
            category: "a.i",
            company: "NeuralNet Labs",
            skills: ["PyTorch", "Deep Learning", "NLP", "Computer Vision"],
            job_location: "banglore",
            job_type: "remote",
            posted_date: "04/11/25"
        },
        {
            id: "gsf06112025141822",
            job_title: "Machine Learning Engineer",
            category: "a.i",
            company: "BrainStack AI",
            skills: ["Scikit-learn", "Python", "MLflow", "TensorFlow"],
            job_location: "Hyderabad",
            job_type: "fulltime",
            posted_date: "05/11/25"
        },
        {
            id: "gsf06112025141823",
            job_title: "GenAI Engineer",
            category: "a.i",
            company: "Promptify Tech",
            skills: ["LLMs", "LangChain", "Vector DB", "OpenAI API"],
            job_location: "Pune",
            job_type: "parttime",
            posted_date: "06/11/25"
        },
        {
            id: "gsf06112025141824",
            job_title: "Agentic AI Engineer",
            category: "a.i",
            company: "NeuraAgents",
            skills: ["AI Agents", "LangGraph", "CrewAI", "Python"],
            job_location: "Delhi",
            job_type: "partime",
            posted_date: "07/11/25"
        },
        {
            id: "gsf06112025141825",
            job_title: "AI Researcher",
            category: "a.i",
            company: "CognitiveCore",
            skills: ["LLMs", "RAG", "Transformer Models", "Python"],
            job_location: "Noida",
            job_type: "remote",
            posted_date: "08/11/25"
        },
        {
            id: "gsf06112025141826",
            job_title: "AI Solutions Architect",
            category: "a.i",
            company: "DeepVision",
            skills: ["GenAI", "LLMOps", "AWS", "LangGraph"],
            job_location: "Gurugram",
            job_type: "remote",
            posted_date: "09/11/25"
        }
    ];


    const [openedDropdown, setOpenedDropdown] = useState(null); // null | 'location' | 'category' | 'jobType'

    const [locations, setLocations] = useState([])
    const [categories, setCategories] = useState([])
    const [jobtype, setJobtype] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    // console.log("==================== ", searchParams);


    //! ===========================================================================================================================

    //!               Part 1 : filter buttons Dropdown show-hide logic 

    //! ===========================================================================================================================

    // Concept 📗🔖Learning 2: Toggle with state comparison
    const handleFilterDropdownUI = (currentClicked) => {
        //📗🔖Learning 3: there are two different ways of updating state.

        // setopenedDropdown(current)      1.  Direct state update
        // (no prev need to track)
        // NEW LEARNING📗🔖📗🔖📗🔖     2. Functional state update (we have to uses and track previous state data and then basis on previous then update newly onece.)
        
        // That approact is called functional state update means via function state set/add or update.
        setOpenedDropdown((prevClicked) => { //🔖setter's anonyms function/callback function ke prev parameter me vo data hota h jo setter ke state me hota h vhi data ko React store karta h.  // untill it doesn not call till then current is not created not exist 
            return prevClicked === currentClicked ? null : currentClicked;

            // prev / prevOpened / prevOpenedDropdown / prevClicked all name are relevant or same.

            // prev = the previously opened dropdown name
            // current = clicked btn or the dropdown you want to open/close 

            // null === location        //false
            // location === location    //true
            // location === category    //false
        })
    };



    //! ===========================================================================================================================

    //!               Part 2 :  how do we get checkboxes inputs logic

    //! ===========================================================================================================================


    // Concept 📗🔖Learning 3: how do we take input checkbox 's data. //📗🔖📗🔖REMEMBER : .checked property it gives to get its data.
    const handleLocations = (selectedInput) => {
        const { checked, value } = selectedInput.target;
        console.log(`${value}-${checked}`);

        if (checked) {
            // Add new input element value.
            setLocations([
                //📗🔖📗🔖📗🔖📗🔖Learning 1 : React mei jb state update krte h(add krle YA delete krte) tb immdiatly nhi hota phle function or event fucntion pura chalta h/ finiesh hotta h then update hota h state. NOTE : ab yadi loi logic h jo state pr depend to vhe bhi later chlata h so SOLUTION OR TRICK h. dusra logic ko baad mei likho.    -----------  React HOW update state “Okay, noted! I’ll apply this new state after this event (or function) finishes.”
                ...locations,
                value
            ])

        } else {
            // Remove unchecked input element value.
            setLocations([...locations.filter(location => {
                return location !== value
            })])
            //                  OR 
            //  let filteredLocations = locations.filter(location =>{
            //       return location !== value
            //   })
            //   setLocations(filteredLocations)

        }
    };
    console.log("CheckedInputs after function finished : locations -------", locations);


    const handleCategories = (selectedInput) => {
        const { checked, value } = selectedInput.target;
        console.log(`${value}-${checked}`);

        if (checked) {
            // Add new input element value.
            setCategories([
                //📗🔖📗🔖📗🔖📗🔖Learning 1 : React mei jb state update krte h(add krle YA delete krte) tb immdiatly nhi hota phle function or event fucntion pura chalta h/ finiesh hotta h then update hota h state. NOTE : ab yadi loi logic h jo state pr depend to vhe bhi later chlata h so SOLUTION OR TRICK h. dusra logic ko baad mei likho.    -----------  React HOW update state “Okay, noted! I’ll apply this new state after this event (or function) finishes.”
                ...categories,
                value
            ])

        } else {
            // Remove unchecked input element value.
            setCategories([...categories.filter((CheckedInput) => {
                return CheckedInput !== value
            })])
        }
    };
    console.log("CheckedInputs after function finished : categories -------", categories);



    const handleJobtype = (selectedInput) => {
        const { checked, value } = selectedInput.target;
        console.log(`${value}-${checked}`);

        if (checked) {
            // Add new input element value.
            setJobtype([
                //📗🔖📗🔖📗🔖📗🔖Learning 1 : React mei jb state update krte h(add krle YA delete krte) tb immdiatly nhi hota phle function or event fucntion pura chalta h/ finiesh hotta h then update hota h state. NOTE : ab yadi loi logic h jo state pr depend to vhe bhi later chlata h so SOLUTION OR TRICK h. dusra logic ko baad mei likho.    -----------  React HOW update state “Okay, noted! I’ll apply this new state after this event (or function) finishes.”
                ...jobtype,
                value
            ])

        } else {
            // Remove unchecked input element value.
            setJobtype([...jobtype.filter((CheckedInput) => {
                return CheckedInput !== value
            })])
        }
    };
    console.log("CheckedInputs after function finished : jobtype-------", jobtype);



    //! ===========================================================================================================================

    //!               Part 2.1 :  clearAll button logic

    //! ===========================================================================================================================


    const handleClearAll = () => {
        setLocations([])
        setCategories([])
        setJobtype([])
        setOpenedDropdown(null)
    }



    //! ===========================================================================================================================

    //!               Part 3 :  how do we create Query parameters in url/Address bar logic

    //! ===========================================================================================================================

    useEffect(() => {
        // Step 1: first built or create all query parameters from array via URLSearchParams() and its method append()  THEN --> // Step 2: phir hum create url parameter in url via setSearchParams.
        //📗🔖Learning 2 : phle hum sabhi check inputs jo array mei hote h usko append krte rhte h ek bad ek AND yha URLSearchParams() and append() overwrite nhi krte like setSearchParams() krta h ye append krte h ek bad ek and har EK KE BAD & bhi khud lgata h.

        const params = new URLSearchParams(); //constructor function / Built-in function

        //? const params = new URLSearchParams([
        //?     ["location", "delhi"],
        //?     ["location", "noida"],
        //?     ["location", "pune"]
        //? ]);

        //? params.append("location", locationCheckedInput) 👆HUM ek ek kar kr append/push karte rhte h end end me like this and params object me Array of array ki form mei bante rhte h.

        // ------------------------ 1.  all locations add/append to url one by one and one after one via .append() method and its obj param and its creator URLSearchParams() ------------------------------------
        locations.forEach((locationCheckedInput) => {
            params.append("location", locationCheckedInput)
            // 👆append() ka kaam hota h ek baad ek rakhne bina phle wale ko overwrite kre. ye append() ka mai kaam and behaviour hota h. js mei bhi or react mei bhi.
        });

        //*  ====== how URLSearchParams() create parameters and how works ==========

        //* STEP 1 :  Each loop mei look
        //todo     params.append("location", delhi)
        //todo     params.append("location", noida)
        //todo     params.append("location", pune)

        //* STEP 2 : pr URLSearchParams() internally is thra bnata h in its object params ko.
        //todo        {
        //todo            ["location", "delhi"]
        //todo            ["location", "noida"]
        //todo            ["location", "pune"]
        //todo        }              
        //todo   note ye syntax hota h query parameters bnane ka dekho setSearchParams() jb ek single bnata h.

        //* STEP 2.1 : phir is👆 object ko jb URLSearchParams() query parameters mei convert krta h tb is thra ke style me ban jata h.

        //todo         ?location=delhi&location=noida&location=pune

        //* STEP 3 : phir is object ko hum setSearchParams() ko dete h then useSearchParam() is object ko url me create krte h ya url me rakh deta h query parametrs bnata h

        //*  ================== how append() in js , in react, in any lang ye concept h jo krte h ============================
        //todo          actually “add something at the end bina phle ko htae" instead of overwrite and just show last one is problem ka solution h append() method. 🔖📗ye method useSaerchParm() ke pass nhi hota h isliye vo just last paramter hi dikhata h and now we have to use URLSearchParams() bcz it have powerful concept and poweful method append().


        // ------------------------  2. all categories add/append to url one by one and one after one via .append() method and its obj param and its creator URLSearchParams()  ------------------------------------
        categories.forEach((catInp) => {
            params.append("category", catInp)
        });

        //* STEP 1 :🔖📗 SO params object will be look like this behind the scence

        //todo        {
        //todo             ["location", "delhi"]
        //todo             ["location", "noida"]
        //todo             ["location", "pune"]
        //todo             ["category", "frontend"]
        //todo             ["category", "data"]
        //todo        } 


        //* STEP 1.1 : phir is👆 object ko jb URLSearchParams() query parameters mei convert krta h tb is thra ke style me ban jata h.

        //todo       ?location=delhi&location=noida&category=frontend&category=data


        // ------------------------  3. all Jobtype add/append to url one by one and one after one via .append() method and its obj param and its creator URLSearchParams()  ------------------------------------
        jobtype.forEach((jobtype) => {
            params.append("jobtype", jobtype)
        });


        //* STEP 1 :🔖📗 SO params object will be look like this behind the scence
        //todo        {
        //todo            ["location", "delhi"]
        //todo            ["location", "noida"]
        //todo            ["location", "pune"]
        //todo            ["category", "frontend"]
        //todo            ["category", "data"]
        //todo            ["jobtype", "remote"]
        //todo            ["jobtype", "parttime"]
        //todo        }

        //* STEP 1.1 : phir is👆 object ko jb URLSearchParams() query parameters mei convert krta h tb is thra ke style me ban jata h.

        //todo       ?location=delhi&location=noida&category=frontend&category=data&jobtype=remote&jobtype=parttime

        //*  👇sabse last STEP 2 : First / phle hum URLSearchParams() se and iske method append() duvara ek single object mei append yani add kr lete h sare then usko last me useSearchParam() ko de deta to create url in searchbar.

        setSearchParams(params);

    }, [locations, categories, jobtype]);



    //! ===========================================================================================================================

    //!               Part 4 : selected one or checked one according list render logic  
    //!                                         OR
    //!                             basically filtered list renderlogic

    //! ===========================================================================================================================

    // let currentJobs = jobs;

    // 1️⃣ Filter by locations
    if (locations.length > 0) {
        const lowerCaselocations = locations.map(item => {
            return item.toLowerCase();
        });

        let matchedLocations = jobs.filter(job => {
            const jobLocationLower = job.job_location.toLowerCase();

            return lowerCaselocations.includes(jobLocationLower);   // ["noida", "gurugram", "delhi", "pune", "mumbai"].includes("gurugram") //📗🔖👆Learning 1 : how do we search two arrays via includes()
        });

        // currentJobs = matchedLocations;
        jobs = matchedLocations;
    }


    // 2️⃣ Filter by category
    if (categories.length > 0) { // ye chalega jb categories state mei checked wala aaege or ye jb jb chalega tb tb insme add/checked hoga.

        const lowerCasecategories = categories.map(categoryCheckedInput => {
            return categoryCheckedInput.toLowerCase()
        })

        let matchedCategories = jobs.filter(job => {
            const lowerCaseCategory = job.category.toLowerCase()

            return lowerCasecategories.includes(lowerCaseCategory)   // ["frontend", "a.i", "backend"].includes("frontend") 

        })
        // currentJobs = matchedCategories;
        jobs = matchedCategories;
    }



    // 3️⃣ Filter by job type
    if (jobtype.length > 0) {

        const lowerCasejobtype = jobtype.map(jobtypeCheckedInput => {
            return jobtypeCheckedInput.toLowerCase()
        })

        let matchedJobtype = jobs.filter(job => {
            const lowerCaseJobType = job.job_type.toLowerCase()

            return lowerCasejobtype.includes(lowerCaseJobType)  // ["remote", "fulltime"].includes("fulltime") 

        })
        // currentJobs = matchedJobtype;
        jobs = matchedJobtype;
    }


    return (
        <>
            <h1>Job Openings</h1>
            <br />

            {/* ================================   section  1 : filter buttons   ================================   */}
            {/* ----- Click logic -----*/}

            <div id="super-filter-container">
                <div id="filter-container">
                    {/* Location Filter */}
                    <div className="filter_section">   {/*📗🔖Learning 1:  parent for postion:relative so that position absolute work init */}
                        <div
                            className='filter_btn_container'
                            onClick={() => handleFilterDropdownUI("location")}
                        >
                            <button className='fltrBtn'> Location </button>
                            <span className='fltrBtn-downArrow'>▼</span>
                        </div>

                        {openedDropdown === "location" && (
                            <div className="filter_list_container">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="noida"
                                        onChange={(e) => handleLocations(e)}
                                        checked={locations.includes("noida")} />  {/*             ["noida", "delhi", "pune"].includes("noida")  // true                                 */}
                                    {/* Learning 1 : 📗🔖 includes() 2nd Usecase : ek array h tb uske each element ko includes search find kr skta h without loop but EK baat yaad rakho each element ke jesa exact word hoga tb hi true dega yadi 1 ya 2 letter tb nhi.*/}
                                    Noida
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="gurugram"
                                        onChange={(e) => handleLocations(e)}
                                        checked={locations.includes("gurugram")} />
                                    Gurugram
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="delhi"
                                        onChange={(e) => handleLocations(e)}
                                        checked={locations.includes("delhi")} />
                                    Delhi
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="banglore"
                                        onChange={(e) => handleLocations(e)}
                                        checked={locations.includes("banglore")} />
                                    Banglore
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="hydrebad"
                                        onChange={(e) => handleLocations(e)}
                                        checked={locations.includes("hydrebad")} />
                                    Hydrebad
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="pune"
                                        onChange={(e) => handleLocations(e)}
                                        checked={locations.includes("pune")} />
                                    Pune
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="mumbai"
                                        onChange={(e) => handleLocations(e)}
                                        checked={locations.includes("mumbai")} />
                                    Mumbai
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Category Filter */}
                    <div className="filter_section">   {/*📗🔖Learning 1:  parent for postion:relative so that position absolute work init */}
                        <div
                            className='filter_btn_container'
                            onClick={() => handleFilterDropdownUI("category")}
                        >
                            <button className='fltrBtn'> Category </button>
                            <span className='fltrBtn-downArrow'>▼</span>
                        </div>
                        {openedDropdown === "category" && (
                            <div className="filter_list_container">
                                <label>
                                    <input type="checkbox"
                                        value="frontend"
                                        onChange={(e) => handleCategories(e)}
                                        checked={categories.includes("frontend")}
                                    />
                                    Frontend Development
                                </label>
                                <label>
                                    <input type="checkbox"
                                        value="backend"
                                        onChange={(e) => handleCategories(e)}
                                        checked={categories.includes("backend")}
                                    />
                                    Backend Development
                                </label>
                                <label>
                                    <input type="checkbox"
                                        value="fullstack"
                                        onChange={(e) => handleCategories(e)}
                                        checked={categories.includes("fullstack")}
                                    />
                                    Fullstack Development
                                </label>
                                <label>
                                    <input type="checkbox"
                                        value="A.I"
                                        onChange={(e) => handleCategories(e)}
                                        checked={categories.includes("A.I")}
                                    />
                                    Artificial Intelligence (AI)
                                </label>
                                <label>
                                    <input type="checkbox"
                                        value="data"
                                        onChange={(e) => handleCategories(e)}
                                        checked={categories.includes("data")}
                                    />
                                    Data
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Job Type Filter */}
                    <div className="filter_section">   {/*📗🔖Learning 1:  parent for postion:relative so that position absolute work init */}
                        <div
                            className='filter_btn_container'
                            onClick={() => handleFilterDropdownUI("jobType")}
                        >
                            <button className='fltrBtn'> Job Type </button>
                            <span className='fltrBtn-downArrow'>▼</span>
                        </div>
                        {openedDropdown === "jobType" && (
                            <div className="filter_list_container">
                                <label>
                                    <input type="checkbox"
                                        value="remote"
                                        onChange={(e) => handleJobtype(e)}
                                        checked={jobtype.includes("remote")}
                                    />
                                    Remote
                                </label>
                                <label>
                                    <input type="checkbox"
                                        value="fulltime"
                                        onChange={(e) => handleJobtype(e)}
                                        checked={jobtype.includes("fulltime")}
                                    />
                                    Full Time
                                </label>
                                <label>
                                    <input type="checkbox"
                                        value="parttime"
                                        onChange={(e) => handleJobtype(e)}
                                        checked={jobtype.includes("parttime")}
                                    />
                                    Part Time
                                </label>
                            </div>
                        )}
                    </div>
                </div>
                
                <div id='super-selectedFilter-container'>
                    <div id='selectedFilter-container'>
                        {locations.map((loc, ind) => {
                            return <span key={ind} className='selected-filter'>{loc} </span>
                        })}
                        {categories.map((category, ind) => {
                            return <span key={ind} className='selected-filter'>{category} </span>
                        })}
                        {jobtype.map((jbtyp, ind) => {
                            return <span key={ind} className='selected-filter'>{jbtyp} </span>
                        })}
                    </div>
                    <div className='clearAll-filter-btn'>
                        {
                            locations.length > 0 || categories.length > 0 || jobtype.length > 0 ?
                                <button className='clearAllBtn' onClick={handleClearAll}>Clear All🗑️</button>
                                : null
                        }
                    </div>
                </div>
            </div>


            {/* ================================   section 2   ================================   */}
            <div id='listing-container'>
                {
                    jobs.length > 0 ?
                        jobs.map(job => (
                            <div key={job.id} id="each-item">
                                <div id='list-top'>
                                    <span className='dark-chip'>{job.category}</span>
                                    <span className='light-chip'>{job.job_type}</span>
                                </div>
                                <h3 id='jobTitle'>{job.job_title}</h3>
                                <h4 id='companyEle'>{job.company}</h4>
                                <div id='skill-container'>
                                    {job.skills.map((skill, ind) => (
                                        <span key={ind} id='skill-chip'>{skill}</span>
                                    ))}
                                </div>
                                <div id='list-bottom'>
                                    <span className='text-gray-light'>{job.job_location}</span>
                                    <span className='text-gray-light'>Posted: {job.posted_date}</span>
                                </div>
                            </div>

                        ))
                        :
                        <h1>Not Found</h1>
                }
            </div>
        </>
    );
}
export default Jobs;





// behind then scene
// INSIDE 👆 params this is like
// {
//     "location" => "Delhi",
//     "location" => "Mumbai",
//     "location" => "Bangalore"
// }

// [
//     ["location", "Delhi"],
//     ["location", "Mumbai"],
//     ["location", "Bangalore"]
// ]

// {
//     "location" : ["Delhi", "Mumbai", "Bangalore"]
// }



// -------------------------  SHORTHAND :  all three ka matched arry banane ka  -------------------------

// if (locations.length > 0) {
//     resultJobs = jobs.filter(job =>
//         locations   // ['noida', 'Gurugram', 'DELHI']
//             .map(item => item.toLowerCase())  //step 1 : map ke badd ab locations me  ye array bnjaega ['noida', 'gurugram', 'delhi']
//             .includes(job.job_location.toLowerCase()) //step 2 :       ['noida', 'gurugram', 'delhi'].includes('delhi') ab includes me job ek ek kr ke dega.
//     );
// }


// -------------------------  SHORTHAND :  ALL three function work fine  with one handle function style instead of diff-diff function -------------------------

// function Jobs() {

//     const [openedDropdown, setopenedDropdown] = useState(null); // null | 'location' | 'category' | 'jobType'

//     const [checkedLocations, setCheckedLocations] = useState([])
//     const [checkedCategories, setCheckedCategories] = useState([])
//     const [checkedJobTypes, setCheckedJobTypes] = useState([])

//     const [searchParams, setSearchParams] = useSearchParams();


//     // Concept 📗🔖Learning 2: Toggle with state comparison
//     const handleFilterDropdownUI = (current) => {
//         //📗🔖Learning 3: there are two different ways of updating state.
//         //                                      1. Direct state update (no prev need to track)
//         // Today see HERE 👇 📗🔖📗🔖❤️❤️   2. Functional state update (we have to uses and track previous state data and then basis on previous then update newly onece.)

//         setopenedDropdown((prev) => {   //🔖 a function which set data in its state that called state setter. //🔖 prev always have current(previous) data.
//             // console.log(prev)
//             return prev === current ? null : current
//         })
//     };

//     // Concept 📗🔖Learning 3: how do we take input checkbox 's data. //📗🔖📗🔖REMEMBER : .checked property it gives to get its data.
//     const handleInputs = (selectedInput, type) => {
//          const { checked, value } = selectedInput.target;


//         const currentArray =
//             type === "location" ? checkedLocations :
//             type === "category" ? checkedCategories :
//             checkedJobTypes;                         // example third filter

//         const setArray =
//             type === "location" ? setCheckedLocations :
//             type === "category" ? setCheckedCategories :
//             setCheckedJobTypes;



//         const updatedArray = checked
//             ? [...currentArray, value]
//             : currentArray.filter(item => item !== value);

//         setArray(updatedArray);



//         // Build URL params
//         const params = new URLSearchParams();

//         // Always append all filters
//         (type === "location" ? updatedArray : checkedLocations).forEach(loc => params.append("location", loc));
//         (type === "category" ? updatedArray : checkedCategories).forEach(cat => params.append("category", cat));
//         (type === "jobType" ? updatedArray : checkedJobTypes).forEach(job => params.append("jobType", job));

//         setSearchParams(params);

//     };

//     return (
//         <>
//             <h1>Job Openings</h1>
//             <br />

//             {/* ============ Click logic ==================== */}

//             <div id="filter-container">

//                 {/* Location Filter */}
//                 <div className="filter_section">   {/*📗🔖Learning 1:  parent for postion:relative so that position absolute work init */}
//                     <div
//                         className='filter_btn_container'
//                         onClick={() => handleFilterDropdownUI("location")}
//                     >
//                         <button className='fltrBtn'> Location </button>
//                         <span className='fltrBtn-downArrow'>▼</span>
//                     </div>

//                     {openedDropdown === "location" && (
//                         <div className="filter_list_container">
//                             <label>
//                                 <input type="checkbox"  value="noida" onClick={(e) => handleInputs(e, "location")} />
//                                 Noida
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="gurugram" onClick={(e) => handleInputs(e, "location")} />
//                                 Gurugram
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="banglore" onClick={(e) => handleInputs(e, "location")} />
//                                 Banglore
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="hydrebad" onClick={(e) => handleInputs(e, "location")} />
//                                 Hydrebad
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="pune" onClick={(e) => handleInputs(e, "location")} />
//                                 Pune
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="mumbai" onClick={(e) => handleInputs(e, "location")} />
//                                 Mumbai
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="delhi" onClick={(e) => handleInputs(e, "location")} />
//                                 Delhi
//                             </label>
//                         </div>
//                     )}
//                 </div>

//                 {/* Category Filter */}
//                 <div className="filter_section">   {/*📗🔖Learning 1:  parent for postion:relative so that position absolute work init */}
//                     <div
//                         className='filter_btn_container'
//                         onClick={() => handleFilterDropdownUI("category")}
//                     >
//                         <button className='fltrBtn'> Category </button>
//                         <span className='fltrBtn-downArrow'>▼</span>
//                     </div>
//                     {openedDropdown === "category" && (
//                         <div className="filter_list_container">
//                             <label>
//                                 <input type="checkbox"  value="frontend" onClick={(e) => handleInputs(e, "category")} />
//                                 Frontend Development
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="backend" onClick={(e) => handleInputs(e, "category")} />
//                                 Backend Development
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="fullstack" onClick={(e) => handleInputs(e, "category")} />
//                                 Fullstack Development
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="A.I" onClick={(e) => handleInputs(e, "category")} />
//                                 Artificial Intelligence (AI)
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="data" onClick={(e) => handleInputs(e, "category")} />
//                                 Data
//                             </label>
//                         </div>
//                     )}
//                 </div>

//                 {/* Job Type Filter */}
//                 <div className="filter_section">   {/*📗🔖Learning 1:  parent for postion:relative so that position absolute work init */}
//                     <div
//                         className='filter_btn_container'
//                         onClick={() => handleFilterDropdownUI("jobType")}
//                     >
//                         <button className='fltrBtn'> Job Type </button>
//                         <span className='fltrBtn-downArrow'>▼</span>
//                     </div>
//                     {openedDropdown === "jobType" && (
//                         <div className="filter_list_container">
//                             <label>
//                                 <input type="checkbox"  value="remote" onClick={(e) => handleInputs(e, "jobType")} />
//                                 Remote
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="fulltime" onClick={(e) => handleInputs(e, "jobType")} />
//                                 Full Time
//                             </label>
//                             <label>
//                                 <input type="checkbox"  value="parttime" onClick={(e) => handleInputs(e, "jobType")} />
//                                 Part Time
//                             </label>
//                         </div>
//                     )}
//                 </div>
//             </div>



//             <div id='listing-container'>
//                 {
//                     jobs.map(job => (
//                         <div key={job.id} id='each-item'>
//                             <h3>{job.job_title}</h3>
//                             <h4 id='companyEle'>{job.company}</h4>
//                             <div id='skill-container'>
//                                 {
//                                     job.skills.map((skill, ind) => (
//                                         <span key={ind} id='skill'>{skill}</span>
//                                     ))
//                                 }
//                             </div>
//                             <div id='list-bottom'>
//                                 <span>{job.job_location}</span>
//                                 <span>{job.posted_date}</span>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>

//         </>
//     );
// }
// export default Jobs;