// any type is flexible and silences all the features that typescript offers, it's better to be explicit in terms of the data that we'll be working with or let typeinference do it's magic
let names: any[];

names = ['javascript', 'typescript'];

console.log(names);