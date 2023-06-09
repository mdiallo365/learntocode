function printContact(contact){ //template string
    console.log(`
${contact.name}
${contact.address}
${contact.city}, ${contact.state} ${contact.zip}
`);
}

function printContact2(contact){ //hybrid
    console.log(contact.name);
    console.log(contact.address);
    console.log(`${contact.city}, ${contact.state} ${contact.zip}`);
}

function printContact3(contact){ // concatenation (chaining together with + like a train )
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city + ", " + contact.state + " " + contact.zip);
}

//TEST

let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126"
};

printContact(myInfo)
printContact2(myInfo)
printContact3(myInfo)