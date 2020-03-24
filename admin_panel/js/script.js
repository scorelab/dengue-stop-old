var maploc;
let latt, lonn;
window.onload = function(){
    fetch('https://dengue-stop-4fb58.firebaseio.com/stats.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.document.getElementById('tot_cases').innerHTML = data.tot_cases;
            this.document.getElementById('last_wk').innerHTML = data.last_week;
            this.document.getElementById('last_24').innerHTML = data.last_24hrs;
        })
        .catch(err => {
            console.log(err)
        }
    );

    fetch('https://dengue-stop-4fb58.firebaseio.com/reports.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            addMarkers(data);
            data.forEach(data => {
                this.document.getElementById('reports_block').innerHTML= 
                    this.document.getElementById('reports_block').innerHTML +
                    `<div class="report mb-1">
                    <div class="report-body">
                        <i class="fa fa-map-marker"></i>
                        <h1 class="subtitle is-6">`+data.area+`</h1>
                        <i class="fa fa-user ml-2"></i>
                        <h1 class="subtitle is-6">`+data.name+`</h1>
                    </div>
                    <p>`+data.info+`</p>
                    </div>`;
                //addMarker(data.lat, data.lon);
                
            });
        })
        .catch(err => {
            console.log(err)
        }
    );
}

function addMarkers(obj){
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 7.873, lng: 80.7718 }
      });
    let i;
    for(i=0; i< Object.keys(obj).length; i++){
        var marker = new google.maps.Marker({
            position: {lat: obj[i].lat, lng: obj[i].lon},
            map: map,
            label: {
                text: obj[i].name
            }
        })
    }
}
