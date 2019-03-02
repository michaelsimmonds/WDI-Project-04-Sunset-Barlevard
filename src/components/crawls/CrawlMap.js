import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken=process.env.MAPBOX_TOKEN
import axios from 'axios'


class CrawlMap extends React.Component{

  componentDidMount() {
    console.log('cdm')
    const stops = this.props.stops
    console.log(stops)
    const n = stops.length-1
    const startLng = stops[0].bar.lng
    const endLng = stops[n].bar.lng
    const startLat = stops[0].bar.lat
    const endLat = stops[n].bar.lat
    const start = [startLng, startLat]
    console.log('start', start)
    const end = [endLng, endLat]

    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    console.log(stops)
    stops.map(stop => {
      const lat = stop.bar.lat
      const lng = stop.bar.lng
      //console.log('lat '+lat, 'lng '+lng)

      const markerElement = document.createElement('div')
      markerElement.className = 'bar-marker'
      markerElement.innerText = '🍹'
      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lng: lng, lat: lat })
        .addTo(this.map)
    })

    //try mapbox routes here
    axios.get(`https://api.mapbox.com/directions/v5/mapbox/walking/${startLng},${startLat};${endLng},${endLat}?steps=true&geometries=geojson&access_token=${process.env.MAPBOX_TOKEN}`)
      .then(res => {
        console.log('response data', res.data)
        const route = res.data.routes[0].geometry.coordinates
        return route
      }).then(route => {
        console.log('hello from route', route)
        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [[-0.056873, 51.519947], [-0.056491, 51.519953]]//route
          }
        }

        console.log('hello from geojson', geojson)
        if (this.map.getSource('route')) {
          console.log('hello')
          //this.map.getSource('route').setData(geojson);
        } else { // otherwise, make a new request
          console.log('helloooooo')
          this.map.on('load', function(){

            this.map.addLayer({
              id: 'route',
              type: 'line',
              source: {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'LineString',
                    coordinates: route // https://docs.mapbox.com/help/tutorials/getting-started-directions-api/ <-- docs are wrong
                  }
                }
              },
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': '#3887be',
                'line-width': 5,
                'line-opacity': 0.75
              }
            })
          }.bind(this))
        }
      })
  }

  render() {
    console.log('render')
    return (
      <div className='map' ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default CrawlMap
