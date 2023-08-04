import MeetupDetails from '../../components/meetups/MeetupDetails'

const MeetupDetailsPage = () => {
  return (
    <MeetupDetails
      image="https://upload.wikimedia.org/wikipedia/commons/f/f7/2008-09-28_Loreleia_postii_%28Fr%29_Redhead%2CMoncalvo%2CVilgalys_%26_Lutzoni_47564_crop.jpg"
      title="first meetup"
      address="lodz 5, city"
      description="blalblalbla"
    ></MeetupDetails>
  );
};

export async function getStaticPaths (){
return{
  fallback: false,
  paths:[
    {
      params:{
        meetupId:'m1',
      },
      params:{
        meetupId:'m2',
      }
    }
  ]
}
}

export async function getStaticProps(context){

  const meetupId = context.params.meetupId

  return{
      props:{
          meetupData:{
              image:'https://upload.wikimedia.org/wikipedia/commons/f/f7/2008-09-28_Loreleia_postii_%28Fr%29_Redhead%2CMoncalvo%2CVilgalys_%26_Lutzoni_47564_crop.jpg',
              id:meetupId,
              title: "first meetup",
              address: "lodz 5, city",
              description:"blalblalbla",
          }
      }
  }
}

export default MeetupDetailsPage;
