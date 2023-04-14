import Converter from './class/Converter.js'

const beforeConvert = document.querySelector('#beforeConvert')
const number = document.querySelector('#number')
const res = document.querySelector('#numberConverted')
const afterConvert = document.querySelector('#afterConvert')
const buttonConvert = document.querySelector('#buttonConvert')
let unitBeforeConvert = ''
let unitAfterConvert = ''

afterConvert.value === ''
  ? buttonConvert?.setAttribute('disabled', '')
  : buttonConvert?.removeAttribute('disabled')

afterConvert.addEventListener('change', () => {
  afterConvert.value === ''
    ? buttonConvert.setAttribute('disabled', '')
    : buttonConvert.removeAttribute('disabled')
})

buttonConvert.addEventListener('click', () => {
  unitBeforeConvert = beforeConvert.value
  unitAfterConvert = afterConvert.value
  const convert = new Converter(
    beforeConvert.value,
    number.value,
    afterConvert.value,
  )

  res.value = convert.convert
})
