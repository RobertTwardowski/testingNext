

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const addMeetupHandler = async (enteredMeetupData) => {
      const response = await  fetch('/api/new-meetup',{
        method:"POST",
        body: JSON.stringify(enteredMeetupData),
        headers:{
            "content-Type": 'aplication/json'
        }
      })
      const data =await response.json()
    }
    return <NewMeetupForm onAdMeetup={addMeetupHandler}/>
}



export default NewMeetupPage