const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "steve";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("henry", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "jamesljenks@gmail.com";
    const employeeInstance = new Employee("roger", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "steve";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getId method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("henry", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "henry@gmail.com";
    const employeeInstance = new Employee("henry", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("roger", 2, "roger@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})