//Your Code here
let firstAnswer = window.prompt("Do you head left or right")
if (firstAnswer === 'left') {
    let secondAnswer = window.prompt('You came across a stray cat. it scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?')
    if (secondAnswer === "follow") {
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. they are content with you staying, but you wonder if you should alert the world to this magical safe haven')
        if (thirdAnswer === "stay") {
            let fourthAnswer = window.alert("you live happily amongst the cats for the rest of your days")
        }
        else if (thirdAnswer === "spread the word"){
            let fourthAnswer = window.alert('After the cat colony, you are never able to find it again, without proof, no one believes your story, which passes into legend nonetheless')
        }
    }
    else if( secondAnswer === "continue"){
        let thirdAnswer = window.prompt('You came across a chamber that reaches upward to a shining light above. there is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take')
            if(thirdAnswer === "ladder"){
                let fourthAnswer = window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each og the rungs below Sheepish, you return home.')
            }
            else if(thirdAnswer === "staircase"){
                let fourthAnswer = window.alert("After Ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever")
            }
    }
}
else if (firstAnswer === 'right') {
    let secondAnswer = window.prompt('You came across a snoring Dragon. On the other side of him, you see shiny chest of treasure. Another path would lead away from the dragon altogether. Which path do you take')
    if(secondAnswer === "past the dragon"){
        let thirdAnswer = window.prompt("The dragon wakes up and sits upright. You You only ahve a moment to respond, to saty or run")
        if(thirdAnswer === "stay"){
            let fourthAnswer = window.alert("You and the dragon have an uplifting conversation about local politics and become lifelong friends")
        }
        else if(thirdAnswer === "run"){
            let fourthAnswer = window.alert("Quickly, you run back to the cave's entrance. Sheepish you return home")
        }
    }else if(secondAnswer === "away from the dragon"){
        let thirdAnswer = window.prompt("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?")
        if(thirdAnswer === "draw it"){
            let fourthAnswer = window.alert("you draw the flower, capturing only a fraction of its beauty with your quill. you bring the drawing home, somewhatdisappointed, but over time, discover joy in sharing with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch")
        }
        else if(thirdAnswer === "pick it"){
            let fourthAnswer = window.alert("You pick the flower and bring it home, and all marvel atits brilliance. However, over time it fades and eventually crumbles to dust")
        }
    }
}
