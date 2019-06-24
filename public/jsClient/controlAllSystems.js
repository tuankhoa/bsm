var socket = io()

$('#update').click(function () {
    var info = [
        $('#date').val(),
        $('#month').val(),
        $('#year').val(),
        $('#noHours').val()
    ]
    socket.emit('update', info)
})

socket.on('addnew', function (mes) {
    alert(mes)
})

socket.on('update', function (mes) {
    alert(mes)
})

socket.on('delete', function (mes) {
    alert(mes)
})