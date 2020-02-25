var socket = io()

$('#getData').click(function () {
    socket.emit('getData', 0)
})

socket.on('resData', function (res) {
    downloadJsonFile(res, 'data')
})

function downloadJsonFile(obj, fileName) {
    document.body.appendChild(document.createElement('br'))
    var json = JSON.stringify(obj)
    // With createObjectURL
    var link2 = document.createElement('a')

    var dataBlob = new Blob([json], { type: 'text/plain' })
    var objUrl = URL.createObjectURL(dataBlob)

    link2.href = objUrl
    link2.innerHTML = `${fileName}`
    link2.download = `${fileName}.json`
    document.body.appendChild(link2)
    // link2.click()
}
