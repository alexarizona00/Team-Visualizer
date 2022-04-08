//this is where I will write all the messy stuff to reference later. 



const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'theirname',
    },
    {
        type: 'list',
        message: 'What is your role with the company?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Project Manager', 'Junior Dev', 'Intern',],
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Project Manager', 'Junior Dev', 'Intern','Done'],
    },
];