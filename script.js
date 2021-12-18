
class Sign {

    constructor(name, color, planet) {
        this.name = name;
        this.color = color;
        this.planet = planet
    }

}

const signs = [];

signs.push(new Sign('Virgo', 'Brown', 'Mercury'));
signs.push(new Sign('Aries', 'Red', 'Mars'));
signs.push(new Sign('Sagittarius', 'Purple', 'Jupiter'));
signs.push(new Sign('Leo', 'Orange', 'Sun'));
signs.push(new Sign('Pisces', 'Light Green', 'Mercury'));
signs.push(new Sign('Scorpio', 'Black', 'Mercury'));
signs.push(new Sign('Cancer', 'Silver', 'Cancer'));
signs.push(new Sign('Capricorn', 'Gray', 'Saturn'));
signs.push(new Sign('Taurus', 'Green', 'Venus'));
signs.push(new Sign('Aquarius', 'Blue', 'Saturn'));
signs.push(new Sign('Gemini', 'Yellow', 'Mercury'));
signs.push(new Sign('Libra', 'Pink', 'Venus'));

// const signs = [aries, sagittarius, leo, pisces, scorpio,
//     cancer, virgo, capricorn, taurus, aquarius, gemini, libra];


console.log(signs);


const submitBtn = document.getElementById('submitBtn');
const signSelect = document.getElementById('signSelect');
const container = document.getElementById('container');

for (const sign of signs) {
    let img = document.creat


}


function btnclicked() {
    const selectedSign = signSelect.selectedOptions[0].text

    alert('ew  ' + selectedSign)
}

submitBtn.addEventListener('click', btnclicked);

