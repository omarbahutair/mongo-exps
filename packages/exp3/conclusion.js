console.log(`
You can create an object field.
e.g: { <...other fields>, objField: { prop1:<prop1 type>, prop2: <prop2 type> ... } }

even if you specify the prop names you can add other props.
e.g: lets create an instance from the schema above:
model.create({ <...other fields>, objectField: { prop1, prop2, prop3 }})
`);
