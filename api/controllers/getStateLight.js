var StreetLight = require('../models/streetlightModel')

function updateStreetLightState(arrayLightState) {
    var arrayClass = new Array()
    var count = 0
    for (var i = 1; i < 9; i++) {
        if (arrayLightState[i]) {
            arrayClass[i] = "classRed"
            count++
        } else {
            if (arrayLightState[0]) {
                arrayClass[i] = "classYellow"
            } else {
                arrayClass[i] = "classWhite"
            }
        }
    }
    if (count) {
        arrayClass[0] = "classStreetRed"
    } else {
        arrayClass[0] = ""
    }
    return arrayClass
}

//#region arrayClass
var arrayClass1 = new Array()
var arrayClass2 = new Array()
var arrayClass3 = new Array()
var arrayClass4 = new Array()
var arrayClass5 = new Array()
var arrayClass6 = new Array()
var arrayClass7 = new Array()
var arrayClass8 = new Array()
var arrayClass9 = new Array()
var arrayClass10 = new Array()
var arrayClass11 = new Array()
var arrayClass12 = new Array()
//#endregion


module.exports = function (res) {

    //#region Check state Street

    // check state Street 1
    StreetLight.findOne({ streetName: "Street 1" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState1 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass1 = updateStreetLightState(arrayLightState1)
        }
    })

    // check state Street 2
    StreetLight.findOne({ streetName: "Street 2" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState2 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass2 = updateStreetLightState(arrayLightState2)
        }
    })

    // check state Street 3
    StreetLight.findOne({ streetName: "Street 3" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState3 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass3 = updateStreetLightState(arrayLightState3)
        }
    })

    // check state Street 4
    StreetLight.findOne({ streetName: "Street 4" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState4 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass4 = updateStreetLightState(arrayLightState4)
        }
    })

    // check state Street 5
    StreetLight.findOne({ streetName: "Street 5" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState5 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass5 = updateStreetLightState(arrayLightState5)
        }
    })

    // check state Street 6
    StreetLight.findOne({ streetName: "Street 6" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState6 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass6 = updateStreetLightState(arrayLightState6)
        }
    })

    // check state Street 7
    StreetLight.findOne({ streetName: "Street 7" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState7 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass7 = updateStreetLightState(arrayLightState7)
        }
    })

    // check state Street 8
    StreetLight.findOne({ streetName: "Street 8" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState8 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass8 = updateStreetLightState(arrayLightState8)
        }
    })

    // check state Street 9
    StreetLight.findOne({ streetName: "Street 9" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState9 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass9 = updateStreetLightState(arrayLightState9)
        }
    })

    // check state Street 10
    StreetLight.findOne({ streetName: "Street 10" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState10 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass10 = updateStreetLightState(arrayLightState10)
        }
    })

    // check state Street 11
    StreetLight.findOne({ streetName: "Street 11" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState11 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass11 = updateStreetLightState(arrayLightState11)
        }
    })

    // check state Street 12
    StreetLight.findOne({ streetName: "Street 12" }, function (err, streetLight) {
        if (err) {
            throw err
        } else {
            arrayLightState12 = [
                streetLight.turnLight,
                streetLight.sensor1,
                streetLight.sensor2,
                streetLight.sensor3,
                streetLight.sensor4,
                streetLight.sensor5,
                streetLight.sensor6,
                streetLight.sensor7,
                streetLight.sensor8
            ]
            arrayClass12 = updateStreetLightState(arrayLightState12)
        }
    })

    //#endregion

    res.render('pages/streetLight', {
        // render class Street 1
        classStreet1: arrayClass1[0],
        classStr1Li1: arrayClass1[1],
        classStr1Li2: arrayClass1[2],
        classStr1Li3: arrayClass1[3],
        classStr1Li4: arrayClass1[4],
        classStr1Li5: arrayClass1[5],
        classStr1Li6: arrayClass1[6],
        classStr1Li7: arrayClass1[7],
        classStr1Li8: arrayClass1[8],
        // render class Street 2
        classStreet2: arrayClass2[0],
        classStr2Li1: arrayClass2[1],
        classStr2Li2: arrayClass2[2],
        classStr2Li3: arrayClass2[3],
        classStr2Li4: arrayClass2[4],
        classStr2Li5: arrayClass2[5],
        classStr2Li6: arrayClass2[6],
        classStr2Li7: arrayClass2[7],
        classStr2Li8: arrayClass2[8],
        // render class Street 3
        classStreet3: arrayClass3[0],
        classStr3Li1: arrayClass3[1],
        classStr3Li2: arrayClass3[2],
        classStr3Li3: arrayClass3[3],
        classStr3Li4: arrayClass3[4],
        classStr3Li5: arrayClass3[5],
        classStr3Li6: arrayClass3[6],
        classStr3Li7: arrayClass3[7],
        classStr3Li8: arrayClass3[8],
        // render class Street 4
        classStreet4: arrayClass4[0],
        classStr4Li1: arrayClass4[1],
        classStr4Li2: arrayClass4[2],
        classStr4Li3: arrayClass4[3],
        classStr4Li4: arrayClass4[4],
        classStr4Li5: arrayClass4[5],
        classStr4Li6: arrayClass4[6],
        classStr4Li7: arrayClass4[7],
        classStr4Li8: arrayClass4[8],
        // render class Street 5
        classStreet5: arrayClass5[0],
        classStr5Li1: arrayClass5[1],
        classStr5Li2: arrayClass5[2],
        classStr5Li3: arrayClass5[3],
        classStr5Li4: arrayClass5[4],
        classStr5Li5: arrayClass5[5],
        classStr5Li6: arrayClass5[6],
        classStr5Li7: arrayClass5[7],
        classStr5Li8: arrayClass5[8],
        // render class Street 6
        classStreet6: arrayClass6[0],
        classStr6Li1: arrayClass6[1],
        classStr6Li2: arrayClass6[2],
        classStr6Li3: arrayClass6[3],
        classStr6Li4: arrayClass6[4],
        classStr6Li5: arrayClass6[5],
        classStr6Li6: arrayClass6[6],
        classStr6Li7: arrayClass6[7],
        classStr6Li8: arrayClass6[8],
        // render class Street 7
        classStreet7: arrayClass7[0],
        classStr7Li1: arrayClass7[1],
        classStr7Li2: arrayClass7[2],
        classStr7Li3: arrayClass7[3],
        classStr7Li4: arrayClass7[4],
        classStr7Li5: arrayClass7[5],
        classStr7Li6: arrayClass7[6],
        classStr7Li7: arrayClass7[7],
        classStr7Li8: arrayClass7[8],
        // render class Street 8
        classStreet8: arrayClass8[0],
        classStr8Li1: arrayClass8[1],
        classStr8Li2: arrayClass8[2],
        classStr8Li3: arrayClass8[3],
        classStr8Li4: arrayClass8[4],
        classStr8Li5: arrayClass8[5],
        classStr8Li6: arrayClass8[6],
        classStr8Li7: arrayClass8[7],
        classStr8Li8: arrayClass8[8],
        // render class Street 9
        classStreet9: arrayClass9[0],
        classStr9Li1: arrayClass9[1],
        classStr9Li2: arrayClass9[2],
        classStr9Li3: arrayClass9[3],
        classStr9Li4: arrayClass9[4],
        classStr9Li5: arrayClass9[5],
        classStr9Li6: arrayClass9[6],
        classStr9Li7: arrayClass9[7],
        classStr9Li8: arrayClass9[8],
        // render class Street 10
        classStreet10: arrayClass10[0],
        classStr10Li1: arrayClass10[1],
        classStr10Li2: arrayClass10[2],
        classStr10Li3: arrayClass10[3],
        classStr10Li4: arrayClass10[4],
        classStr10Li5: arrayClass10[5],
        classStr10Li6: arrayClass10[6],
        classStr10Li7: arrayClass10[7],
        classStr10Li8: arrayClass10[8],
        // render class Street 11
        classStreet11: arrayClass11[0],
        classStr11Li1: arrayClass11[1],
        classStr11Li2: arrayClass11[2],
        classStr11Li3: arrayClass11[3],
        classStr11Li4: arrayClass11[4],
        classStr11Li5: arrayClass11[5],
        classStr11Li6: arrayClass11[6],
        classStr11Li7: arrayClass11[7],
        classStr11Li8: arrayClass11[8],
        // render class Street 12
        classStreet12: arrayClass12[0],
        classStr12Li1: arrayClass12[1],
        classStr12Li2: arrayClass12[2],
        classStr12Li3: arrayClass12[3],
        classStr12Li4: arrayClass12[4],
        classStr12Li5: arrayClass12[5],
        classStr12Li6: arrayClass12[6],
        classStr12Li7: arrayClass12[7],
        classStr12Li8: arrayClass12[8],

    })

    // StreetLight.watch().on('change', function (data) {
    //     //console.log(data)
    // })
    // end of module exports
}