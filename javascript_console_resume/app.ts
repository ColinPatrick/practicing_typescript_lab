let myName: string = "Colin Huckestein"

console.log('Name: ' + myName.toUpperCase());
console.log('Career: Web Development/Software Development');
console.log('Description: I love computers!');
console.log(' ');
console.log('My interestes: \n * Entertainment and technology \n * Stories/storytelling \n * Writing \n * Music \n * Games \n * Reviewing film & television');
console.log(' ');
console.log('My Previous Experience: \n * Some college classes in software development and graphic design \n * A web course on web development \n * The Web Development Bootcamp from Innovate Birmingham \n * A leadership position at Bartaco restaurant');
console.log(' ');
console.log('My Skills: \n * Creative problem solving \n * Interpersonal skills \n * Basics of HTML, CSS, JavaScript and other programming languages such as Java and C++ \n * BAM: Creative writing and copywriting \n * Average typing speed: 80wpm \n * Data entry \n * BAM: Critquing film & television \n * Microsoft office programs');
console.log(' ');

function displayPosition(name: string, title: string, description: string) {
  console.log('Position: \n * Company Name: ' + name + '\n * Job Title: ' + title + '\n * Description: ' + description);
};

displayPosition('Bartaco', 'Shift Manager', 'Ran shifts and acted as the on duty manager');

console.log(' ');
console.log('My Skills:')

function displaySkill(skill: string, coolness: boolean) {
  if (coolness == true) {
    console.log(' * BAM: ' + skill);
  } else {
    console.log(' * ' + skill);
  };
};

displaySkill('Creative problem solving', false);
displaySkill('Interpersonal skills', false);
displaySkill('Basics of HTML, CSS, JavaScript and other programming languages such as Java and C++', false);
displaySkill('Creative writing and copywriting', true);
displaySkill('Average typing speed: 80wpm', false);
displaySkill('Data entry', false);
displaySkill('Critiquing film & television', true);
displaySkill('Microsoft Office programs', false);



