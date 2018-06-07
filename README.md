# Getting started

1. Clone this repo. 
   We'll use `JSONFORMS_IONIC_REPO` when we refer to the clone location of this repo. 
2. Clone the [JSONForms repo](https://github.com/eclipsesource/jsonforms]). 
   We'll use `JSONFORMS_REPO` when we refer to the clone location of this repo.
3. Execute `npm install -g ionic`
4. Instal dependencies
```
cd $JSONFORMS_IONIC_REPO
npm i 
```
5. Set-up JSONForms links
```
cd $JSONFORMS_REPO/packages/core
npm link
cd $JSONFORMS_REPO/packages/angular
npm link
```
6. Link to JSONForms
```
cd $JSONFORMS_IONIC_REPO
npm link @jsonforms/core
npm link @jsonforms/angular 
```
7. Execute `ionic serve`

# How to create and register renderers

1. `ionic g component my-renderer`
2. Add it to your module as a `declaration` and as an `entryComponent`
3. Register it with JSONForms, e.g. by adding it to the initial 
   state 
