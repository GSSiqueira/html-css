function shuffle(array) {
    let copyOfarray = array.slice();
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let randonIndex = Math.floor(Math.random() * copyOfarray.length);
        result.push(copyOfarray[randonIndex]);
        copyOfarray = copyOfarray.filter(num => num !== copyOfarray[randonIndex])
    }
    console.log(shuffle([1, 2, 3]));
}

function mapToNames() {

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [john, pete, mary];

    let names = users.map((user) => user.name);

    console.log(names); // John, Pete, Mary

}

function mapToObjects() {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [john, pete, mary];

    let usersMapped = users.map(user => {
        return {
            id: user.id,
            fullName: `${user.name} ${user.surname}`,
        }
    })

    console.log(usersMapped[0].id) // 1
    console.log(usersMapped[0].fullName) // John Smith
}

function sortUsersByAge() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary];

    arr = arr.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        // names must be equal
        return 0;
    });

    // now: [john, mary, pete]
    console.log(arr[0].name); // John
    console.log(arr[1].name); // Mary
    console.log(arr[2].name); // Pete
}

function callGetAverageAge() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [john, pete, mary];

    console.log(getAverageAge(arr));// (25 + 30 + 29) / 3 = 28
}

function getAverageAge(array) {
    const numberOfMembers = array.length;

    const totalAge = array.reduce((total, person) => {
        return total + person.age;
    }, 0);

    return (totalAge / numberOfMembers);

}

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

  function groupById(users) {
    let usersById = {};

    usersById = users.reduce((newUsers,user)=>{
      newUsers[user.id] = user;
      return newUsers;
    },{});
    
  console.log(usersById)

    return usersById;
}

groupById(users);