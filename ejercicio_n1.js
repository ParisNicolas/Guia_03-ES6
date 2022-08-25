///maquinas///

const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]


//filtra las de tipo maquinas y luego suma sus value usando reduce
//especificame entre ciclos del reduce se pasa objetos
//ya que al intentar obtener la propiedad value de la primera suma, es decir, 5650.value da error
//al final devuelve el valor no el objeto {value: "numero"}

console.log(inventory.filter(n => n.type === "machine").reduce((x,y) => ({value: x.value + y.value})).value);