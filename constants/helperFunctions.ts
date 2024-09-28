
export const countFormatter = (count: number): string => {
    const splitCount = count.toString().split('');

    if( count >= 1000 && count <= 9999) {
        //Take the first value and check if there is a hundred and take it too
        if(splitCount[1] != '0') { 
            return `${splitCount[0]}.${splitCount[1]}k` 
        } 
        return `${splitCount[0]}k`
    }

    if( count > 9999 && count <= 99999) {
        //take First two value and check the third value if it is a lesser thousand
        if(splitCount[2] != '0') { 
            return `${splitCount[0]}${splitCount[1]}.${splitCount[2]}k`
        } 
        return `${splitCount[0]}${splitCount[1]}k`;
    }

    if( count > 99999 && count <= 999999) {
        //take First two value and check the third value if it is a lesser thousand
        if(splitCount[3] != '0') { 
            return `${splitCount[0]}${splitCount[1]}${splitCount[2]}.${splitCount[3]}k`
        } 
        return `${splitCount[0]}${splitCount[1]}${splitCount[2]}k`;
    }

    return `${count}`
}

export const isNumeric = (num: any) => {
    return !isNaN(num)
}