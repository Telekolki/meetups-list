import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetaupsPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-meetups-2c8cb-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setIsLoading(false);
        if (!!result) {
          const newData = [];

          // not good
          // Object.entries(result).map((el) => {
          //   newData.push({
          //     id: el[0],
          //     ...el[1],
          //   });
          // });

          // better
          for (const key in result) {
            newData.push({
              id: key,
              ...result[key],
            });
          }
          setData([...newData]);
        }
      });
  }, []);

  // const DUMMY_DATA = [
  //   {
  //     id: 'm1',
  //     title: 'This is a first meetup',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
  //     address: 'Meetupstreet 5, 12345 Meetup City',
  //     description:
  //       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  //   },
  //   {
  //     id: 'm2',
  //     title: 'This is a second meetup',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
  //     address: 'Meetupstreet 5, 12345 Meetup City',
  //     description:
  //       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  //   },
  // ];

  return (
    <div>
      <ul>
        {!isLoading ? <MeetupList meetups={data} /> : <div>Loading...</div>}
      </ul>
    </div>
  );
};

export default AllMeetaupsPage;
