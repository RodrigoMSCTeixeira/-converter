class Conversor {

  unidadeAtual: string
  valor: number
  converterPara: string

  constructor(unidadeAtual: string, valor: number, converterPara: string) {
    this.unidadeAtual = unidadeAtual
    this.valor = valor
    this.converterPara = converterPara
  }

  get converter () {
    return this.calc()
  }


  calc = () => {
    const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']

    const x = unidades.indexOf(this.unidadeAtual)
    const y = unidades.indexOf(this.converterPara)

    const resultado = x > y ? this.valor / Math.pow(10, x - y) : this.valor * Math.pow(10, y - x)

    return resultado
  }
}

const mParaKm = new Conversor('m', 1.34, 'km')
const KmParaMm = new Conversor('km', 1.5, 'mm')

console.log(`
Metros para quilómetros ${mParaKm.converter}
Quilómetros para Milímetros ${KmParaMm.converter}
`)