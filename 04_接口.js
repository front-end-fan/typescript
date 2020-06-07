var getPersonName = function (person) {
    return person.name;
};
getPersonName({
    name: 'michael',
    age: 13,
    say: function () {
        return 'hello michael';
    }
});
var setPersonName = function (person, name) {
    person.name = name;
    console.log('person=' + JSON.stringify(person));
};
setPersonName({
    name: 'michael',
    age: 13,
    say: function () {
        return 'hello michael';
    }
}, 'wxz');
