# ramda-validator

## Usage

```js
var validateModel = RV.validator([
  // Allow only following fields / add error to all fields that are not in list.		
  RV.permitAll(["id", "title", "description"]),
  RV.requireAll(["id", "title"]),
  RV.ifThen(RV.required("description"), RV.minLength("description", 5))
]);
var model = {
  id: 42,
  title: "Lorem ipsum dolor sit amet",
  description: "",
  categories: []
};
var validationResult = validateModel(model);
```

## Todo

* Add tests
* Refactoring
* Documentation
* Examples
