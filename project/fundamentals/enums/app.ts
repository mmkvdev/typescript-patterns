// enums -> HUMAN READABLE IDENTIFIERS / CONSTANTS that translate to numbers

enum Role {
    ADMIN = 12,
    READ_ONLY = 'MEMBER',
    AUTHOR = 'ADMIN'
}

const person = {
    name: 'calmdev',
    profession: 'software engineer',
    role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
    console.log('enums experimentation');
}