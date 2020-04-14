mapboxgl.accessToken = 'pk.eyJ1IjoiOTlncmFuIiwiYSI6ImNrODhyOW80ZTAxOHczZ3BoNmlzejl0cDcifQ.oXhsA0_aSOrJWAcVTL846w';

const map = new mapboxgl.Map({
    container: 'kart',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 12,
    center: [10.750955, 59.913579]
});

const butikker = [
    {
        navn: "Fretex - Majorstuen",
        tekst: "Bruktbutikk i flotte klær",
        lng: 10.714713,
        lat: 59.928802,
        bilde: "fretexmaja.jpg"
    },
    {
        navn: "Fretex - Grünerløkka",
        tekst: "Bruktbutikk med kule klær",
        lng: 10.757792,
        lat: 59.922309,
        bilde: "fretexgruner.jpg"
    },
    {
        navn: "Fretex - Nationaltheatret",
        tekst: "Bruktbutikk med hippe klær",
        lng: 10.737402,
        lat: 59.915500,
        bilde: "fretexnation.jpg"
    },
    {
        navn: "Fretex - Grønland",
        tekst: "Bruktbutikk med nyttige klær",
        lng: 10.759744,
        lat: 59.912523,
        bilde: "fretexgron.jpg"
    },
    {
        navn: "Fretex - Vår frelsers gravlund",
        tekst: "Bruktbutikk med kvalitesklær",
        lng: 10.740855,
        lat: 59.923140,
        bilde: "fretexvaarfrels.jpg"
    },
    {
        navn: "Fretex - Bryn",
        tekst: "Bruktbutikk med forskjellige klær",
        lng: 10.827674,
        lat: 59.916893,
        bilde: "fretexbryn.jpg"
    }
]

const addMarker = (butikk) => {

    const div = document.createElement("div")
    div.className = "bruktmarker"

    const marker = new mapboxgl.Marker(div)
    const minPopup = new mapboxgl.Popup()
    minPopup.setHTML(`
    <img class="pop" src="./img/${butikk.bilde}">
    <h2>${butikk.navn}</h2>
    <p>${butikk.tekst}</p>`)
    marker.setPopup(minPopup)

    marker.setLngLat([butikk.lng, butikk.lat])
    marker.addTo(map) 
}

const addMarkers = () => {
    for(const butikk of butikker) {
        addMarker(butikk)
    }
}

map.on("load", addMarkers)