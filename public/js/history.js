$(function () {
    $('#search').click(function () {
        $('#tableHistory').html(`<table id="dataHistory" class="table table-striped text-center"><thead class="thead-dark"><tr><th scope="col">Ngày</th><th scope="col">Tháng</th><th scope="col">Năm</th><th scope="col">Số giờ làm</th></tr></thead><tbody></tbody></table>`)
        $.get(`/history?qDate=${$('#fDate').val()}&qMonth=${$('#fMonth').val()}&qYear=${$('#fYear').val()}`, function (res) {
            res.forEach(element => {
                $('#dataHistory').append(function () {
                    return `<tr><td>${element.date}</td><td>${element.month}</td><td>${element.year}</td><td>${element.noHours}</td></tr>`
                })
            })
        })
    })
    $('#searchAll').click(function () {
        $('#tableHistory').html(`<table id="dataHistory" class="table table-striped text-center"><thead class="thead-dark"><tr><th scope="col">Ngày</th><th scope="col">Tháng</th><th scope="col">Năm</th><th scope="col">Số giờ làm</th></tr></thead><tbody></tbody></table>`)
        $.get(`/historyall`, function (res) {
            res.forEach(element => {
                $('#dataHistory').append(function () {
                    return `<tr><td>${element.date}</td><td>${element.month}</td><td>${element.year}</td><td>${element.noHours}</td></tr>`
                })
            })
        })
    })
})