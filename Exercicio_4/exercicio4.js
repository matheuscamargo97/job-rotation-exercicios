//  SP – R$67.836,43
// 	RJ – R$36.678,66
// 	MG – R$29.229,88
// 	ES – R$27.165,48
// 	Outros – R$19.849,53
let total = 0;
const obj = [
  {
    estado: "SP",
    valor: 67836.43,
  },
  {
    estado: "RJ",
    valor: 36678.66,
  },
  {
    estado: "MG",
    valor: 29229.88,
  },
  {
    estado: "ES",
    valor: 27165.48,
  },
  {
    estado: "Outros",
    valor: 19849.53,
  },
];

obj.forEach((it) => {
  total += it.valor;
});

obj.forEach((it)=>{

  perc = it.valor*100/total;

  console.log(`Percentual de ${it.estado} é de ${perc.toFixed(2)}%`);

})

