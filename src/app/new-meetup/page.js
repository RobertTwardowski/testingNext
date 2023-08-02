"use client"

import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {
    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    }
    return <NewMeetupForm onAdMeetup={addMeetupHandler}/>
}

export default NewMeetupPage