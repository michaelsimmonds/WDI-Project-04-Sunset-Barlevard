const mapboxgl = process.env.NODE_ENV !== 'test' ? require('mapbox-gl') : {
  Map: () => null,
  Marker: () => ({
    setLngLat: () => ({
      addTo: () => null
    })
  }),
  Bounds: () => null
}

mapboxgl.accessToken = process.env.MAPBOX_TOKEN

export default mapboxgl

//this creates a map normally if not in test mode. If in test mode it creates an empty object so it doesn't break the tests.
