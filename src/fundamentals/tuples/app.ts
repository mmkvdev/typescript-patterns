// tuples are fixed length arrays that have a fixed type

const companies: {
  type: string;
  list: string[];
  role: [number, string];
} = {
  type: "product",
  list: ["flipkart", "google", "amazon", "atlassian", "meesho", "razorpay"],
  role: [1, "top"],
};

companies.role[0] = 10;
companies.role.push("median"); // push method is an exception in typescript tupling

console.log(companies, companies.role.length);

const company = {
  name: "Meesho",
  size: 450,
  type: "unicorn",
  year: [2, "2022"],
};

company.year.push(27);
company.year[0] = "MMK";
