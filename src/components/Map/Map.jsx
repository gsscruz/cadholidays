import React from 'react';
import styles from './styles.module.css';
import { gsap } from 'gsap';

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
  const activeMapTile = '#D81A0D';
  const defaultMapTile = '#E8CB9B';

  const comp = React.useRef();

  // gsap.to(mapTile.current, {
  //   fill: activeMapTile,
  //   scale: 1.09,
  //   duration: 0.3,
  // });

  React.useLayoutEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component
      gsap.to('.chosen', {
        fill: activeMapTile,
        duration: 0.6,
        stagger: 0.4,
        ease: 'back',
        y: 6,
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  });

  return (
    <>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          rotate: [105, -65, 0],
          scale: 800,
          center: [8, 0],
        }}
        className={styles.composableMap}
      >
        <Geographies geography={mapatopojson.data} ref={comp}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  className={provAndHoliday.includes(geo.id) ? 'chosen' : null}
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    hover: {
                      fill: activeMapTile,
                    },
                    default: {
                      fill:
                        // provAndHoliday.includes(geo.id) === true
                        //   ? activeMapTile:
                        defaultMapTile,
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
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            BC
          </text>
        </Marker>
        <Marker
          coordinates={[-115.02843674055711, 54.48996969413863]}
          className={styles.markers}
        >
          <text textAnchor='center' className={styles.markerText}>
            AB
          </text>
        </Marker>
        <Marker
          coordinates={[-106.81072628694163, 54.48996969413863]}
          className={styles.markers}
        >
          <text textAnchor='center' className={styles.markerText}>
            SK
          </text>
        </Marker>
        <Marker
          coordinates={[-99.26385159198318, 54.48996969413863]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            MB
          </text>
        </Marker>
        <Marker
          coordinates={[-86.1959715014398, 49.98996969413863]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            ON
          </text>
        </Marker>
        <Marker
          coordinates={[-73.60430669409308, 52.48996969413863]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            QC
          </text>
        </Marker>
        <Marker
          coordinates={[-67.48829125466004, 46.7699262977717]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            NB
          </text>
        </Marker>
        <Marker
          coordinates={[-63.46368195846245, 44.9999922673301]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            NS
          </text>
        </Marker>
        <Marker
          coordinates={[-63.3395549231949, 46.69]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            PE
          </text>
        </Marker>
        <Marker
          coordinates={[-64.20318006501337, 54.023131913049376]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            NL
          </text>
        </Marker>
        <Marker
          coordinates={[-136.71401596884695, 63.36562597537944]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            YT
          </text>
        </Marker>
        <Marker
          coordinates={[-120.09233529614639, 64.01955255551854]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            NT
          </text>
        </Marker>
        <Marker
          coordinates={[-100.42202306049143, 63.89260362371475]}
          className={styles.markers}
        >
          <text textAnchor='start' className={styles.markerText}>
            NU
          </text>
        </Marker>
      </ComposableMap>
    </>
  );
}

export default Map;
