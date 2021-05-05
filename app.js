const block = document.querySelector('.fan .row');
const card = document.querySelector('.card');
const carousel = document.querySelector('.carousel-inner');

// function favorites(id) {
//     fetch(`http://www.omdbapi.com/?i=tt${id}&apikey=fe21a5f`)
//         .then(response => response.json())
//         .then(data => {
//             //console.log(data)
//             block.insertAdjacentHTML('beforeend', `<div class="col-md mt-2">
//             <div class="card">
//                 <div class="poster" style="background: url(${data.Poster})"></div>
//                 <div class="card-body">
//                   <h5 class="card-title">${data.Title}</h5>
//                   <div class="rating"><i class="fas fa-star"></i> ${data.imdbRating}</div>
//                   <p class="card-text">${data.Plot}</p>
//                 </div>
//               </div>
//         </div>`)
//         })

// }

async function favorites(id) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt${id}&apikey=fe21a5f`);
        const data = await response.json();
        block.insertAdjacentHTML('beforeend', `<div class="col-md mt-2">
            <div class="card">
                <div class="poster" style="background: url(${data.Poster})"></div>
                <div class="card-body">
                  <h5 class="card-title">${data.Title}</h5>
                  <div class="rating"><i class="fas fa-star"></i> ${data.imdbRating}</div>
                  <p class="card-text">${data.Plot}</p>
                </div>
              </div>
        </div>`)
        
    } catch (error) {
        console.error(error)
    }
}

const lista = [1285016, 9208876, 2403776, 7888964];

lista.forEach(favorites)

async function slider(id, active) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt${id}&apikey=fe21a5f`)
        const data = await response.json();
        carousel.insertAdjacentHTML('beforeend', `
<div class="carousel-item ${active}" style="background: url(${data.Poster})">
<div class="carousel-caption d-none d-md-block">
    <h1>${data.Title}</h1>
    <h3>${data.Actors}</h3>
</div>
</div>`)
    }
    catch (error) {
        console.error(error)
        console.log('hubo error')
    }
}
slider(9208876, 'active')
slider(2403776);