
import  { z } from 'zod';

function App() {
  

const url : string = "https://www.course-api.com/react-tours-project"


const tourSchema = z.object({
	id : z.string(),
	name : z.string(),
	info : z.string(),
	image : z.string(),
	price : z.string()
})


type Tour = z.infer<typeof tourSchema>;

async function fetchData(url : string) {
    try{
        const res = await fetch(url);
        if(!res.ok){
            throw new Error("Error while fetching");
        }
	
        const rawData : Tour[] = await res.json();
	const result = tourSchema.array().safeParse(rawData)
	if(!result.success)
    throw new Error("error while Parsing : ");
  
    return result.data;
	
    }catch(e){
        console.log(e);
    }
}


fetchData(url).then((data)=>data?.map((d)=>console.log(d.name)));








  return (
    <div style={{color : '2px solid black'}}>
      
	Hello      
    </div>
  )
}

export default App
