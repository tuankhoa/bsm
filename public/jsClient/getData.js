var socket = io()

var tempText

// 1111111111111111
$('#getTask1').click(function () {
    tempText = $('#line1')
    var lineId = 0
    linesFoods.forEach(l => {
        if (l.count == $('#line1').val()) {
            lineId = l.id
        }
    })
    socket.emit('getTask', lineId)
})
$('#getCalendar1').click(function () {
    tempText = $('#machine1')
    var data = { lineId: 0, machineId: 0 }
    machinesFoods.forEach(m => {
        if (m.count == $('#machine1').val()) {
            data.lineId = m.line.id
            data.machineId = m.id
        }
    })
    socket.emit('getCalendar', data)
})
// 22222222222222222
$('#getTask2').click(function () {
    tempText = $('#line2')
    var lineId = 0
    linesHcl.forEach(l => {
        if (l.count == $('#line2').val()) {
            lineId = l.id
        }
    })
    socket.emit('getTask', lineId)
})
$('#getCalendar2').click(function () {
    tempText = $('#machine2')
    var data = { lineId: 0, machineId: 0 }
    machinesHcl.forEach(m => {
        if (m.count == $('#machine2').val()) {
            data.lineId = m.line.id
            data.machineId = m.id
        }
    })
    socket.emit('getCalendar', data)
})
// 33333333333333333
$('#getTask3').click(function () {
    tempText = $('#line3')
    var lineId = 0
    linesOral.forEach(l => {
        if (l.count == $('#line3').val()) {
            lineId = l.id
        }
    })
    socket.emit('getTask', lineId)
})
$('#getCalendar3').click(function () {
    tempText = $('#machine3')
    var data = { lineId: 0, machineId: 0 }
    machinesOral.forEach(m => {
        if (m.count == $('#machine3').val()) {
            data.lineId = m.line.id
            data.machineId = m.id
        }
    })
    socket.emit('getCalendar', data)
})
// 4444444444444444444
$('#getTask4').click(function () {
    tempText = $('#line4')
    var lineId = 0
    linesPcl.forEach(l => {
        if (l.count == $('#line4').val()) {
            lineId = l.id
        }
    })
    socket.emit('getTask', lineId)
})
$('#getCalendar4').click(function () {
    tempText = $('#machine4')
    var data = { lineId: 0, machineId: 0 }
    machinesPcl.forEach(m => {
        if (m.count == $('#machine4').val()) {
            data.lineId = m.line.id
            data.machineId = m.id
        }
    })
    socket.emit('getCalendar', data)
})
// 55555555555555555555555
$('#getTask5').click(function () {
    tempText = $('#line5')
    var lineId = 0
    linesUtility.forEach(l => {
        if (l.count == $('#line5').val()) {
            lineId = l.id
        }
    })
    socket.emit('getTask', lineId)
})
$('#getCalendar5').click(function () {
    tempText = $('#machine5')
    var data = { lineId: 0, machineId: 0 }
    machinesUtility.forEach(m => {
        if (m.count == $('#machine5').val()) {
            data.lineId = m.line.id
            data.machineId = m.id
        }
    })
    socket.emit('getCalendar', data)
})

socket.on('resTask', function (data) {
    downloadJsonFile(data, `${tempText.val()}`)
    tempText.val(`${parseInt(tempText.val()) + 1}`)
})
socket.on('resCalendar', function (data) {
    downloadJsonFile(data, `${tempText.val()}`)
    tempText.val(`${parseInt(tempText.val()) + 1}`)
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
