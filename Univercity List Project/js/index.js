async function getData(){
    var rawdata =await fetch("http://universities.hipolabs.com/search?country=india")
    var data = await rawdata.json()

    var table = document.getElementById("table")
    for(let i=0;i<data.length;i++)
    {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.innerHTML=i+1
        var td2 = document.createElement("td")
        td2.innerHTML=data[i].name
        var td3 = document.createElement("td")
        var a = document.createElement('a')
        a.href = data[i].web_pages[0]
        a.innerHTML=data[i].web_pages[0]
        a.target="_blank"
        td3.appendChild(a)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        table.appendChild(tr)
    }
}
getData()


async function fun(){
    var name = document.getElementById("name").value
    var rawdata =await fetch("http://universities.hipolabs.com/search?country="+name)
    var data = await rawdata.json()

    console.log(data);
    var div = document.getElementById("second")
    var table = document.getElementById("table")
    div.removeChild(table)

    table = document.createElement("table")
    var tr = document.createElement("tr")
    var td1 = document.createElement("th")
    td1.innerHTML="SN"
    var td2 = document.createElement("th")
    td2.innerHTML="Univercity Name"
    var td3 = document.createElement("th")
    td3.innerHTML="Website Address"
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    table.appendChild(tr)
    table.id="table"
    div.appendChild(table)
    for(let i=0;i<data.length;i++)
    {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.innerHTML=i+1
        var td2 = document.createElement("td")
        td2.innerHTML=data[i].name
        var td3 = document.createElement("td")
        var a = document.createElement('a')
        a.href = data[i].web_pages[0]
        a.innerHTML=data[i].web_pages[0]
        a.target="_blank"
        td3.appendChild(a)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        table.appendChild(tr)
    }
}