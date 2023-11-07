async function initMap(){
    const {Map} = await google.maps.importLibrary("maps");

    let maplist = [
        {lat : 16.8409, lng :96.1735, Label : "Y", title : "Yangon" },
        {lat : 16.4543, lng :97.6440, Label : "M", title : "Mawlamyine" },
        {lat : 16.9271, lng :97.3679, Label : "T", title : "Thaton" },
        {lat : 21.9588, lng :96.0891, Label : "M", title : "Mandalay" }
    ]

    let map = new Map(document.getElementById("map"),{
        center : {lat : 16.8409, lng : 96.1735},
        zoom : 8,
        
    })

    let bounds = new google.maps.LatLngBounds();

    function addMarker(){
        for( const list of maplist){
            const marker = new google.maps.Marker({
                position : {lat : list.lat, lng : list.lng},
                Label : list.Label,
                title : list.title,
                animation : google.maps.Animation.DROP,
                map
            })

            const infowindow = new google.maps.InfoWindow({
                content : list.title
            });
           
            
                marker.addListener("click", () =>{
                    infowindow.open(map, marker)
                })

            bounds.extend(marker.getPosition())
        }
    }

    addMarker()
    map.fitBounds(bounds)

}


initMap()