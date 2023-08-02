import classes from './MeetupDetails.module.css'


export default function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title}></img>
      <h1>{props.title}</h1>
      <address>{props.adress}</address>
      <p>{props.description}</p>
    </section>
  );
}
