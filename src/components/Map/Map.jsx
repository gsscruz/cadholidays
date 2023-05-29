import React from 'react';
import styles from './styles.module.css';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import mapatopojson from '../utils/maptopojson';

function Map() {
  console.log(mapatopojson);
  return (
    <>
      <button>Light up Manitoba</button>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          rotate: [105, -65, 0],
          scale: 800,
          center: [8, 0],
        }}
        style={{
          width: '800',
        }}
      >
        <Geographies geography={mapatopojson.data}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    hover: {
                      fill: '#F53',
                    },
                    default: {
                      fill: 'green',
                    },
                  }}
                  onClick={() => console.log('This province: ', geo)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
}

export default Map;
