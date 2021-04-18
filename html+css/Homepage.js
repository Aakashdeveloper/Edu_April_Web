var url = "https://developerfunnel.herokuapp.com/location";
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="
var tripType = "https://developerfunnel.herokuapp.com/booking"

const getCity = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var node = document.createElement('option');
            var textnode = document.createTextNode(data[i].city_name);
            node.appendChild(textnode);
            node.value = data[i]._id;
            document.getElementById('city').appendChild(node)
        }
    })
}

const test = () => {
    var cityId = document.getElementById('city').value;
    var hotels = document.getElementById('hotels');
    while(hotels.length>0){
        hotels.remove(0)
    }

    fetch(`${hotelUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var node = document.createElement('option');
            var textnode = document.createTextNode(`${data[i].name} | ${data[i].city_name}`);
            node.appendChild(textnode);
            document.getElementById('hotels').appendChild(node)
        }
    })
    
}

const getType = () => {
    fetch(tripType)
    .then((res) => res.json())
    .then((data) => {
        var output;
        for(i=0;i<data.length;i++){
            output += `<div class="tileContainer">
            <div class="tileComponent1">
                <img src="${data[i].image}" style="height: 180px;width:100%"/>
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    ${data[i].name}
                </div>
                <div class="componentSubHeading">
                    Plan you ${data[i].name} trip with Us
                </div>
            </div>
        </div>`
           
        }
        document.getElementById('content').innerHTML=output
    })
}
/*

<div class="tileContainer">
                <div class="tileComponent1">
                    <img src="https://i.ibb.co/8P41bJx/business.jpg" style="height: 180px;width:100%"/>
                </div>
                <div class="tileComponent2">
                    <div class="componentHeading">
                        Business
                    </div>
                    <div class="componentSubHeading">
                        Plan you Business trip with Us
                    </div>
                </div>
            </div>



/*
> create option tag   <option></option>
> create text for option "delhi"
> put text inside the option <option>"delhi"</option>
> put option inside the select list <select>
                                        <option>"delhi"</option>
                                    </select>

<select>
    <option value="1">Delhi</option>
</select>
*/