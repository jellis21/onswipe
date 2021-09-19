mapboxgl.accessToken = 'pk.eyJ1IjoiamVsbGlzMjEiLCJhIjoiY2t0NXp2NDI3MGRqYzJ1cWtwbG1sYWdrMSJ9.kaIBCEvh9v_LDa0d4FKoCg';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-84.37339583138231, 33.84892558877686],
      zoom: 14
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat([-84.37339583138231, 33.84892558877686])
      .addTo(map);

