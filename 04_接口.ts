// interface 和 tpye  相类似，但不完全相等
interface IPerson {
	// readonly name: string;
	name: string;
	age?: number;
	[propName: string]: any;
	say(): string;
}

interface ITeacher extends IPerson {
	teach(): string;
}

interface ISayHi {
	(word: string): string;
}

const getPersonName = (person: IPerson) => {
	return person.name;
};
getPersonName({
	name: 'michael',
	age: 13,
	say() {
		return 'hello michael';
	},
});

const setPersonName = (person: IPerson, name: string): void => {
	person.name = name;
	console.log('person=' + JSON.stringify(person));
};
setPersonName(
	{
		name: 'michael',
		age: 13,
		say() {
			return 'hello michael';
		},
	},
	'wxz'
);
