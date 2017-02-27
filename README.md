# THCD Web Frontend

This is a proof of concept web app given to me as a programming challenge.
The acronym stands for **Terminal Handling Charge Distribution**. Don't ask me
why, it was the best name I could come up with.

This is my first react application, so please be mindful of that if you end
up reviewing some code.

## About the application

Frontend and Backend is split into two different repositories:

- <https://github.com/tfmalt/thcd-web-frontend>
- <https://github.com/tfmalt/thcd-api-backend>

The frontend is deployed to github pages with
[gh-pages](https://www.npmjs.com/package/gh-pages), and can be found
_in production_ on: <https://thcd.malt.no/>

The backend is run as a [node.js](https://nodejs.org/en/) -
[express](http://expressjs.com/) based microservice with a nginx server
doing TLS termination and routing.

The complete separation of frontend and backend code into separate
repositories is a conscious architectural decision, and the effect is
greater decoupling and better testability focusing on integration- and
end-to-end testing.

## About testing

I've not prioritized implementing tests at this stage. There are three reasons
for this:

1. I wanted to focus on getting the actual solution done, not spend too much
   time on ceremonies and formalities.

2. One can argue that the cost of investing in extensive unit-testing in the
   exploratory phase of development, where only one, or a small team (2-3)
   of developers, are working on the code is not worth it.

   Rather it would
   be most efficient to defer extensive investment in testing until the size
   and complexity of the application warranted it.

3. I'm lazy, and it's boring, and it feels like waste,  when I want to
   continue doing the fun stuff, which is learning a new framework and
   finding my way around how to make the application work.

See the [mocha](https://mochajs.org/)-[chai](http://chaijs.com/) based tests
in the [backend repository](https://github.com/tfmalt/thcd-api-backend),
though. I added that as an example of how I would have done it in real life.
