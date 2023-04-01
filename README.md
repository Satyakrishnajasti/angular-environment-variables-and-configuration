# Angular Environment Variables and Configurations

1. first run `ng g environments`

   environment.ts
   environment.development.ts

above two files are generated

2. Open the angular.json
   build -> production
   "fileReplacements: [
   {
   "replace": "src/environments/environment.ts",
   "with": "src/environments/environment.production.ts"
   }`

3. Run the Production mode
   go to main.ts
   `if (environment.production) {
  enableProdMode();
}  `
