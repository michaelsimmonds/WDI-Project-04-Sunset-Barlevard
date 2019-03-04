export default process.env.NODE_ENV !== 'test' ? require('mapbox-gl') : {
  Map: () => null,
  Marker: () => ({
    setLngLat: () => ({
      addTo: () => null
    })
  })
}

//this creates a map normally if not in test mode. If in test mode it creates an empty object so it doesn't break the tests.
