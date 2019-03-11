import React from 'react'
import mapboxgl from '../../lib/mapbox-gl'
import axios from 'axios'


class CrawlMap extends React.Component{

  generateMap() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })
  }

  generateMarkers() {
    this.props.stops.map(stop => {
      const { lat, lng, name, image } = stop.bar
      //const address = stop.bar.address

      const popup = new mapboxgl.Popup({offset: 20})
        .setHTML(`
          <div class="event-image">
            <img src="${image}" alt="${name}" />
          </div>
          <h4>${name}</h4>
          </>
        `)


      const markerElement = document.createElement('div')
      markerElement.className = 'bar-marker'
      markerElement.innerText = '🍹'
      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lng: lng, lat: lat })
        .addTo(this.map)
        .setPopup(popup)
    })
  }

  getGeoJSON() {
    //MAPBOX ROUTE
    const waypointsJoined = this.props.stops.map(stop => `${stop.bar.lng},${stop.bar.lat}`).join(';')
    return axios.get(`https://api.mapbox.com/directions/v5/mapbox/walking/${waypointsJoined}`, {
      params: {
        steps: true,
        geometries: 'geojson',
        access_token: process.env.MAPBOX_TOKEN
      }
    })
      .then(res => res.data.routes[0].geometry.coordinates)
      .then(route => {
        return {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        }
      })
  }

  componentDidMount() {
    this.generateMap()
    this.generateMarkers()

    this.getGeoJSON()
      .then(geojson => {
        if (this.map.getSource('route')) {
          this.map.getSource('route').setData(geojson)
        } else { // otherwise, make a new request
          this.map.on('load', () => {

            this.map.addLayer({
              id: 'route',
              type: 'line',
              source: {
                type: 'geojson',
                data: geojson
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
          })
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
