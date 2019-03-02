import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken=process.env.MAPBOX_TOKEN

class CrawlMap extends React.Component{

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    const stops = this.props.stops
    console.log(stops)
    stops.map(stop => {
      const lat = stop.bar.lat
      const lng = stop.bar.lng
      console.log('lat '+lat, 'lng '+lng)

      const markerElement = document.createElement('div')
      markerElement.className = 'bar-marker'
      markerElement.innerText = '🍹'
      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lng: lng, lat: lat })
        .addTo(this.map)
    })
  }

  render() {
    return (
      <div className='map' ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default CrawlMap
