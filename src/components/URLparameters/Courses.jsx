
import Filter from './Filter'
import Search from './Search'
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Courses() {

  const [searchParams] = useSearchParams();

  const selected = searchParams.get("filter") || "all";
  console.log("The selected element :- ", selected);

  const searched = searchParams.get("search") || "";
  console.log("The searched  text :- ", searched);


  // Dummy data
  const courses = [
    { id: 1, name: "HTML", category: "web Development" },
    { id: 2, name: "CSS", category: "web Development" },
    { id: 3, name: "JavaScript", category: "web Development" },
    { id: 4, name: "React.js ", category: "web Development" },
    { id: 5, name: "Node.js ", category: "web Development" },
    { id: 6, name: "MongoDB", category: "web Development" },
    { id: 7, name: "SQL", category: "web Development" },
    { id: 8, name: "Mysql", category: "web Development" },
    { id: 9, name: "Android App Development", category: "App Developement" },
    { id: 10, name: "iOS App Development", category: "App Developement" },
    { id: 11, name: "AI Engineer", category: "Artificial intelligence" },
    { id: 13, name: "Machine Learning Engineer ", category: "Artificial intelligence" },
    { id: 12, name: "NLP & Computer Vision Engineer", category: "Artificial intelligence" },
    { id: 111, name: "Generative AI Engineer", category: "Artificial intelligence" },
    { id: 122, name: "AI Agents developer", category: "Artificial intelligence" },
    { id: 123, name: "LLM Engineer", category: "Artificial intelligence" },
    { id: 14, name: "Data Analyst", category: "Data" },
    { id: 15, name: "Data Engineer", category: "Data" },
    { id: 16, name: "Data Scienctist", category: "Data" },
  ];


  // const filteredCourses = courses.filter(course =>{
  //         if(selected === "all"){
  //             return true;
  //         }
  //         if(selected === course.category){
  //           return true;
  //         }
  // })
  // console.log("filtered Courses ::::----", filteredCourses);



  //  -------------- OR such case scenario BEST ALTERNATIVE or oprator --------------

  const filteredCourses = courses.filter((course) => {
    const matchselected = selected === "all" || selected === course.category;
    // return matchselected; 
    // console.log("matchselected>>>>",matchselected);


    const matchSearched = course.name.toLowerCase().includes(searched.toLowerCase())
    // return matchSearched;
    // console.log("matchSearched iiiiiiiiiiiiiiii ", matchSearched);


    return matchselected && matchSearched;//📗🔖Learning : how && work in return case scenario ye pta hona chahiye and return me kya and kb kb jata h iski understanding honi chahiye.
  });
  console.log("filteredCoursessssssss ----", filteredCourses);


  // ================================== caridion ==================================
  
  const [selectedQuestion, setSelectedQuestion] = useState(null)

  const handleCardion = (que) => {
    //  setSelectedQuestion(que)
    setSelectedQuestion((prevSt) => (
      prevSt === que ? null : que

    ))
  }


  return (
    <>
      <h1> Topic :  useSearchParams() </h1>
      <br />
      <hr />
      <br />

      <div style={{ border: "1px solid gray", marginBottom: "10px", display: "flex", backgroundColor: "#80808024" }}>
        <Filter />
        <Search />   {/*📗🔖Learning : when child componet re-render then parent bhi hota YANI jha child componet ko call kr rkha h veh bhi re-render  hota h. */}

      </div>


      <h1>Our Courses</h1>

      {filteredCourses.length > 0 ? (
        <section style={{ border: "1px solid gray", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "10px" }}>
          {filteredCourses.map((course) => (
            <div key={course.id} style={{ border: "1px solid black", }}>
              <img src="https://dummyimage.com/600x300/c7c7c7/fff" alt="" style={{ width: "100%" }} />
              <h3 style={{ display: "flex", justifyContent: "space-between" }}>
                {course.name}
                <span style={{ fontSize: "12px", background: "#ff000038", borderRadius: "15px", display: "flex", alignItems: "center", padding: "6px" }}>{course.category}</span>
              </h3>
            </div>
          ))}
        </section>
      ) : (
        <p>No courses found.</p>
      )}



      {/* ===============================================================================
                              accordiance 
          =============================================================================== */}

      <section style={{ border: "2px solid gray", padding: '20px', marginBlock: "20px" }}>
        <h1>FAQ</h1>
        <br />
        <div style={{
          border: '1px solid #ccc',
          cursor: "pointer",
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '15px',
          backgroundColor: '#f9f9f9'
        }}>

          {/* Question style */}
          <div style={{
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '5px'
          }}
            onClick={() => handleCardion("gurantee")}

          >
            is this 100% placement gurantee ?
          </div>

          {
            selectedQuestion === "gurantee" && <div style={{
              color: '#555',
              fontStyle: 'italic',
              marginLeft: '10px'
            }}>
              Not 100%, but we have acheived 95% succes rate.
            </div>
          }

        </div>

        <div style={{
          border: '1px solid #ccc',
          cursor: "pointer",
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '15px',
          backgroundColor: '#f9f9f9'
        }}>

          {/* Question style */}
          <div style={{
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '5px'
          }}
            onClick={() => handleCardion("direct")}
          >
            candidate will receive direct job hiring opportunuty?
          </div>

          {
            selectedQuestion === "direct" && <div style={{
              color: '#555',
              fontStyle: 'italic',
              marginLeft: '10px'
            }}>
              Yes, no need to visit and apply mulitple place all ou hiring partner will be here.
            </div>
          }
        </div>

        <div style={{
          border: '1px solid #ccc',
          cursor: "pointer",
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '15px',
          backgroundColor: '#f9f9f9'
        }}>

          {/* Question style */}
          <div style={{
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '5px'
          }}
            onClick={() => handleCardion("interviewTrain")}
          >
            on complete course will we receive english communication , interview practice with mock HR ?
          </div>


          {
            selectedQuestion === "interviewTrain" && <div style={{
              color: '#555',
              fontStyle: 'italic',
              marginLeft: '10px'
            }}>
              exactly candidate will be trained through hiring manager.
            </div>
          }

        </div>
      </section>

    </>
  );
}
export default Courses;



// ✅ Filter + Search logic
// const filteredCourses = courses.filter((course) => {
//     const matchselected = selected === "all" || course.category === selected;
//     // const matchSearch = course.name.toLowerCase().includes(search);
//     // return matchselected && matchSearch;
//     return matchselected;
// });










