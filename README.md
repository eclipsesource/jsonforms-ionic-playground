# Getting started

As the Ionic package of JSONForms is currently WIP and hasn't been released yet,
we need to link it. The following steps will become less of a hassle once the 
package has been released.

1. Clone this repo. 
   We'll use `$JSONFORMS_IONIC_REPO` when we refer to the clone location of this repo. 
2. Clone the [JSONForms repo](https://github.com/eclipsesource/jsonforms]). 
   We'll use `$JSONFORMS_REPO` when we refer to the clone location of this repo.
3. Execute `npm install -g ionic`
4. Instal dependencies
```
cd $JSONFORMS_IONIC_REPO
npm i 
```
5. Set-up link to Ionic package
```
cd $JSONFORMS_REPO/packages/core
npm link
cd $JSONFORMS_REPO/packages/angular
npm link
cd $JSONFORMS_REPO/packages/ionic
npm link
```
6. Link to JSONForms
```
npm link @jsonforms/core
npm link @jsonforms/angular
npm link @jsonforms/ionic-renderers
```
7. Remove duplicate dependencies, if present (might happend due to linking)
```
npm dedupe
```
8. Execute `ionic serve`
