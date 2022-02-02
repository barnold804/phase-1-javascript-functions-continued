function saturdayFun(defaultActivity = "roller-skate") {
    return (`This Saturday, I want to ${defaultActivity}!`)
}
saturdayFun("bathe my dog");

function mondayWork(defaultActivity = "go to the office") {
    return (`This Monday, I will ${defaultActivity}.`)
}
mondayWork("work from home");

function wrapAdjective(flair = "*") {
    return function innerFunction(special = "special") {
        return `You are ${flair}${special}${flair}!`
    }

}
const encouragingPromptFunction = wrapAdjective("!!!")
