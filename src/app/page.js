"use client"

import MeetupList from "./components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/2008-09-28_Loreleia_postii_%28Fr%29_Redhead%2CMoncalvo%2CVilgalys_%26_Lutzoni_47564_crop.jpg",
    adress: "some adress 5, 12133 Lodz",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/2008-09-28_Loreleia_postii_%28Fr%29_Redhead%2CMoncalvo%2CVilgalys_%26_Lutzoni_47564_crop.jpg",
    adress: "some adress 5, 12133 Lodz",
  },
  {
    id: "m3",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/2008-09-28_Loreleia_postii_%28Fr%29_Redhead%2CMoncalvo%2CVilgalys_%26_Lutzoni_47564_crop.jpg",
    adress: "some adress 5, 12133 Lodz",
  },
];

export default function HomePage(props) {
   


  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export async function getStaticProps (){

  return{
    props: {
      meetups: DUMMY_MEETUPS
    },
  }
}