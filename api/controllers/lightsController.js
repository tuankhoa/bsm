var StreetLight = require('../models/streetlightModel')

var arrayStreetName = [
    "Street 1",
    "Street 2",
    "Street 3",
    "Street 4",
    "Street 5",
    "Street 6",
    "Street 7",
    "Street 8",
    "Street 9",
    "Street 10",
    "Street 11",
    "Street 12"
]

module.exports = function (
    btnOn1, btnOff1,
    btnOn2, btnOff2,
    btnOn3, btnOff3,
    btnOn4, btnOff4,
    btnOn5, btnOff5,
    btnOn6, btnOff6,
    btnOn7, btnOff7,
    btnOn8, btnOff8,
    btnOn9, btnOff9,
    btnOn10, btnOff10,
    btnOn11, btnOff11,
    btnOn12, btnOff12,
    btnOnAll, btnOffAll
) {

    //#region Check Street

    // Check Street 1
    // Check buttonOn_1 click?
    if (btnOn1) {
        StreetLight.findOneAndUpdate({ streetName: "Street 1" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_1 click?
    if (btnOff1) {
        StreetLight.findOneAndUpdate({ streetName: "Street 1" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 2
    // Check buttonOn_2 click?
    if (btnOn2) {
        StreetLight.findOneAndUpdate({ streetName: "Street 2" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_2 click?
    if (btnOff2) {
        StreetLight.findOneAndUpdate({ streetName: "Street 2" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 3
    // Check buttonOn_3 click?
    if (btnOn3) {
        StreetLight.findOneAndUpdate({ streetName: "Street 3" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_3 click?
    if (btnOff3) {
        StreetLight.findOneAndUpdate({ streetName: "Street 3" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 4
    // Check buttonOn_4 click?
    if (btnOn4) {
        StreetLight.findOneAndUpdate({ streetName: "Street 4" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_4 click?
    if (btnOff4) {
        StreetLight.findOneAndUpdate({ streetName: "Street 4" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 5
    // Check buttonOn_5 click?
    if (btnOn5) {
        StreetLight.findOneAndUpdate({ streetName: "Street 5" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_5 click?
    if (btnOff5) {
        StreetLight.findOneAndUpdate({ streetName: "Street 5" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 6
    // Check buttonOn_6 click?
    if (btnOn6) {
        StreetLight.findOneAndUpdate({ streetName: "Street 6" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_6 click?
    if (btnOff6) {
        StreetLight.findOneAndUpdate({ streetName: "Street 6" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 7
    // Check buttonOn_7 click?
    if (btnOn7) {
        StreetLight.findOneAndUpdate({ streetName: "Street 7" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_7 click?
    if (btnOff7) {
        StreetLight.findOneAndUpdate({ streetName: "Street 7" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 8
    // Check buttonOn_8 click?
    if (btnOn8) {
        StreetLight.findOneAndUpdate({ streetName: "Street 8" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_8 click?
    if (btnOff8) {
        StreetLight.findOneAndUpdate({ streetName: "Street 8" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 9
    // Check buttonOn_9 click?
    if (btnOn9) {
        StreetLight.findOneAndUpdate({ streetName: "Street 9" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_9 click?
    if (btnOff9) {
        StreetLight.findOneAndUpdate({ streetName: "Street 9" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 10
    // Check buttonOn_2 click?
    if (btnOn10) {
        StreetLight.findOneAndUpdate({ streetName: "Street 10" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_10 click?
    if (btnOff10) {
        StreetLight.findOneAndUpdate({ streetName: "Street 10" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 11
    // Check buttonOn_11 click?
    if (btnOn11) {
        StreetLight.findOneAndUpdate({ streetName: "Street 11" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_11 click?
    if (btnOff11) {
        StreetLight.findOneAndUpdate({ streetName: "Street 11" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check Street 12
    // Check buttonOn_12 click?
    if (btnOn12) {
        StreetLight.findOneAndUpdate({ streetName: "Street 12" }
            , {
                turnLight: true,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }
    // Check buttonOff_12 click?
    if (btnOff12) {
        StreetLight.findOneAndUpdate({ streetName: "Street 12" }
            , {
                turnLight: false,
            }, function (err) {
                if (err) {
                    throw err
                }
            }
        )
    }


    // Check All Street
    // Check buttonOn_All click?
    if (btnOnAll) {
        for (var i = 0; i < 12; i++) {
            StreetLight.findOneAndUpdate({ streetName: arrayStreetName[i] }
                , {
                    turnLight: true,
                }, function (err) {
                    if (err) {
                        throw err
                    }
                }
            )
        }
    }
    // Check buttonOff_All click?
    if (btnOffAll) {
        for (var i = 0; i < 12; i++) {
            StreetLight.findOneAndUpdate({ streetName: arrayStreetName[i] }
                , {
                    turnLight: false,
                }, function (err) {
                    if (err) {
                        throw err
                    }
                }
            )
        }
    }

    //#endregion

}