const fs = require('fs')
var request = require('request')

module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('getTask', async (data) => {
            var emptyArrTask = true
            var tasksLine = []
            var pageTask = 0
            console.log('get data tasks of lineId ' + data)
            while (emptyArrTask) {
                var currentTasks = JSON.parse(await doRequest(tasksGetOption(data, pageTask)))
                if (currentTasks.length) {
                    currentTasks.forEach(task => {
                        tasksLine.push(task)
                    })
                    pageTask++
                } else {
                    emptyArrTask = false
                }
            }
            console.log('done!')
            socket.emit('resTask', tasksLine)
        })

        socket.on('getCalendar', async (data) => {
            var emptyArrCalendar = true
            var components = []
            var pageCalendar = 0
            while (emptyArrCalendar) {
                var currentComponents = JSON.parse(await doRequest(calendarGetOption(data.lineId, data.machineId, pageCalendar)))
                if (currentComponents.length) {
                    currentComponents.forEach(async component => {
                        components.push(component)
                    })
                    pageCalendar++
                } else {
                    emptyArrCalendar = false
                }
            }
            socket.emit('resCalendar', components)
        })
        // socket.on('getData', async function (data) {
        //     var lines = JSON.parse((fs.readFileSync(`./jsonFull/HCL/newLines.json`)).toString())
        //     var emptyArrTask = true
        //     var tasksLine = []
        //     var pageTask = 0
        //     while (emptyArrTask) {
        //         var currentTasks = JSON.parse(await doRequest(tasksGetOption(1, pageTask)))
        //         if (currentTasks.length) {
        //             currentTasks.forEach(task => {
        //                 tasksLine.push(task)
        //             })
        //             pageTask++
        //         } else {
        //             emptyArrTask = false
        //         }
        //     }
        //     socket.emit('resData', tasksLine)
        // })
    })
}

function tasksGetOption(lineId, page) {
    return {
        'method': 'GET',
        'url': `https://pmweb.az.team/api/tasks?lineId.equals=${lineId}&done.equals=false&late.equals=false&weekFrom.greaterOrEqualThan=2018-12-31T00:00:00.000Z&weekTo.lessOrEqualThan=2020-04-19T23:59:59.999Z&size=2000&page=${page}&sort=time,asc&sort=id,asc`,
        'headers': {
            'Host': 'pmweb.az.team',
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0dWFua2hvYSIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfU1VQRVJVU0VSLFJPTEVfVVNFUiIsInBsYW50IjoyLCJleHAiOjE1ODk2OTU2Mzh9.BOL1ZEFLvS6QsDWatmc8pHULbk2v9mYesbk0O1aT9zQlGXlqlBTYlz27OwZrCpXUKBVTDTjoa5vUJvoU9IBOfQ`,
            'User-Agent': 'Mozilla/5.0 (compatible; Rigor/1.0.0; http://rigor.com)',
            // 'Postman-Token': 'd2938c16-cd54-405f-aef8-65e7cac8b76a',
            'Accept': '*/*',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        }
    }
}

function calendarGetOption(lineId, machineId, page) {
    return {
        'method': 'GET',
        'url': `https://pmweb.az.team/api/calendar/components?groupDetails.equals=false&enableGroupDetails.equals=false&breakdowns.equals=false&time.greaterOrEqualThan=2018-12-31T00:00:00.000Z&time.lessOrEqualThan=2020-04-19T23:59:59.999Z&lineId.equals=${lineId}&machineId.equals=${machineId}&page=${page}&size=2000`,
        'headers': {
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0dWFua2hvYSIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfU1VQRVJVU0VSLFJPTEVfVVNFUiIsInBsYW50IjoyLCJleHAiOjE1ODk2OTU2Mzh9.BOL1ZEFLvS6QsDWatmc8pHULbk2v9mYesbk0O1aT9zQlGXlqlBTYlz27OwZrCpXUKBVTDTjoa5vUJvoU9IBOfQ`,
            'User-Agent': 'Mozilla/5.0 (compatible; Rigor/1.0.0; http://rigor.com)',
            'Accept': '*/*',
            'Cache-Control': 'no-cache',
            // 'Postman-Token': 'd2938c16-cd54-405f-aef8-65e7cac8b76a',
            'Host': 'pmweb.az.team',
            'Connection': 'keep-alive'
        }
    }
}

function doRequest(option) {
    return new Promise((resolve, reject) => {
        request(option, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(error)
            }
        })
    })
}
