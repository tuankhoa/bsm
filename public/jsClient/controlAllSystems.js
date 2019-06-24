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

$('#searchSalary').click(function () {
    if ($('#fDate').val() == '' & $('#fMonth').val() != '' & $('#fYear').val() != '') {
        console.log('ok')
        var data = [
            $('#fMonth').val(),
            $('#fYear').val()
        ]
        $('#txtMonthYear').text(`$ tháng ${$('#fMonth').val()}-${$('#fYear').val()} của bé: `)
        $('#spin').html(`<div class="spinner-border text-success"></div>`)
        socket.emit('salary', data)
    }
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

socket.on('salaryres', function (data) {
    data *= 21500
    if(data / 1000 <1){
        $('#salary').text('Không có đồng nào T_T')
        $('#spin').html('')
    }
    if (data / 1000 >= 1 & data / 1000000 < 1) {
        $('#salary').text(data / 1000 + ' ngàng')
        $('#spin').html('')
    }
    if (data / 1000000 >= 1) {
        $('#salary').text(data / 1000000 + ' chiệu')
        $('#spin').html('')
    }
})