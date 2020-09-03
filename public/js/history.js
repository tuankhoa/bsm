$(function () {
    $('#search').click(function () {
        $('#tableHistory').html(`<table id="dataHistory" class="table table-striped text-center"><thead class="thead-dark"><tr><th scope="col">STT</th><th scope="col">Ngày</th><th scope="col">Tháng</th><th scope="col">Năm</th><th scope="col">Số giờ làm</th><th scope="col">Ghi chú</th></tr></thead><tbody></tbody></table>`)
        $.get(`/history?qDate=${$('#fDate').val()}&qMonth=${$('#fMonth').val()}&qYear=${$('#fYear').val()}`, function (res) {
            if (res.length == 0) {
                $('#dataHistory').append(function () {
                    return `<tr><td>#</td><td>Hông có</td><td>Hông có</td><td>Hông có</td><td>Hông có</td><td>Hông có</td></tr>`
                })
            } else {
                res.forEach((element, i) => {
                    $('#dataHistory').append(function () {
                        return `<tr><td>${i + 1}</td><td>${element.date}</td><td>${element.month}</td><td>${element.year}</td><td>${element.noHours}</td><td>${element.note || ''}</td></tr>`
                    })
                })
            }
        })
    })
    $('#searchAll').click(function () {
        $('#tableHistory').html(`<table id="dataHistory" class="table table-striped text-center"><thead class="thead-dark"><tr><th scope="col">STT</th><th scope="col">Ngày</th><th scope="col">Tháng</th><th scope="col">Năm</th><th scope="col">Số giờ làm</th><th scope="col">Ghi chú</th></tr></thead><tbody></tbody></table>`)
        $.get(`/historyall`, function (res) {
            res.forEach((element, i) => {
                $('#dataHistory').append(function () {
                    return `<tr><td>${i + 1}</td><td>${element.date}</td><td>${element.month}</td><td>${element.year}</td><td>${element.noHours}</td><td>${element.note || ''}</td></tr>`
                })
            })
        })
    })
})