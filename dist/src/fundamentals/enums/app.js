"use strict";
// enums -> HUMAN READABLE IDENTIFIERS / CONSTANTS that translate to numbers
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 12] = "ADMIN";
    Role["READ_ONLY"] = "MEMBER";
    Role["AUTHOR"] = "ADMIN";
})(Role || (Role = {}));
const enumExamplePerson = {
    name: "calmdev",
    profession: "software engineer",
    role: Role.ADMIN,
};
if (enumExamplePerson.role === Role.ADMIN) {
    console.log("enums experimentation");
}
