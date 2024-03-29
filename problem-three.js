/* 
Phew, you've beaten back the zombies. But it's still the apocalypse, and there's still much more to do. Next up, we need to gather enough food and supplies to make it through goodness knows how long. It may be time to repurpose our JARVIS bot to gather some food and supplies for our base camp. 

Write a function called gatherSupplies that takes in one parameter called suppliesToLookFor, which you can expect will always be given an array as an argument value. That array will contain any number of strings, where each string represents a specific food or type of supply to look for. Your function should use some sort of loop to iterate through this array for each individual element. 

Your function should do 2 things:
    1) Your function should log to the console a string that matches the following format: "JARVIS has found some _____!" where the blank space represents the type of supply or food to look for. 
    2) Your function should return an integer value that represents how many pieces of food or supplies it has managed to find on its foraging trip. 

For example, if you were given the following argument value: ["canned food", "aspirin", "bandages"]
Your function would log the following to the console:
    "JARVIS has found some canned food!"
    "JARVIS has found some aspirin!"
    "JARVIS has found some bandages!"
Your function would finally output the following value:
    3
Because there are 3 types of food or supplies in the provided argument value array. 
*/ 

// Write your code below:

function gatherSupplies(suppliesToLookFor){
    for(let i = 0; i < suppliesToLookFor.length; i++){
        console.log(`Jarvis has found some ${suppliesToLookFor[i]}!`)
    }
    console.log(`You have collected ${suppliesToLookFor.length} items`)
}

gatherSupplies(['beans', 'ammo', 'bandages', 'water bottles'])