const EventList = () => {
  return <div>EventList</div>;
};

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const resp = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await resp.json();

  return {
    props: {
      eventList: data,
    },
  };
}
