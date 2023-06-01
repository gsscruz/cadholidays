import React from 'react';
import styles from './styles.module.css';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import mapatopojson from '../../utils/maptopojson';
import { holidays } from '../../utils/holidays';
import matchProvNHoliday from '../../utils/matchingHolidays';

function Map({ chosenHoliday }) {
  const provAndHoliday = matchProvNHoliday(holidays, chosenHoliday);
  console.log(provAndHoliday);
  return (
    <>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          rotate: [105, -65, 0],
          scale: 800,
          center: [8, 0],
        }}
        style={{
          width: '50%',
        }}
      >
        <Geographies geography={mapatopojson.data}>
          {({ geographies }) =>
            geographies.map((geo) => {
              {
                /* console.log(geo); */
              }
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    hover: {
                      fill: '#F53',
                    },
                    default: {
                      fill:
                        provAndHoliday.includes(geo.id) === true
                          ? 'goldenrod'
                          : 'grey',
                    },
                  }}
                  onClick={() => console.log('This province: ', geo)}
                />
              );
            })
          }
        </Geographies>

        <Marker
          coordinates={[-125.50832118312617, 54.13431515412254]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            BC
          </text>
        </Marker>
        <Marker
          coordinates={[-115.02843674055711, 54.48996969413863]}
          fill='#777'
        >
          <text textAnchor='center' fill='black'>
            AB
          </text>
        </Marker>
        <Marker
          coordinates={[-106.81072628694163, 54.48996969413863]}
          fill='#777'
        >
          <text textAnchor='center' fill='black'>
            SK
          </text>
        </Marker>
        <Marker
          coordinates={[-99.26385159198318, 54.48996969413863]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            MB
          </text>
        </Marker>
        <Marker
          coordinates={[-86.1959715014398, 49.98996969413863]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            ON
          </text>
        </Marker>
        <Marker
          coordinates={[-73.60430669409308, 52.48996969413863]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            QC
          </text>
        </Marker>
        <Marker
          coordinates={[-67.48829125466004, 46.7699262977717]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            NB
          </text>
        </Marker>
        <Marker
          coordinates={[-63.46368195846245, 44.9999922673301]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            NS
          </text>
        </Marker>
        <Marker coordinates={[-63.3395549231949, 46.69]} fill='#777'>
          <text textAnchor='start' fill='black'>
            PE
          </text>
        </Marker>
        <Marker
          coordinates={[-64.20318006501337, 54.023131913049376]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            NL
          </text>
        </Marker>
        <Marker
          coordinates={[-136.71401596884695, 63.36562597537944]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            YT
          </text>
        </Marker>
        <Marker
          coordinates={[-120.09233529614639, 64.01955255551854]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            NT
          </text>
        </Marker>
        <Marker
          coordinates={[-100.42202306049143, 63.89260362371475]}
          fill='#777'
        >
          <text textAnchor='start' fill='black'>
            NU
          </text>
        </Marker>
      </ComposableMap>
    </>
  );
}

export default Map;
