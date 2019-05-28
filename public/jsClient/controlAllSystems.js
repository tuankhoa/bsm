var socket = io()

//#region declare all Lights's Streets
var liStr1 = [
    $('#street1Alarm'),
    $('#li1Str1'),
    $('#li2Str1'),
    $('#li3Str1'),
    $('#li4Str1'),
    $('#li5Str1'),
    $('#li6Str1'),
    $('#li7Str1'),
    $('#li8Str1'),
    $('#btnTurnOn1'),
    $('#btnTurnOff1'),
    '1'
]

var liStr2 = [
    $('#street2Alarm'),
    $('#li1Str2'),
    $('#li2Str2'),
    $('#li3Str2'),
    $('#li4Str2'),
    $('#li5Str2'),
    $('#li6Str2'),
    $('#li7Str2'),
    $('#li8Str2'),
    $('#btnTurnOn2'),
    $('#btnTurnOff2'),
    '2'
]

var liStr3 = [
    $('#street3Alarm'),
    $('#li1Str3'),
    $('#li2Str3'),
    $('#li3Str3'),
    $('#li4Str3'),
    $('#li5Str3'),
    $('#li6Str3'),
    $('#li7Str3'),
    $('#li8Str3'),
    $('#btnTurnOn3'),
    $('#btnTurnOff3'),
    '3'
]

var liStr4 = [
    $('#street4Alarm'),
    $('#li1Str4'),
    $('#li2Str4'),
    $('#li3Str4'),
    $('#li4Str4'),
    $('#li5Str4'),
    $('#li6Str4'),
    $('#li7Str4'),
    $('#li8Str4'),
    $('#btnTurnOn4'),
    $('#btnTurnOff4'),
    '4'
]

var liStr5 = [
    $('#street5Alarm'),
    $('#li1Str5'),
    $('#li2Str5'),
    $('#li3Str5'),
    $('#li4Str5'),
    $('#li5Str5'),
    $('#li6Str5'),
    $('#li7Str5'),
    $('#li8Str5'),
    $('#btnTurnOn5'),
    $('#btnTurnOff5'),
    '5'
]

var liStr6 = [
    $('#street6Alarm'),
    $('#li1Str6'),
    $('#li2Str6'),
    $('#li3Str6'),
    $('#li4Str6'),
    $('#li5Str6'),
    $('#li6Str6'),
    $('#li7Str6'),
    $('#li8Str6'),
    $('#btnTurnOn6'),
    $('#btnTurnOff6'),
    '6'
]

var liStr7 = [
    $('#street7Alarm'),
    $('#li1Str7'),
    $('#li2Str7'),
    $('#li3Str7'),
    $('#li4Str7'),
    $('#li5Str7'),
    $('#li6Str7'),
    $('#li7Str7'),
    $('#li8Str7'),
    $('#btnTurnOn7'),
    $('#btnTurnOff7'),
    '7'
]

var liStr8 = [
    $('#street8Alarm'),
    $('#li1Str8'),
    $('#li2Str8'),
    $('#li3Str8'),
    $('#li4Str8'),
    $('#li5Str8'),
    $('#li6Str8'),
    $('#li7Str8'),
    $('#li8Str8'),
    $('#btnTurnOn8'),
    $('#btnTurnOff8'),
    '8'
]

var liStr9 = [
    $('#street9Alarm'),
    $('#li1Str9'),
    $('#li2Str9'),
    $('#li3Str9'),
    $('#li4Str9'),
    $('#li5Str9'),
    $('#li6Str9'),
    $('#li7Str9'),
    $('#li8Str9'),
    $('#btnTurnOn9'),
    $('#btnTurnOff9'),
    '9'
]

var liStr10 = [
    $('#street10Alarm'),
    $('#li1Str10'),
    $('#li2Str10'),
    $('#li3Str10'),
    $('#li4Str10'),
    $('#li5Str10'),
    $('#li6Str10'),
    $('#li7Str10'),
    $('#li8Str10'),
    $('#btnTurnOn10'),
    $('#btnTurnOff10'),
    'x'
]

var liStr11 = [
    $('#street11Alarm'),
    $('#li1Str11'),
    $('#li2Str11'),
    $('#li3Str11'),
    $('#li4Str11'),
    $('#li5Str11'),
    $('#li6Str11'),
    $('#li7Str11'),
    $('#li8Str11'),
    $('#btnTurnOn11'),
    $('#btnTurnOff11'),
    'y'
]

var liStr12 = [
    $('#street12Alarm'),
    $('#li1Str12'),
    $('#li2Str12'),
    $('#li3Str12'),
    $('#li4Str12'),
    $('#li5Str12'),
    $('#li6Str12'),
    $('#li7Str12'),
    $('#li8Str12'),
    $('#btnTurnOn12'),
    $('#btnTurnOff12'),
    'z'
]

var liStr = [
    liStr1,
    liStr2,
    liStr3,
    liStr4,
    liStr5,
    liStr6,
    liStr7,
    liStr8,
    liStr9,
    liStr10,
    liStr11,
    liStr12
]
//#endregion declare all streets all Lights's Streets

//#region declare all crossroads
var cr1StrALampColor = [
    '',
    $('#Istr1Red'),
    $('#Istr1Yellow'),
    $('#Istr1Green'),
    $('#Istr6Red'),
    $('#Istr6Yellow'),
    $('#Istr6Green')
]

var cr1StrBLampColor = [
    '',
    $('#Istr3Red'),
    $('#Istr3Yellow'),
    $('#Istr3Green'),
    $('#Istr4Red'),
    $('#Istr4Yellow'),
    $('#Istr4Green')
]

var cr2StrALampColor = [
    '',
    $('#IIstr2Red'),
    $('#IIstr2Yellow'),
    $('#IIstr2Green'),
    $('#IIstr7Red'),
    $('#IIstr7Yellow'),
    $('#IIstr7Green')
]

var cr2StrBLampColor = [
    '',
    $('#IIstr4Red'),
    $('#IIstr4Yellow'),
    $('#IIstr4Green'),
    $('#IIstr5Red'),
    $('#IIstr5Yellow'),
    $('#IIstr5Green')
]

var cr3StrALampColor = [
    '',
    $('#IIIstr6Red'),
    $('#IIIstr6Yellow'),
    $('#IIIstr6Green'),
    $('#IIIstr11Red'),
    $('#IIIstr11Yellow'),
    $('#IIIstr11Green')
]

var cr3StrBLampColor = [
    '',
    $('#IIIstr8Red'),
    $('#IIIstr8Yellow'),
    $('#IIIstr8Green'),
    $('#IIIstr9Red'),
    $('#IIIstr9Yellow'),
    $('#IIIstr9Green')
]

var cr4StrALampColor = [
    '',
    $('#IVstr7Red'),
    $('#IVstr7Yellow'),
    $('#IVstr7Green'),
    $('#IVstr12Red'),
    $('#IVstr12Yellow'),
    $('#IVstr12Green')
]

var cr4StrBLampColor = [
    '',
    $('#IVstr9Red'),
    $('#IVstr9Yellow'),
    $('#IVstr9Green'),
    $('#IVstr10Red'),
    $('#IVstr10Yellow'),
    $('#IVstr10Green')
]

var btnTurnAllTraffics = [
    '',
    $('#btnTurnOnAllTraffics'),
    $('#btnTurnOffAllTraffics')
]

var crStrLampColor = [
    cr1StrALampColor,
    cr1StrBLampColor,
    cr2StrALampColor,
    cr2StrBLampColor,
    cr3StrALampColor,
    cr3StrBLampColor,
    cr4StrALampColor,
    cr4StrBLampColor
]
//#endregion declare all crossroad

//#region declare all times of crossroads
var turnCr = [
    $('#btnTurnOnCrI'),
    $('#btnTurnOffCrI'),
    '1',
    $('#btnTurnOnCrII'),
    $('#btnTurnOffCrII'),
    '2',
    $('#btnTurnOnCrIII'),
    $('#btnTurnOffCrIII'),
    '3',
    $('#btnTurnOnCrIV'),
    $('#btnTurnOffCrIV'),
    '4'
]

var timeCr1 = [
    $('#setTimeI'),
    $('#setTimeGreenAI'),
    $('#setTimeYellowAI'),
    $('#setTimeGreenBI'),
    $('#setTimeYellowBI'),
    $('#timeGreenAI'),
    $('#timeYellowAI'),
    $('#timeGreenBI'),
    $('#timeYellowBI'),
    '1'
]

var timeCr2 = [
    $('#setTimeII'),
    $('#setTimeGreenAII'),
    $('#setTimeYellowAII'),
    $('#setTimeGreenBII'),
    $('#setTimeYellowBII'),
    $('#timeGreenAII'),
    $('#timeYellowAII'),
    $('#timeGreenBII'),
    $('#timeYellowBII'),
    '2'
]

var timeCr3 = [
    $('#setTimeIII'),
    $('#setTimeGreenAIII'),
    $('#setTimeYellowAIII'),
    $('#setTimeGreenBIII'),
    $('#setTimeYellowBIII'),
    $('#timeGreenAIII'),
    $('#timeYellowAIII'),
    $('#timeGreenBIII'),
    $('#timeYellowBIII'),
    '3'
]

var timeCr4 = [
    $('#setTimeIV'),
    $('#setTimeGreenAIV'),
    $('#setTimeYellowAIV'),
    $('#setTimeGreenBIV'),
    $('#setTimeYellowBIV'),
    $('#timeGreenAIV'),
    $('#timeYellowAIV'),
    $('#timeGreenBIV'),
    $('#timeYellowBIV'),
    '4'
]

var timeCr = [
    timeCr1,
    timeCr2,
    timeCr3,
    timeCr4,
]
//#endregion declare all times of crossroads

//#region emit from Client to Server

// Functions waiting btn click to emit from Client to Server
function controlLightStreet(liStr) {
    liStr[9].click(function () {
        socket.emit('dataCtS', `1${liStr[11]}`)
    })
    liStr[10].click(function () {
        socket.emit('dataCtS', `0${liStr[11]}`)
    })
}

function controlTrafficLamp(turnCr) {
    turnCr[0].click(function () {
        socket.emit('dataCtS', `t${turnCr[2]}`)
    })
    turnCr[1].click(function () {
        socket.emit('dataCtS', `f${turnCr[2]}`)
    })
}

function sentTimeTrafficLamp(timeCr) {
    timeCr[0].click(function () {
        socket.emit('dataCtS', `c${timeCr[9]}${timeCr[1].val()}${timeCr[2].val()}${timeCr[3].val()}${timeCr[4].val()}`)
    })
}

// street light
for (var i = 0; i < liStr.length; i++) {
    controlLightStreet(liStr[i])
}
// 1a and 0a are : 1/0 All
$('#btnTurnOnAll').click(function () {
    socket.emit('dataCtS', '1a')
})
$('#btnTurnOffAll').click(function () {
    socket.emit('dataCtS', '0a')
})

// traffic lamp
// true/false crossroad I, II, III, IV
for (var i = 0; i < 12; i += 3) {
    var turnCrTemp = new Array()
    for (var j = 0; j < 3; j++) {
        turnCrTemp[j] = turnCr[i + j]
    }
    controlTrafficLamp(turnCrTemp)
}

// ta and fa are: true/false all
$('#btnTurnOnAllTraffics').click(function () {
    socket.emit('dataCtS', 'ta')
})
$('#btnTurnOffAllTraffics').click(function () {
    socket.emit('dataCtS', 'fa')
})

for (var i = 0; i < timeCr.length; i++) {
    sentTimeTrafficLamp(timeCr[i])
}
//#endregion emit from Client to Server

//#region listen from Server to Server

// Funtions proccess data that listened from Server to Client
function checkStateLight(dataStC, liStr) {
    var count = 0
    for (var i = 1; i < 9; i++) {
        if (dataStC[i] == 1) {
            liStr[i].addClass('classRed')
            count++
        } else {
            liStr[i].removeClass('classRed')
            if (dataStC[0] == 1) {
                liStr[i].addClass('classYellow')
            } else {
                liStr[i].removeClass('classYellow')
            }
        }
    }
    if (count) {
        liStr[0].addClass('classStreetRed')
    } else {
        liStr[0].removeClass('classStreetRed')
    }
}
function checkLampColor(dataStC, crStr) {
    if (dataStC == 1) {
        crStr[1].addClass('redLight')
        crStr[4].addClass('redLight')
        crStr[2].removeClass('yellowLight')
        crStr[5].removeClass('yellowLight')
        crStr[3].removeClass('greenLight')
        crStr[6].removeClass('greenLight')
    } else if (dataStC == 2) {
        crStr[1].removeClass('redLight')
        crStr[4].removeClass('redLight')
        crStr[2].addClass('yellowLight')
        crStr[5].addClass('yellowLight')
        crStr[3].removeClass('greenLight')
        crStr[6].removeClass('greenLight')
    } else if (dataStC == 3) {
        crStr[1].removeClass('redLight')
        crStr[4].removeClass('redLight')
        crStr[2].removeClass('yellowLight')
        crStr[5].removeClass('yellowLight')
        crStr[3].addClass('greenLight')
        crStr[6].addClass('greenLight')
    } else {
        crStr[1].removeClass('redLight')
        crStr[4].removeClass('redLight')
        crStr[2].removeClass('yellowLight')
        crStr[5].removeClass('yellowLight')
        crStr[3].removeClass('greenLight')
        crStr[6].removeClass('greenLight')
    }
}

// function showTime(dataTimeStC) {
//     for (var i = 0; timeCr.length; i++) {
//         var dataTimeChunk = new Array(6)
//         for (var j = 0; j < 6; j++) {
//             dataTimeChunk[j] = dataTimeStC[i * 6 + j]
//         }
//         timeCr[i][5].text(`${dataTimeChunk[0]}${dataTimeChunk[1]}`)
//         timeCr[i][6].text(`${dataTimeChunk[2]}`)
//         timeCr[i][7].text(`${dataTimeChunk[3]}${dataTimeChunk[4]}`)
//         timeCr[i][8].text(`${dataTimeChunk[5]}`)
//     }
// }
// listen and proccess data from Server
socket.on('dataStC', function (dataStC) {
    for (var i = 0; i < 13; i++) {
        // street light
        if (i < 12) {
            var dataChunkStC = new Array(9)
            for (var j = 0; j < 9; j++) {
                dataChunkStC[j] = dataStC[i * 9 + j]
            }
            checkStateLight(dataChunkStC, liStr[i])
        }
        // traffic lamp
        else {
            var dataChunkStC = new Array(9)
            for (var j = 0; j < 9; j++) {
                dataChunkStC[j] = dataStC[i * 9 + j]
            }
            for (var j = 0; j < 8; j++) {
                checkLampColor(dataChunkStC[j], crStrLampColor[j])
            }
        }
    }

    timeCr1[5].text(`${dataStC[116]}${dataStC[117]}`)
    timeCr1[6].text(`${dataStC[118]}`)
    timeCr1[7].text(`${dataStC[119]}${dataStC[120]}`)
    timeCr1[8].text(`${dataStC[121]}`)

    timeCr2[5].text(`${dataStC[122]}${dataStC[123]}`)
    timeCr2[6].text(`${dataStC[124]}`)
    timeCr2[7].text(`${dataStC[125]}${dataStC[126]}`)
    timeCr2[8].text(`${dataStC[7]}`)

    timeCr3[5].text(`${dataStC[128]}${dataStC[128]}`)
    timeCr3[6].text(`${dataStC[130]}`)
    timeCr3[7].text(`${dataStC[131]}${dataStC[132]}`)
    timeCr3[8].text(`${dataStC[133]}`)

    timeCr4[5].text(`${dataStC[134]}${dataStC[135]}`)
    timeCr4[6].text(`${dataStC[136]}`)
    timeCr4[7].text(`${dataStC[137]}${dataStC[138]}`)
    timeCr4[8].text(`${dataStC[139]}`)

    // var dataTimeStC = new Array(24)
    // for (var i = 0; i < 24; i++) {
    //     dataTimeStC[i] = dataStC[116 + i]
    // }
    // showTime(dataTimeStC)
})
//#endregion listen from Server to Server

