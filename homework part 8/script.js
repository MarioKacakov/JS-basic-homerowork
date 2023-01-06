const Dog = {
       name: 'Eddy',
       kind: 'Jack Russel',
       speak(message) {
         console.log(`${this.kind} says: '${message}'`);
       },
     };       
     console.log(Dog);
     Dog.speak('Hey bro!!!'); 
     