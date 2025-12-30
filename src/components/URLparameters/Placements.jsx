
import { useSearchParams } from "react-router";


// Mock data - Placement candidates
const placedCandidates = [
  { id: 1, name: 'Rahul Sharma', companyName: 'Google', yearOfPlacement: 2025 },
  { id: 2, name: 'Harsh Tyagi', companyName: 'Wipro', yearOfPlacement: 2021 },
  { id: 3, name: 'Amit Kumar', companyName: 'Amazon', yearOfPlacement: 2024 },
  { id: 4, name: 'Sneha Reddy', companyName: 'Infosys', yearOfPlacement: 2023 },
  { id: 55, name: 'Abhee Saxena', companyName: 'TCS', yearOfPlacement: 2021 },
  { id: 5, name: 'Vikram Singh', companyName: 'TCS', yearOfPlacement: 2024 },
  { id: 66, name: 'Ajatin', companyName: 'Wipro', yearOfPlacement: 2021 },
  { id: 124, name: 'salman Ansari', companyName: 'LTIMindtree', yearOfPlacement: 2023 },
  { id: 6, name: 'Ananya Gupta', companyName: 'Wipro', yearOfPlacement: 2022 },
  { id: 7, name: 'Rohan Singh', companyName: 'Accenture', yearOfPlacement: 2023 },
  { id: 8, name: 'Divya Kumar', companyName: 'Cognizant', yearOfPlacement: 2021 },
  { id: 9, name: 'Karan Verma', companyName: 'Capgemini', yearOfPlacement: 2023 },
  { id: 10, name: 'Pooja Nair', companyName: 'Deloitte', yearOfPlacement: 2024 },
  { id: 11, name: 'Arjun Rao', companyName: 'IBM', yearOfPlacement: 2022 },
  { id: 12, name: 'Neha Desai', companyName: 'Oracle', yearOfPlacement: 2023 },
  { id: 13, name: 'Mohd Bilal', companyName: 'Edu Infotech', yearOfPlacement: 2022 },
];


function Placements() {
  const [useSearch, setUseSearch] = useSearchParams()

 // =========== 📗2️⃣ STEP 2 :  get searched or selected query  ===============
   //  const searchText = useSearch.search // this style used by some hook/func apne duvara bnae hue object like useParmas

  const searchText = useSearch.get("search") || ""; // Use empty string for better handling

  const searchedCandidates = placedCandidates.filter(placedCandidate => {
    const matchesName = placedCandidate.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
    //📗🔖learning 1 : includes new array deta h. 📗🔖learning 2 : true and false mei btata h.
    return matchesName;
  });
  console.log(searchedCandidates);






  return (
    <>
      <h1> Topic :  useSearchParams() </h1>
      <br />
      <hr />
      <br />

      <h1>Our Placements</h1>

      <form action="" style={st}>
        <input
          style={sty}
          type="text"
          placeholder='Search by name'
          name="search"
          // =========== 📗1️⃣ STEP 1 :  set or create searched or selected query in url or address bar  ===============
          onChange={(e) => setUseSearch({ 
            [e.target.name] : e.target.value 
          })}
        />
        <br />
        <br />
        {searchText && <p>Your search is <strong>{searchText}</strong> </p>}
      </form>



      <section style={{ border: '1px solid #ddd', padding: "15px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {searchedCandidates.map(placedCandidate => (
          <div
            key={placedCandidate.id}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',        // Center text within the card
            }}
          >
            <img
              src="https://kobikoachman.com/wp-content/uploads/2018/03/dummyProfile-male.jpg"
              alt="Candidate Profile"
              style={{
                // Image Styling (Square)
                width: '100%',             // Square size
                // height: '250px',
                // objectFit: 'cover',         // Ensures no distortion
                borderRadius: '8px',        // Slight rounding, but not a circle
                marginBottom: '10px',       // Space below the image
                // border: '1px solid #ddd',
              }}
            />

            <h2
              style={{
                // Name Styling (Just below the image)
                color: '#2c3e50',
                fontSize: '1.3em',
                marginTop: '0',
                marginBottom: '15px',       // Space above the details line
                fontWeight: '700',
              }}
            >
              {placedCandidate.name}
            </h2>

            <div
              style={{
                // Company/Year Details Container (Full width, next line)
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',              // Take up the full width of the card's inner padding
                fontSize: '0.9em',
                color: '#555',
                paddingTop: '10px',
                borderTop: '1px solid #eee', // Clear separation line
              }}
            >
              <span
                style={{
                  // Company Name Styling
                  fontWeight: '600',
                  color: '#007bff',
                }}
              >
                {placedCandidate.companyName}
              </span>
              <span
                style={{
                  // Year Styling (as a badge)
                  backgroundColor: '#e9ecef',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  color: '#34495e',
                }}
              >
                {placedCandidate.yearOfPlacement}
              </span>
            </div>
          </div>
        ))}


      </section>


     

    </>
  );
}
export default Placements;


//  <div key={placedCandidate.id}>
//       <img src="https://kobikoachman.com/wp-content/uploads/2018/03/dummyProfile-male.jpg" alt="" style={{width:"200px"}} />
//       <h2>{placedCandidate.name}</h2>
//       <div>
//          <span>{placedCandidate.companyName}</span>
//          <span>{placedCandidate.yearOfPlacement}</span>
//       </div>
//  </div>


let st = { backgroundColor: "rgb(225 202 202 / 25%)", padding: "20px", marginBlock: "20px" }
let sty = { padding: "15px", borderRadius: "10px", width: "70%", marginLeft: "10%", border: "2px solid #E1CACA" }





