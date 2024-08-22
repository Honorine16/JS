function averageRank() {
    const averages = [9.75, 8, 12.75, 9.5, 15, 17, 19, 16, 16.5, 10]
    const copyArray = [].concat(averages)
    const newArray = copyArray.sort(function(a, b){return a - b})

    for (let counter = 0; counter < averages.length; counter++) {
        console.log(`Moyenne: ${averages[counter]}\t\t\tRang: ${averages.length - newArray.indexOf(averages[counter])}`)
    }
}

averageRank()