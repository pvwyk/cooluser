let animalNames = [ "kudu", "Ant", "Antelope", "Baboon", "Bat", "Beagle", "Bear", "Bird", "Butterfly", "Cat", "Caterpillar", "Chicken","Cow", "Dog", "Dolphin", "Donkey", "Eagle", "Fish", , "Fox", "Frog", "Gerbil", "Goose", "Gopher", "Gorilla", "Heron", "HoneyBee",]
let descriptiveNames = ["Arobatic","Adorable","Adventurous","Brave","Bright","Brilliant","Concrete","Conventional","Foolhardy","Gregarious","Grim","Handsome","Handy","Intelligent","Intrepid","Joyful","Jubilant","Keen","Kooky","Lanky","Lazy","Limp","Luxurious","Mediocre","Mellow","Miserable","Nocturnal","Organic","Ornate","Ordinary","Powerless","Practical","Precious","Questionable" ,"Quirky" ,"Radiant","Rustic","Sly","Sophisticated","Stunning","Tattered","Horny","Weathered"]
let resultEl = document.getElementById("result-el")

function coolName(){
        let getOne = Math.floor(Math.random() * animalNames.length)
        let getTwo = Math.floor(Math.random() * descriptiveNames.length)

        let randomAnimal = animalNames[getOne]
        let randomDescription = descriptiveNames[getTwo]

        let userName = randomDescription + randomAnimal
        console.log(userName)
        resultEl.textContent = userName
        

}

console.log("test this")