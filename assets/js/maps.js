
    function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7400267, lng: -73.9935017 },
    zoom: 8,
  });
}

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.7400267, lng: -73.9935017 },
        { lat: -35.397, lng: 149.844 },
        { lat: -36.397, lng: 148.944 }
    ];

    