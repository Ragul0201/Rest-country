var res  = fetch("https://restcountries.com/v3.1/all")
.then((data) => data.json()).then((data1) => foo(data1) ); //, console.log(data1)


var container = document.createElement("div");
container.setAttribute("class", "container");


var row  = document.createElement("div");
row.classList.add("row","m-3")

container.appendChild(row)

// var weather  = fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
// // console.log(weather)
// weather.then((data) => data.json()).then((data1) => data1.json()).then((data3) => console.log(data3)).catch((err) => console.log(err))

function foo(data1){
    for(var i of data1){      
        

        row.innerHTML += `
        <div class="col-md-4">
            <div class="card border-primary mb-3" style="width: 15rem;">
            <h6 class="card-title">${i.name.common}</h6>
                <img src="${i.flags.svg}" class="card-img-top" alt="country flags">
                <div class="card-body">
                    <h6>Capital : ${i.capital}</h6>
                    <h6>Region : ${i.region}</h6>
                    <h6>Country code : ${i.cca3}</h6>
                    <button type="button" class="btn btn-light" onclick = "change()">Click for weather</button>
                </div>
            </div>
        </div>`
    document.body.appendChild(container)
    }
}