import React, { Component } from 'react'
import moment from 'moment'

let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'

class Earthquakes extends Component {
  state = {
    features: []
  }

  componentDidMount() {
    fetch(url).then(res => res.json()).then(({ features }) => {
      this.setState({ features })
    })
  }

  render() {
    let eq = this.state.features.map(feature => {
      return (
        <div className="col-sm-6" key={feature.id}>
          <ul className="list-group">
            <li className="list-group-item">
              <h4 className="bg-danger">
                {feature.properties.place}
              </h4>
              <ul className="list-group" id="eqlist">
                <li className="list-group-item">
                  <p>
                    Magnitude: {feature.properties.mag}
                  </p>
                </li>
                <li className="list-group-item">
                  <p>
                    Time: {moment(feature.properties.time).format('llll')}
                  </p>
                </li>
                <li className="list-group-item">
                  <p>
                    Did anyone feel it? {feature.properties.felt === null ? 'No' : 'Yes'}
                  </p>
                </li>
                <li className="list-group-item">
                  <p>
                    Did it cause a Tsunami? {feature.properties.tsunami === 0 ? 'No' : 'Yes'}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )
    })
    return (
      <div>
        {' '}{eq}{' '}
      </div>
    )
  }
}

export default Earthquakes
