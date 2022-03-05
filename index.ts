//Reel Distribution
//1Jack , 2Queen, 3King, 4Ace, 5Heart, 6Club, 7Diamond, 8Spade
const reel_1: number[] = [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8]
const reel_2: number[] = [1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8]
const reel_3: number[] = [1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]
const reel_4: number[] = [1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]
const reel_5: number[] = [1, 1, 1, 1, 1, 1, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]

//Payouts 
const jackPayout: number = .35
const queenPayout: number = .45
const kingPayout: number = .55
const acePayout: number = 1
const heartPayout: number = 1.25
const clubPayout: number = 1.50
const diamondPayout: number = 1.75
const spadePayout: number = 2
const payOutArray: number[] = [jackPayout, queenPayout, kingPayout, acePayout, heartPayout, clubPayout, diamondPayout, spadePayout]

const totalSpins: number = 100
const totalReels: number = 5
const reelLength: number = reel_1.length
let totalCells: number = reelLength * totalReels

let jackWins: number = 0
let queenWins: number = 0
let kingWins: number = 0
let aceWins: number = 0
let heartWins: number = 0
let clubWins: number = 0
let diamondWins: number = 0
let spadeWins: number = 0

let losses: number = 0
let wins: number = 0

let totalBet: number = 0
let totalCashWon: number = 0
let returnToPlayer: number


const createRandomNumber: Function = (): number => {
    let rng = Math.floor(Math.random() * (reelLength - 4))
    return rng
}

const payOutLine: Function = (symbol: number, multiplier: number) => {
    for (let index = 0; index < payOutArray.length; index++) {
        const payout = payOutArray[index];
        if (symbol == index) {
            console.log(`Payout: ${payout}`)
            totalCashWon = totalCashWon + (payout * multiplier)
        }
    }
}

const allEqual: Function = (line: number[]) => {
    return line.every(cell => cell === line[0]
    )
}

const verifyLine: Function = (line: number[]) => {
    if (line) {
        let winningSymbol: number = line[0]

        if (allEqual(line)) {
            payOutLine(winningSymbol, 5)
            console.log("5 in a Row!")
        }
        if (line[0] === line[1] && line[1] === line[2] && line[2] === line[3]) {
            payOutLine(winningSymbol, 3)
            console.log("4 in a Row!")

        }
        if (line[0] === line[1] && line[1] === line[2]) {
            payOutLine(winningSymbol, 1)
            console.log("3 in a Row!")

        }
    } else {
        throw new Error("Line Value Doesn't Exist.")
    }
}


for (let index = 0; index < totalSpins; index++) {

    let rng_1: number = createRandomNumber()
    let rng_2: number = createRandomNumber()
    let rng_3: number = createRandomNumber()
    let rng_4: number = createRandomNumber()
    let rng_5: number = createRandomNumber()

    totalBet++

    let cell_1: number = rng_1 + 4
    let cell_2: number = rng_2 + 4
    let cell_3: number = rng_3 + 4
    let cell_4: number = rng_4 + 4
    let cell_5: number = rng_5 + 4

    let cell_6: number = rng_1 + 3
    let cell_7: number = rng_2 + 3
    let cell_8: number = rng_3 + 3
    let cell_9: number = rng_4 + 3
    let cell_10: number = rng_5 + 3

    let cell_11: number = rng_1 + 2
    let cell_12: number = rng_2 + 2
    let cell_13: number = rng_3 + 2
    let cell_14: number = rng_4 + 2
    let cell_15: number = rng_5 + 2

    let cell_16: number = rng_1 + 1
    let cell_17: number = rng_2 + 1
    let cell_18: number = rng_3 + 1
    let cell_19: number = rng_4 + 1
    let cell_20: number = rng_5 + 1

    let cell_21: number = rng_1
    let cell_22: number = rng_2
    let cell_23: number = rng_3
    let cell_24: number = rng_4
    let cell_25: number = rng_5


    let cell_1_Outcome: number = reel_1[cell_1]
    let cell_2_Outcome: number = reel_2[cell_2]
    let cell_3_Outcome: number = reel_3[cell_3]
    let cell_4_Outcome: number = reel_4[cell_4]
    let cell_5_Outcome: number = reel_5[cell_5]
    let cell_6_Outcome: number = reel_1[cell_6]
    let cell_7_Outcome: number = reel_2[cell_7]
    let cell_8_Outcome: number = reel_3[cell_8]
    let cell_9_Outcome: number = reel_4[cell_9]
    let cell_10_Outcome: number = reel_5[cell_10]
    let cell_11_Outcome: number = reel_1[cell_11]
    let cell_12_Outcome: number = reel_2[cell_12]
    let cell_13_Outcome: number = reel_3[cell_13]
    let cell_14_Outcome: number = reel_4[cell_14]
    let cell_15_Outcome: number = reel_5[cell_15]
    let cell_16_Outcome: number = reel_1[cell_16]
    let cell_17_Outcome: number = reel_2[cell_17]
    let cell_18_Outcome: number = reel_3[cell_18]
    let cell_19_Outcome: number = reel_4[cell_19]
    let cell_20_Outcome: number = reel_5[cell_20]
    let cell_21_Outcome: number = reel_1[cell_21]
    let cell_22_Outcome: number = reel_2[cell_22]
    let cell_23_Outcome: number = reel_3[cell_23]
    let cell_24_Outcome: number = reel_4[cell_24]
    let cell_25_Outcome: number = reel_5[cell_25]


    let lineAcross_1: number[] = [cell_1_Outcome, cell_2_Outcome, cell_3_Outcome, cell_4_Outcome, cell_5_Outcome]
    let lineAcross_2: number[] = [cell_6_Outcome, cell_7_Outcome, cell_8_Outcome, cell_9_Outcome, cell_10_Outcome]
    let lineAcross_3: number[] = [cell_11_Outcome, cell_12_Outcome, cell_13_Outcome, cell_14_Outcome, cell_15_Outcome]
    let lineAcross_4: number[] = [cell_16_Outcome, cell_17_Outcome, cell_18_Outcome, cell_19_Outcome, cell_20_Outcome]
    let lineAcross_5: number[] = [cell_21_Outcome, cell_22_Outcome, cell_23_Outcome, cell_24_Outcome, cell_25_Outcome]

    let lineDiagnalTopDown: number[] = [cell_1_Outcome, cell_7_Outcome, cell_13_Outcome, cell_19_Outcome, cell_25_Outcome]
    let lineDiagnalDownTop: number[] = [cell_21_Outcome, cell_17_Outcome, cell_13_Outcome, cell_9_Outcome, cell_5_Outcome]

    let allLines: number[] = lineAcross_1.concat(lineAcross_2).concat(lineAcross_3).concat(lineAcross_4).concat(lineAcross_5)
    console.log(lineAcross_1)
    console.log(lineAcross_2)
    console.log(lineAcross_3)
    console.log(lineAcross_4)
    console.log(lineAcross_5)
    console.log("------------")

    //console.log(allLines)


    //Line Across Wins
    verifyLine(lineAcross_1)
    verifyLine(lineAcross_2)
    verifyLine(lineAcross_3)
    verifyLine(lineAcross_4)
    verifyLine(lineAcross_5)

    //Diagnal Wins 
    verifyLine(lineDiagnalTopDown)
    verifyLine(lineDiagnalDownTop)

}

console.log(`Total Cash Won: ${totalCashWon}`)
//returnToPlayer = (totalCashWon / totalBet) * 100




// let stake = totalCashWon - totalBet
// let allWins = jackWins + queenWins + aceWins + heartWins + clubWins + diamondWins + spadeWins
// let winRatio = allWins/losses

// console.log(`Reel Length: ${reelLength}`)
// console.log(`TotalWin: ${allWins}`)
// console.log(`Total Losses: ${losses}`)
// console.log(`Win Ration: ${winRatio}`)
// console.log(`TotalBet: ${totalBet}`)
// console.log(`Stake: ${stake}`)
// console.log(`JackWins: ${jackWins}`)
// console.log(`QueenWins: ${queenWins}`)
// console.log(`KingWins: ${kingWins}`)
// console.log(`AceWins: ${aceWins}`)
// console.log(`heartWins: ${shieldWins}`)
// console.log(`clubWins: ${clubWins}`)
// console.log(`diamondWins: ${maceWins}`)
// console.log(`spadeWins: ${swordWins}`)
// console.log(`Return to Player: ${returnToPlayer}`)

