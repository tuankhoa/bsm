$(function () {
    //#region declare all street
    var street1 = [
        $('#street1'),
        $('#historyStreet1'),
        $('#tableHistoryStreet1'),
        'dataHistoryStreet1',
        'street1'
    ]
    var street2 = [
        $('#street2'),
        $('#historyStreet2'),
        $('#tableHistoryStreet2'),
        'dataHistoryStreet2',
        'street2'
    ]
    var street3 = [
        $('#street3'),
        $('#historyStreet3'),
        $('#tableHistoryStreet3'),
        'dataHistoryStreet3',
        'street3'
    ]
    var street4 = [
        $('#street4'),
        $('#historyStreet4'),
        $('#tableHistoryStreet4'),
        'dataHistoryStreet4',
        'street4'
    ]
    var street5 = [
        $('#street5'),
        $('#historyStreet5'),
        $('#tableHistoryStreet5'),
        'dataHistoryStreet5',
        'street5'
    ]
    var street6 = [
        $('#street6'),
        $('#historyStreet6'),
        $('#tableHistoryStreet6'),
        'dataHistoryStreet6',
        'street6'
    ]
    var street7 = [
        $('#street7'),
        $('#historyStreet7'),
        $('#tableHistoryStreet7'),
        'dataHistoryStreet7',
        'street7'
    ]
    var street8 = [
        $('#street8'),
        $('#historyStreet8'),
        $('#tableHistoryStreet8'),
        'dataHistoryStreet8',
        'street8'
    ]
    var street9 = [
        $('#street9'),
        $('#historyStreet9'),
        $('#tableHistoryStreet9'),
        'dataHistoryStreet9',
        'street9'
    ]
    var street10 = [
        $('#street10'),
        $('#historyStreet10'),
        $('#tableHistoryStreet10'),
        'dataHistoryStreet10',
        'street10'
    ]
    var street11 = [
        $('#street11'),
        $('#historyStreet11'),
        $('#tableHistoryStreet11'),
        'dataHistoryStreet11',
        'street11'
    ]
    var street12 = [
        $('#street12'),
        $('#historyStreet12'),
        $('#tableHistoryStreet12'),
        'dataHistoryStreet12',
        'street12'
    ]

    var streets = [
        street1,
        street2,
        street3,
        street4,
        street5,
        street6,
        street7,
        street8,
        street9,
        street10,
        street11,
        street12,
    ]
    //#endregion declare all street

    for (var i = 0; i < 12; i++) {
        streets[i][1].hide()
    }

    street1[0].click(function () {
        $('#showAllStreet').hide()
        street1[1].show()
        $.get(`/history?streetname=${street1[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet1').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street2[0].click(function () {
        $('#showAllStreet').hide()
        street2[1].show()
        $.get(`/history?streetname=${street2[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet2').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street3[0].click(function () {
        $('#showAllStreet').hide()
        street3[1].show()
        $.get(`/history?streetname=${street3[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet3').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street4[0].click(function () {
        $('#showAllStreet').hide()
        street4[1].show()
        $.get(`/history?streetname=${street4[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet4').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street5[0].click(function () {
        $('#showAllStreet').hide()
        street5[1].show()
        $.get(`/history?streetname=${street5[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet5').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street6[0].click(function () {
        $('#showAllStreet').hide()
        street6[1].show()
        $.get(`/history?streetname=${street6[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet6').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street7[0].click(function () {
        $('#showAllStreet').hide()
        street7[1].show()
        $.get(`/history?streetname=${street7[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet7').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street8[0].click(function () {
        $('#showAllStreet').hide()
        street8[1].show()
        $.get(`/history?streetname=${street8[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet8').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street9[0].click(function () {
        $('#showAllStreet').hide()
        street9[1].show()
        $.get(`/history?streetname=${street9[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet9').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street10[0].click(function () {
        $('#showAllStreet').hide()
        street10[1].show()
        $.get(`/history?streetname=${street10[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet10').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street11[0].click(function () {
        $('#showAllStreet').hide()
        street11[1].show()
        $.get(`/history?streetname=${street11[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet11').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street12[0].click(function () {
        $('#showAllStreet').hide()
        street12[1].show()
        $.get(`/history?streetname=${street12[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet12').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })

    streets.forEach(function (street) {
        street[1].click(function () {
            $('#showAllStreet').show()
            $(this).hide()
            street[2].html(`<table class="table table-striped" border='4' id=${street[3]} cellspacing="0"><tr><th>Day</th><th>Time</th><th>State</th><th>Error Lights</th></tr></table>`)
        })
    })
})