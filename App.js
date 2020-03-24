function pegarResultados() {
    let r = document.getElementById('r').value
    let g = document.getElementById('g').value
    let b = document.getElementById('b').value

    let espessura = document.getElementById('espessura').value
    let borderRadius = document.getElementById('border-radius').value

    let type = document.getElementById('type').value

    let prototipo = document.getElementById('prototipos')

    prototipo.style.border = `${ espessura }px ${ type } rgb(${r}, ${g}, ${b})`
    prototipo.style.borderRadius = `${borderRadius}px`

    let code = document.getElementById('code')

    let codeText = `.border { <br>
        border: ${ espessura }px ${ type } rgb(${ r }, ${ g }, ${ b }); <br>
        border-radius: ${ borderRadius }px; <br>
    }`

    code.innerHTML = codeText

}
