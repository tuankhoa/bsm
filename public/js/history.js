$(function () {
    var street1 = [
        $('#street1'),
        $('#historyStreet1'),
        $('#tableHistoryStreet1'),
        $('#dataHistoryStreet1'),
        'street1',
        'dataHistoryStreet1'
    ]
    
    street1[1].hide()
    $('#historyStreet2').hide()
    $('#historyStreet3').hide()
    $('#historyStreet4').hide()
    $('#historyStreet5').hide()
    $('#historyStreet6').hide()
    $('#historyStreet7').hide()
    $('#historyStreet8').hide()
    $('#historyStreet9').hide()
    $('#historyStreet10').hide()
    $('#historyStreet11').hide()
    $('#historyStreet12').hide()

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
    street1[1].click(function () {
        $('#showAllStreet').show()
        $(this).hide()
        street1[2].html(`<table class="table table-striped" border='4' id=${street1[5]} cellspacing="0"><tr><th>Day</th><th>Time</th><th>State</th><th>Error Lights</th></tr></table>`)
    })
})