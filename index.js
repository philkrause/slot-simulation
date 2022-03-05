//Reel Distribution
//1Jack , 2Queen, 3King, 4Ace, 5Heart, 6Club, 7Diamond, 8Spade
const reel_1 = [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8]
const reel_2 = [1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8]
const reel_3 = [1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]
const reel_4 = [1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]
const reel_5 = [1, 1, 1, 1, 1, 1, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8]

//Payouts 
const jackPayout = .35
const queenPayout = .45
const kingPayout = .55
const acePayout = 1
const heartPayout = 1.25
const clubPayout = 1.50
const diamondPayout = 1.75
const spadePayout = 2
const payOutArray = [jackPayout, queenPayout, kingPayout, acePayout, heartPayout, clubPayout, diamondPayout, spadePayout]

const totalSpins = 100
const totalReels = 5
const reelLength = reelOne.length
let totalCells = reelLength * totalReels

let jackWins = 0
let queenWins = 0
let kingWins = 0
let aceWins = 0
let heartWins = 0
let clubWins = 0
let diamondWins = 0
let spadeWins = 0

let losses = 0
let wins = 0

let totalBet = 0
let totalCashWon = 0
let returnToPlayer

const payOutLine = (line) => {
   for (let index = 0; index < payOutArray.length; index++) {
      const payout = payOutArray[index];
      if(line == index) {
         console.log(`Payout: ${payout}`)
         totalCashWon = totalCashWon + payout
      }
   }
}

const creatRandomNumber = (reelSize) => {
   let rng = Math.floor(Math.random() * (reelSize - 2))
   return rng
}

for (let index = 0; index < totalSpins; index++) {

   totalBet++

   let cell_1 = rng_1 + 4
   let cell_2 = rng_2 + 4
   let cell_3 = rng_3 + 4
   let cell_4 = rng_4 + 4
   let cell_5 = rng_5 + 4
   
   let cell_6 = rng_1 + 3
   let cell_7 = rng_2 + 3
   let cell_8 = rng_3 + 3
   let cell_9 = rng_4 + 3
   let cell_10 = rng_5 + 3

   let cell_11 = rng_1 + 2
   let cell_12 = rng_2 + 2
   let cell_13 = rng_3 + 2
   let cell_14 = rng_4 + 2
   let cell_15 = rng_5 + 2

   let cell_16 = rng_1 + 1
   let cell_17 = rng_2 + 1
   let cell_18 = rng_3 + 1
   let cell_19 = rng_4 + 1
   let cell_20 = rng_5 + 1

   let cell_21 = rng_1
   let cell_22 = rng_2
   let cell_23 = rng_3
   let cell_24 = rng_4
   let cell_25 = rng_5


   let cell_1_Outcome = reel_1[cell_1]
   let cell_2_Outcome = reel_2[cell_2]
   let cell_3_Outcome = reel_3[cell_3]
   let cell_4_Outcome = reel_4[cell_4]
   let cell_5_Outcome = reel_5[cell_5]
   let cell_6_Outcome = reel_1[cell_6]
   let cell_7_Outcome = reel_2[cell_7]
   let cell_8_Outcome = reel_3[cell_8]
   let cell_9_Outcome = reel_4[cell_9]
   let cell_10_Outcome = reel_5[cell_10]
   let cell_11_Outcome = reel_1[cell_11]
   let cell_12_Outcome = reel_2[cell_12]
   let cell_13_Outcome = reel_3[cell_13]
   let cell_14_Outcome = reel_4[cell_14]
   let cell_15_Outcome = reel_5[cell_15]
   let cell_16_Outcome = reel_1[cell_16]
   let cell_17_Outcome = reel_2[cell_17]
   let cell_18_Outcome = reel_3[cell_18]
   let cell_19_Outcome = reel_4[cell_19]
   let cell_20_Outcome = reel_5[cell_20]
   let cell_21_Outcome = reel_1[cell_21]
   let cell_22_Outcome = reel_2[cell_22]
   let cell_23_Outcome = reel_3[cell_23]
   let cell_24_Outcome = reel_4[cell_24]
   let cell_25_Outcome = reel_5[cell_25]


   //const totalOutcome = [cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, cellNine]
   const lineAcross_1 = [cell_1, cell_2, cell_3, cell_4, cell_5]
   const lineAcross_2 = [cell_6, cell_7, cell_8, cell_9, cell_10]
   const lineAcross_3 = [cell_11, cell_12, cell_13, cell_14, cell_15]
   const lineAcross_4 = [cell_16, cell_17, cell_18, cell_19, cell_20]
   const lineAcross_5 = [cell_21, cell_22, cell_23, cell_24, cell_25]

   const lineDiagnalTopDown = [cell_21, cell_17, cell_13, cell_9, cell_5]
   // const lineDiagnalDownTop = [cellSeven, cellFive, cellThree]

   //Across Wins
   if(lineAcrossOne[0] == lineAcrossOne[1] && lineAcrossOne[1] == lineAcrossOne[2]){
      payOutLine(lineAcrossOne[0])
   }
   if(lineAcrossTwo[0] == lineAcrossTwo[1] && lineAcrossTwo[1] == lineAcrossTwo[2]){
      payOutLine(lineAcrossTwo[0])
   }
   if(lineAcrossThree[0] == lineAcrossThree[1] && lineAcrossThree[1] == lineAcrossThree[2]){
      payOutLine(lineAcrossThree[0])
   }

   //Diagnal Wins 
   if(lineDiagnalDownTop[0] == lineDiagnalTopDown[1] && lineDiagnalTopDown[1] == lineDiagnalDownTop[2]){
      payOutLine(lineDiagnalDownTop[0])
   }

   if(lineDiagnalTopDown[0] == lineDiagnalDownTop[1] && lineDiagnalDownTop[1] == lineDiagnalDownTop[2]){
      payOutLine(lineDiagnalTopDown[0])
   }
   
}

//returnToPlayer = (totalCashWon / totalBet) * 100


console.log(`Total Cash Won: ${totalCashWon}`)


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

