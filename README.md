# API Documenter Test

```bash
npm install
npm run build
api-extractor run
xcopy dist\api-bug.api.json doc\input\
cd doc
api-documenter markdown
```

Result:

- documentation of `myFunction` in `MyClass` contains the doc for the first parameter `aParam` but not for the second parameter `aObs$`
- documentation of the top level function `myFunction` has no documentation of the parameters or the return value at all

Versions:

`api-extractor 7.0.13`

`api-documenter 7.0.19`
