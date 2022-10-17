const angka = [1,2,3,4,5,6,7,8,65];
function bilangan(a,b,c,...param){
  return console.log(param);
}

bilangan(1,3,4,2,6,8,9,10,23,12,50);

function keranjang(...param){
  return console.log(param);
}

keranjang("sampo lifebuoy","soklin liquid","indomie ayam bawang");

//filter by
function filterBy(type,...values){
  //filterBy
  return values.filter(v => typeof v === type )
}

console.log(filterBy("boolean",1,2,5,"asheva",true,false,6,7,"doddy"))

//rest parameter pada object
const team ={
  pm:"asheva",
  frontend1:"dian",
  frontend2:"erik",
  backend:"doddy",
  devops:"wandy"
}

const {pm,...myTeam} = team;
console.log(pm);
console.log(myTeam);
 
//rest param dengan destructuring
const bem =["asheva","sandhika","erik","doddy","amin"];
const [ketua,wakil,...anggota]=bem;
console.log(`ketua : ${ketua} 
wakil : ${wakil}
anggota : ${anggota}`);
