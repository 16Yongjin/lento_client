export default function ({ lat, lng }) {
  return lat & lng ? `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=18&size=300x200&maptype=roadmap&markers=color:red%7C${lat},${lng}&key=AIzaSyDsT5FxGGcpWD6-Qq_Bh2PGCYl1fUPrS2Q`
    : null
}
