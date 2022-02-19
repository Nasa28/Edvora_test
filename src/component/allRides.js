import Ride from '../util/data';
import user from '../util/user';
const station = user.station_code;

const Rides = Ride.map((item) => {
  const closest = item.station_path.reduce(function (prev, curr) {
    return Math.abs(curr - station) < Math.abs(prev - station) ? curr : prev;
  });
  item.distance = Math.abs(closest) - Math.abs(station);
  return item;
});

export const sortedRides = Rides.sort((a, b) => a.distance - b.distance);
