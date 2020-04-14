mapboxgl.accessToken = 'pk.eyJ1IjoiOTlncmFuIiwiYSI6ImNrODhyOW80ZTAxOHczZ3BoNmlzejl0cDcifQ.oXhsA0_aSOrJWAcVTL846w';

const knapper = document.querySelector("#knapper")
const flyKnapper = document.querySelector("#flyKnapper")

const map = new mapboxgl.Map({
    container: 'kart',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [10.750955, 59.913579]
});

const changeMode = (evt) => {
    const knapp = evt.target
    const mode = knapp.dataset.mode

    map.setStyle(mode)
}

const flyTil = (evt) => {
    const knapp = evt.target
    const lng = knapp.dataset.lng
    const lat = knapp.dataset.lat

    map.flyTo({
        center: [lng, lat],
        zoom: 18
    })
}


knapper.onclick = changeMode
flyKnapper.onclick = flyTil