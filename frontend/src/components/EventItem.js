import { Link, useSubmit } from 'react-router-dom';

import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {

    const proceed = window.confirm('Are you sure?');//browser build func

    if (proceed) {
      submit(null, { method: 'delete' });//trigger action from app.js by react hooks useSubmit()
      //you could add different route if needed : submit(null, { method: 'delete', action: '/path' });
      //pass the needed method as method: request.method, in pages/EventDetail.js
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;