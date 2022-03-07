const query = require('cli-interact').getYesNo;

//Reel Distribution
//0Jack , 1Queen, 2King, 3Ace, 4Heart, 5Club, 6Diamond, 7Spade
const reel_1: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 7, 7, 7, 7, 7]
const reel_2: number[] = [0, 0, 0, 0, 0, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7]
const reel_3: number[] = [0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7]
const reel_4: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7]
const reel_5: number[] = [0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7]

//Used for Logs
const symbols: string[] = ["Jacks", "Queens", "Kings", "Aces", "Hearts", "Clubs", "Diamond", "Spades"]
const symbol: string[] = ["J", "Q", "K", "A", "H", "C", "D", "S"]

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

//Control the Amount of Spins for the Simulator
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
const symbolWins: number[] = [jackWins, queenWins, kingWins, aceWins, heartWins, clubWins, diamondWins, spadeWins]

let losses: number = 0
let wins: number = 0

let payperSpin: number = 0
let pay: number = 0
let totalBet: number = 0
let totalCashWon: number = 0
let returnToPlayer: number

//Return a Random Number Between 0 and (ReelLength - 4)
const createRandomNumber: Function = (): number => {
    let rng = Math.floor(Math.random() * (reelLength - 4))
    return rng
}

//Determine the payout for the winning symbol
const payOutLine: Function = (symbol: number, multiplier: number) => {
    for (let index = 0; index < payOutArray.length; index++) {
        const payout = payOutArray[index];

        if (symbol == index) {
            pay = payout * multiplier
            totalCashWon += pay
            symbolWins[symbol] += 1
        } 
    }
    return pay
}

//Checks for 5 in a row
const allEqual: Function = (line: number[]) => {
    return line.every(cell => cell === line[0]
    )
}

//Checks what symbol won and calls Payout: Function(symbol, multiplier)
const verifyLine: Function = (line: number[]) => {
    if (line) {

        let winningSymbol: number = line[0]
        let win = 0
        //5 in a row
        if (allEqual(line)) {
            payperSpin += payOutLine(winningSymbol, 2)
            console.log(`5 ${symbols[winningSymbol]} in a Row! Pays: ${pay * 2}`)
        }
        //4 in a row
        if (line[0] === line[1] && line[1] === line[2] && line[2] === line[3]) {
            payperSpin += payOutLine(winningSymbol, 1.5)
            console.log(`4 ${symbols[winningSymbol]} in a Row! Pays: ${pay * 1.5}`)
        }
        //3 in a row
        if (line[0] === line[1] && line[1] === line[2]) {
            payperSpin += payOutLine(winningSymbol, 1)
            console.log(`3 ${symbols[winningSymbol]} in a Row! Pays: ${pay}`)
        }
    } else {
        throw new Error("Line Value Doesn't Exist.")
    }
}

//Spins
for (let index = 0; index < totalSpins; index++) {

    //increase bet by $1.00 each spin
    totalBet++

    //Create 5 Random Numbers for all 5 Reels
    let rng_1: number = createRandomNumber()
    let rng_2: number = createRandomNumber()
    let rng_3: number = createRandomNumber()
    let rng_4: number = createRandomNumber()
    let rng_5: number = createRandomNumber()

    //Determine Outcome of All Postiions
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

    //Pass the Outcomes into the Reels to determine the symbol
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

    //Determine the Line Payouts
    let lineAcross_1: number[] = [cell_1_Outcome, cell_2_Outcome, cell_3_Outcome, cell_4_Outcome, cell_5_Outcome]
    let lineAcross_2: number[] = [cell_6_Outcome, cell_7_Outcome, cell_8_Outcome, cell_9_Outcome, cell_10_Outcome]
    let lineAcross_3: number[] = [cell_11_Outcome, cell_12_Outcome, cell_13_Outcome, cell_14_Outcome, cell_15_Outcome]
    let lineAcross_4: number[] = [cell_16_Outcome, cell_17_Outcome, cell_18_Outcome, cell_19_Outcome, cell_20_Outcome]
    let lineAcross_5: number[] = [cell_21_Outcome, cell_22_Outcome, cell_23_Outcome, cell_24_Outcome, cell_25_Outcome]

    //Determine the Diagnal Payouts
    let lineDiagnalTopDown: number[] = [cell_1_Outcome, cell_7_Outcome, cell_13_Outcome, cell_19_Outcome, cell_25_Outcome]
    let lineDiagnalDownTop: number[] = [cell_21_Outcome, cell_17_Outcome, cell_13_Outcome, cell_9_Outcome, cell_5_Outcome]

    //let allLines: number[] = lineAcross_1.concat(lineAcross_2).concat(lineAcross_3).concat(lineAcross_4).concat(lineAcross_5)
    //console.log(allLines)
    console.log(`[ ${symbol[lineAcross_1[0]]}, ${symbol[lineAcross_1[1]]}, ${symbol[lineAcross_1[2]]}, ${symbol[lineAcross_1[3]]}, ${symbol[lineAcross_1[4]]} ]`)
    console.log(`[ ${symbol[lineAcross_2[0]]}, ${symbol[lineAcross_2[1]]}, ${symbol[lineAcross_2[2]]}, ${symbol[lineAcross_2[3]]}, ${symbol[lineAcross_2[4]]} ]`)
    console.log(`[ ${symbol[lineAcross_3[0]]}, ${symbol[lineAcross_3[1]]}, ${symbol[lineAcross_3[2]]}, ${symbol[lineAcross_3[3]]}, ${symbol[lineAcross_3[4]]} ]`)
    console.log(`[ ${symbol[lineAcross_4[0]]}, ${symbol[lineAcross_4[1]]}, ${symbol[lineAcross_4[2]]}, ${symbol[lineAcross_4[3]]}, ${symbol[lineAcross_4[4]]} ]`)
    console.log(`[ ${symbol[lineAcross_5[0]]}, ${symbol[lineAcross_5[1]]}, ${symbol[lineAcross_5[2]]}, ${symbol[lineAcross_5[3]]}, ${symbol[lineAcross_5[4]]} ]`)
    console.log("------------")

    //Verify the Line Across Wins and Pay
    verifyLine(lineAcross_1)
    verifyLine(lineAcross_2)
    verifyLine(lineAcross_3)
    verifyLine(lineAcross_4)
    verifyLine(lineAcross_5)

    //Verify the Diagnal Line Wins and Pay
    verifyLine(lineDiagnalTopDown)
    verifyLine(lineDiagnalDownTop)
    console.log(`Total Cash Won on this Spin: ${payperSpin}`)
    payperSpin = 0
    //var answer = query('Roll Again?');
}
//Simluation End Calculations
returnToPlayer = (totalCashWon / totalBet) * 100

let stake: number = totalCashWon - totalBet
let allWins: number = jackWins + queenWins + aceWins + heartWins + clubWins + diamondWins + spadeWins
let winRatio: number = allWins / losses

//Logs
console.log(`TotalCash Bet: ${totalBet}`)
console.log(`Total Cash Won: ${totalCashWon}`)
console.log(`Return to Player: ${returnToPlayer}%`)
console.log(`TotalWin: ${wins}`) 
console.log(`Total Losses: ${losses}`)
console.log(`Win Ratio: ${winRatio}`)
console.log(`Stake: ${stake}`)
console.log(`JackWins: ${symbolWins[0]}`)
console.log(`QueenWins: ${symbolWins[1]}`)
console.log(`KingWins: ${symbolWins[2]}`)
console.log(`AceWins: ${symbolWins[3]}`)
console.log(`HeartWins: ${symbolWins[4]}`)
console.log(`ClubWins: ${symbolWins[5]}`)
console.log(`DiamondWins: ${symbolWins[6]}`)
console.log(`SpadeWins: ${symbolWins[7]}`)