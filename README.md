# serverless-typescript-monorepository-example

This repository show an example on how to setup and implement your serverless services using monorepository.

STEPS:

Add dependences:

1 - serverless-webpack: We can use this awesome plugin to generate all the bundles for our lambda function. It automatically check all dependecy tree and import only the dependencies that each function uses.

2 - lerna: We will use lerna + yarn workspaces as our monorepository provider.

3 - webpack: We need to have webpack installed to run our project.
