

const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generatePets() {

    let pets = []

    for (let id = 1; id <= 100; id++) {

        let sex = faker.helpers.arrayElement(['female', 'male']);
        let name = faker.name.firstName(sex);
        let description = faker.lorem.words(20);
        let location = faker.address.cityName();
        let ageCategory = faker.helpers.arrayElement(["baby", "adult", "senior"]);
        let category = faker.helpers.arrayElement(["Dog", "Cat", "Bird", "Reptile"]);
       
        let image;
        if (category == "Cat") {
             image = faker.image.cats(600, 400, true);
        } else if (category == "Dog") {
             image = faker.image.imageUrl(600, 400, 'dog', true);
        } else if (category == "Bird") {
            image = faker.image.imageUrl(600, 400, 'bird', true);
        } else {
            image = faker.image.imageUrl(600, 400, 'snake' || 'lizard' || 'gecko', true);
        }

        let needs = faker.datatype.boolean();
        let household = faker.helpers.arrayElement(["baby", "child", "adult", "senior"]);
        let other_pets = faker.datatype.boolean();

        pets.push({
            "id": id,
            "name": name,
            "sex": sex, 
            "image": image,
            "description": description,
            "location": location,
            "ageCategory": ageCategory,
            "category": category,
            "needs": needs,
            "household": household,
            "other_pets": other_pets
        });
    }

    return { "data": pets }
}

let dataObj = generatePets();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

