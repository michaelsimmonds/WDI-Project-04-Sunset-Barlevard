import React from 'react'
import mapboxgl from '../../lib/mapbox-gl'
import axios from 'axios'


class CrawlMap extends React.Component{

  componentDidMount() {
    const stops = this.props.stops
    const waypoints = []
    stops.map(stop => {
      const lng = stop.bar.lng
      const lat = stop.bar.lat
      waypoints.push(`${lng},${lat}`)
      return waypoints
    })
    const waypointsJoined = waypoints.join(';')

    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    console.log('STOPS', stops)
    stops.map(stop => {
      const lat = stop.bar.lat
      const lng = stop.bar.lng
      const name = stop.bar.name
      const image = stop.bar.hero
      //const address = stop.bar.address

      const popup = new mapboxgl.Popup({offset: 20})
        .setHTML(`
          <div style=background-image: url("${image}")
          />
          `)
          // .setHTML(`
          //   <div class="event-image">
          //     <img src="${image}" alt="${name}" />
          //   </div>
          //   <h4>${name}</h4>
          //   </>
            //`)


      const markerElement = document.createElement('div')
      markerElement.className = 'bar-marker'
      markerElement.innerText = '🍹'
      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lng: lng, lat: lat })
        .addTo(this.map)
        .setPopup(popup)
    })
    //MAPBOX ROUTE
    axios.get(`https://api.mapbox.com/directions/v5/mapbox/walking/${waypointsJoined}`, {
      params: {
        steps: true,
        geometries: 'geojson',
        access_token: process.env.MAPBOX_TOKEN
      }
    })
      .then(res => res.data.routes[0].geometry.coordinates)
      .then(route => {
        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        }

        if (this.map.getSource('route')) {
          this.map.getSource('route').setData(geojson)
        } else { // otherwise, make a new request
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
                'line-color': '#D42E2D',
                'line-width': 5,
                'line-opacity': 0.75
              }
            })
          }.bind(this))
        }
      })
  }

  render() {
    return (
      <div className='map' ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default CrawlMap
