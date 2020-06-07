class Person1 {
	name = 'michael';
	getName() {
		return this.name;
	}
}

class Teacher extends Person1 {
	getTeacherName() {
		return 'teacher name';
	}
	getName() {
		return super.getName() + '. teacher getName';
	}
}

const p1 = new Person1();
console.log(p1.getName());

const t1 = new Teacher();
console.log(t1.getName());
