var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_AKUAPEM_NORTH_new_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/localhost/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "akuapem_north_new",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AKUAPEM_NORTH_new",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AKUAPEM_NORTH_new_1, 0]);
var lyr_AKWAPIM_NORTHMunicipal_mainroad_projected_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/localhost/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "akwapim_northmunicipal_mainroad_projected",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "AKWAPIM_NORTHMunicipal_mainroad_projected",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AKWAPIM_NORTHMunicipal_mainroad_projected_2, 1]);
var lyr_REPROJECTED_ROADS_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/localhost/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "reprojected_roads",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "REPROJECTED_ROADS",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_REPROJECTED_ROADS_3, 1]);

lyr_GoogleSatellite_0.setVisible(true);lyr_AKUAPEM_NORTH_new_1.setVisible(true);lyr_AKWAPIM_NORTHMunicipal_mainroad_projected_2.setVisible(true);lyr_REPROJECTED_ROADS_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AKUAPEM_NORTH_new_1,lyr_AKWAPIM_NORTHMunicipal_mainroad_projected_2,lyr_REPROJECTED_ROADS_3];
