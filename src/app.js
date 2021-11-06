console.log("merhaba Fırat")
//rest
function poplation(id,...product) {
    console.log(id)
    console.log(product)
    
}
poplation(1,["fırat0","okşak"])

let city=["Ankara","İstanbul","İzmir",["Türkiye","Almanya"]]//dizi oluşturma
let [city1,city2,city3,[country,country2]]=city
console.log(city1)
console.log(city2)
console.log(city3)
console.log(country)
console.log(country2)

let countryob={id:1,name:"ABD"}
let {id,name}=countryob
console.log(id)
console.log(name)



