import { createHeader } from './moduleCreateHeader'
import { createSection } from './moduleCreateSection'

const header = createHeader()
const sectionInstitucional = createSection('institucional')
const sectionServicos = createSection('servicos')
const sectionProdutos = createSection('produtos')
const sectionCertificacoes = createSection('certificacoes')  
const content = document.querySelector('.content')

content.addEventListener('scroll', parseSection)
 
function parseSection() {
    const heightSection = window.innerHeight
    const topDistance = content.scrollTop

    heightSection * 0.5 >= topDistance ? header.setAnchors(header.anchors[0]) : false
    heightSection * 0.5  < topDistance && 
    heightSection * 1.5 >= topDistance ? header.setAnchors(header.anchors[1]) : false
    heightSection * 1.5 <  topDistance && 
    heightSection * 2.5 >= topDistance ? header.setAnchors(header.anchors[2]) : false
    heightSection * 2.5 <  topDistance && 
    heightSection * 3.5 >= topDistance ? header.setAnchors(header.anchors[3]) : false
    heightSection * 3.5 <  topDistance && 
    heightSection * 4.5 >= topDistance ? header.setAnchors(header.anchors[4]) : false
    heightSection * 4.5 <  topDistance ? header.setAnchors(header.anchors[5]) : false
}