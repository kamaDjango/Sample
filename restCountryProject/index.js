function getData(){
    var request = new XMLHttpRequest()
    request.open("GET","https://restcountries.com/v3.1/name/india")
    request.send()

    request.addEventListener("load",function(){
        const [data] = JSON.parse(this.responseText)
        // console.log((data));
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("area").innerHTML = data.area
        document.getElementById("flag").src = data.flags.png
        document.getElementById("border").innerHTML = data.borders
        document.getElementById("timezone").innerHTML = data.timezones
        document.getElementById("region").innerHTML = data.region
        document.getElementById("unmember").innerHTML = data.unMember
        document.getElementById("population").innerHTML = data.population
        document.getElementById("capital").innerHTML = data.capital[0]
    })
}
getData()

function getData2(){
    console.log("called");
    var request = new XMLHttpRequest()
    var name = document.getElementById("name").value
    request.open("GET","https://restcountries.com/v3.1/name/"+name)
    request.send()
    request.addEventListener("load",function(){
        const [data] = JSON.parse(this.responseText)
        // console.log((data));
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("area").innerHTML = data.area
        document.getElementById("flag").src = data.flags.png
        document.getElementById("border").innerHTML = data.borders
        document.getElementById("timezone").innerHTML = data.timezones
        document.getElementById("region").innerHTML = data.region
        document.getElementById("unmember").innerHTML = data.unMember
        document.getElementById("population").innerHTML = data.population
        document.getElementById("capital").innerHTML = data.capital[0]
    })
}