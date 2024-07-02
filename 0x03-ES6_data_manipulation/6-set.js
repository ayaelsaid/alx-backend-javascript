export default function setFromArray(array) {
    const mySet = new Set(array);
    let newArray = Array.from(mySet);
    
    let newSet = `Set { ${newArray.join(', ')} }`;

    return newSet;
}
