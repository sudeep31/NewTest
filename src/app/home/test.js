const existingUsers = [
{'email' : 'test1@test.com',
'name' : 'test1'},
{'email' : 'test2@test.com',
'name' : 'test2'},
{'email' : 'test3@test.com',
'name' : 'test3'}
];

const newUsers = [
{'email' : 'test3@test.com',
'name' : 'test3'},
{'email' : 'test4@test.com',
'name' : 'test4'},
{'email' : 'test5@test.com',
'name' : 'test5'}
];

function getDuplicate() {
  console.log("get")
  let copyExistingUser = existingUsers;
  let copynewUsers = newUsers;

  const getDuplicate = copyExistingUser.concat(copynewUsers);
  // console.log("getData" , getDuplicate);
  //const getDuplicateArray = getDuplicate.filter(x,index => x.name)
  //console.log(getDuplicateArray);
  const getNewSet = Array.from(new Set(getDuplicate.map(JSON.stringify))).map(JSON.parse);

  const uniqueAddresses = Array.from(new Set(getDuplicate.map(a => a.name)))
 .map(id => {
   return getDuplicate.find(a => a.name === id)
 })
  console.log(getNewSet);
  console.log("uniqueAddresses", uniqueAddresses);
  console.log(duplicateFound(getDuplicate))
  return getNewSet;
}

function duplicateFound(arr){

  return [...new Set(arr.map(propYoureChecking => propYoureChecking.name))];
}

getDuplicate()

console.log("asd");

const getDupilcateData = getDuplicate();
console.log("getDupilcateData" , getDupilcateData)
