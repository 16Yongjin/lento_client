export default function ({ _id, lat, lng }) {
  return lat && lng ? `https://api.lento.in/public/maps/${_id.substr(-5)}.png` : null
}
