let globalValue = {
    nestedValue: null
};

function setNestedValue(newValue){
    let localValue = newValue;
    globalValue.nestedValue = localValue;
}

setNestedValue("Guram, vakhtangashvili");

console.log(globalValue.nestedValue);
