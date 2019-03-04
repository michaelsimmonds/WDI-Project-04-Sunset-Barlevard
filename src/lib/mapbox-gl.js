export default process.env.NODE_ENV !== 'test' ? require('mapbox-gl') : {
  Map: () => null,
  Marker: () => ({
    setLngLat: () => ({
      addTo: () => null
    })
  })
}
