import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { Fragment } from "react";
import NewsletterRegistration from "../components/input/newsletter-registration";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Next JS Events</title>
        <meta
          name="description"
          content="Find a lot of events that will help you evolve"
        />
      </Head>
      <EventList items={props.events} />
      <NewsletterRegistration />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
export default HomePage;
