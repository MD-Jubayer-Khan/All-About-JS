var student1 = {
    id: 115,
    name : 'John',
    marks: 81,
    phone : +8801937013572,
};
console.log(student1)
var studentPhone = student1.phone;
console.log(studentPhone);

// set a value for an object proparty

// Number1
student1.id = 200 ;
// Number2
student1['marks'] = 99 ;
// Number3
var nameProparty = 'name';
student1[nameProparty] = 'linkon'
console.log(student1);