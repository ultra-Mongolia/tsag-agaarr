
const input = document.getElementsByTagName('input')[0];

const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.speed');
const desc = document.querySelector('.desc');
const Btn = document.getElementsByTagName('button')[0];
const ol=document.getElementsByTagName('ol');
const img=document.querySelector('.img');

Btn.addEventListener("click",()=>{
	let city = input.value;
	console.log(city);
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	pro => {
		console.log(pro);
		console.log(pro.name);
		console.log(pro.main.temp);
		console.log(pro.weather[0].description);
		console.log(pro.wind.speed);
		console.log(pro.wind.deg);
		name.innerText = pro.name;
		temp.innerText = pro.main.temp;
		desc.innerText = pro.weather[0].description;
		wind.innerText = pro.wind.speed;
		wind.innerText = pro.wind.deg;
		pro.weather[0].description = clouds = 
		
	}
);
});

	