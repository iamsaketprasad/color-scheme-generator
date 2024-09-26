let colorsArray = []
let colorCode = `#F55A5A`

function colorPicker(value){
    colorCode = value
}

document.getElementById("get-color-scheme").addEventListener("click", getColorScheme)

function renderColor() {
    let colorHtml = ``
    let hexColorValueHtml = ``
    colorsArray.forEach( color => {
        colorHtml += `
            <div>
                <img src="${color.image.bare}">
            </div>
        `
        hexColorValueHtml += `
            <div>
                ${color.hex.value}
            </div>
        `
    })
    document.getElementById("color").innerHTML = colorHtml
    document.getElementById("hex-color-value").innerHTML = hexColorValueHtml
}

function getColorScheme() {
    const colorSchemeMode = document.getElementById("color-scheme-mode").value
    colorCode = colorCode.replace("#", "")
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorSchemeMode}&count=5`)
    .then(res => res.json())
    .then(data => {
        colorsArray = data.colors
        renderColor()
    })
}

getColorScheme()


