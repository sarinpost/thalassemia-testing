var records = [{
    MCV: 71,    // fL
    MCH: 24,    // pg
    HemoglobinType: 'A2A',
    A2: 5.0,
    F: 0.1,
    A: 89,

    HbE: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    HbETrait: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    alpha1: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    alpha2: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    betaTrait: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    beta0: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    betaPlus: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    HbCS: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    HbPakse: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
    HomozygousHbE: {
        none: null,
        suspected: null,
        mild: null,
        strong: null
    },
}]

const redBloodCellIndices = (temp) => {
    if (temp[0].MCV < 80) {
        temp[0].alpha1.strong = true
        temp[0].alpha2.strong = true
    }
    if (temp[0].MCH < 27) {
        temp[0].beta0.strong = true
        temp[0].betaPlus.strong = true
    }
    if (temp[0].MCV > 80 && temp[0].MCH > 27) {
        temp[0].alpha2.mild = true
        temp[0].HbCS.mild = true
        temp[0].HbPakse.mild = true
        temp[0].HbE.mild = true
    }
    return temp
}

// const HbTyping = (record) => {
//     switch (record.HemoglobinType) {
//         case 'A2A':
//             if (record.A2 < 4) {
//                 record.alpha1.suspected = true
//             } else {
//                 record.betaTrait.strong = true
//                 record.alpha1.none = true
//             }
//             break
//         case 'EA':
//             if (record.A2 <= 25) {
//                 record.HbETrait.suspected = true
//                 record.alpha1.none = true
//             } else if (record.A2 > 25 && record.A2 <= 35) {
//                 record.HbETrait.strong = true
//             }
//             break
//         case 'EE':
//             if (record.A2 >= 80) {
//                 record.HomozygousHbE.strong = true
//                 record.alpha1.none = true
//             }
//             break
//         default:
//             console.log('type dosen\'t mathch')
//     }
//     return record
// }

var newArray = JSON.parse(JSON.stringify(records))

let result = redBloodCellIndices(newArray)
console.log(result,records)
