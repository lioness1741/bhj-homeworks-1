const loader = document.getElementById("loader");
const requestOnDesk = document.getElementById("items");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.addEventListener("readystatechange", (event) => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");
    
      const responseServer = JSON.parse(xhr.responseText).response.Valute;

        for (const valute in responseServer) {
            const item = `<div class="item">
                            <div class="item__code">
                                ${responseServer[valute].CharCode}
                            </div>
                            <div class="item__value">
                                ${responseServer[valute].Value}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                          </div>`;

            requestOnDesk.insertAdjacentHTML('beforeend', item);
        }
  }
});

xhr.send();

