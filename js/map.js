function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 22.7, lng: 120.31 },
    zoom: 12,
    mapId: "5941979bf7e351c9",
    streetViewControl: false,
    zoomControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  });
  var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  const marker = new google.maps.Marker({
    position: { lat: 22.722633382707713, lng: 120.28997719696468 },
    map: map,
    animation: google.maps.Animation.DROP,
    icon: "./icon/mapICON.png",
  });
}
