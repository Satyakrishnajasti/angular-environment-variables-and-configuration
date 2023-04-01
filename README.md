# Angular Environment Variables and Configurations

1. first run `ng g environments`

   1. environment.ts
   2. environment.development.ts

above two files are generated

2. Open the angular.json file
   1. build -> production
   2. "fileReplacements: [
   {
   "replace": "src/environments/environment.ts",
   "with": "src/environments/environment.production.ts"
   }`

3. If you want to Run the Production mode
   1. go to main.ts, add below code
   2. `if (environment.production) {
  enableProdMode();
}  `
