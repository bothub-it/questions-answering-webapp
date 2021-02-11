# Paper Question Answerer with Bert - Webapp

## About

Upload the pdf of any article in english and ask her any questions about its content "where the dataset came from?", "what is the neural network architecture used?" then and the model will answer the question.

Some filters are applied to the article to remove the garbage and leave only the necessary information and the model used is Bert from the DeepPavlov library, which is a transformer that uses the seq2seq neural network architecture to model language, the model was trained in english with the Squad dataset to answer questions given a text.

[Api](https://github.com/lucasraggi89/paper-qa-bert-api)

## How to run the project?
- Git Clone Repo
- Run `npm install`
- Run `ng serve`

## With docker

To configure the API for development use:
- Have Docker Desktop installed
- In the docker settings, check the 'Expose daemon ...' option and mark your disks as shared drives

## Run
to start the API:
Run `docker-compose up`

## Url
The project will be in:
`http://localhost:4200`



