// nested objects in type script is also possible and object types can also be created for them

const javascript = {
    type: 'programming language',
    data_types: 'yes',
    objects: {
        type_1: 'arrays',
        type_2: 'objects',
        type_3: 'functions'
    },
}

console.log(javascript.objects.type_2)