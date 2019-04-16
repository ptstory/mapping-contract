const Courses = artifacts.require("Courses");

contract("Courses", accounts => {
  const gary = accounts[1];
  const jane = accounts[2];

  beforeEach("deploy contract", async () => {
    course = await Courses.deployed();
  });

  it("should create instructor and return address", async () => {
    await course.setInstructor(gary, 34, "Gary", "Simon");
    const instructors = await course.getInstructors();
    assert.equal(instructors[0], gary);
  });

  it("should return instructor attributes", async () => {
    await course.setInstructor(jane, 21, "Jane", "Doe");
    const instructor = await course.getInstructor(jane);
    assert.equal(instructor[Object.keys(instructor)[0]], 21);
    assert.equal(instructor[Object.keys(instructor)[1]], "Jane");
    assert.equal(instructor[Object.keys(instructor)[2]], "Doe");
  });

  it("should return correct instructor count", async () => {
    const instructorCount = await course.countInstructors();
    assert.equal(instructorCount, 2);
  });
});
