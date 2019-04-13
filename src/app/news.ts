export interface Article {
  title: string;
  link: string;
  text: string;
}

export const NEWS: Article[] = [
  {
    "title": "Fan of Angular-In-Depth and my writings? Support us on Twitter!",
    "link": "https://blog.angularindepth.com/fan-of-angular-in-depth-and-my-writings-support-us-on-twitter-e3bfcbabb4b1",
    "text": "A few weeks ago I ran a poll on Twitter to understand why Angular account has 280k followers on Twitter while Angular-In-Depth has only a fraction of that on Medium (11k). The poll showed that 50% of those who responded don’t use Medium, 17% find stories too complicated, 27% have no time to read and there are people (7%) who find stories not interesting.",
  },
  {
    "title": "Boosting performance of Angular applications with manual change detection",
    "link": "https://blog.angularindepth.com/boosting-performance-of-angular-applications-with-manual-change-detection-42cb396110fb",
    "text": "Angular uses NgZone/Zone.js to know when to trigger UI update (change detection) when our app data state changes. It brilliantly utilized the events emitted by Zone.js when async operations are performed to detect when to run a change detection cycle.",
  },
  {
    "title": "Learn how Angular Elements transmits Component’s @Outputs outside Angular",
    "link": "https://blog.angularindepth.com/how-angular-elements-uses-custom-events-mechanism-to-transmit-components-outputs-outside-angular-7b469386f6e2",
    "text": "In our last article we described how Angular Elements works under the hood. We identified that Angular Elements is a bridge to connect Custom Elements to Angular Components.",
  },
  {
    "title": "Angular CDK Tables",
    "link": "https://blog.angularindepth.com/angular-cdk-tables-1537774d7c99",
    "text": "In this article: Angular CDK Tables, Bootstrap 4 with Angular CDK Tables, Client Side searching/paging/sorting.",
  },
  {
    "title": "One-way template expression binding mechanism in Angular",
    "link": "https://blog.angularindepth.com/becoming-an-angular-environmentalist-45a48f7c20d8",
    "text": "Angular is the most popular and widely used JavaScript framework after React.js. It abstracts many complexities away from developers to enable them to develop apps with ease.",
  },
  {
    "title": "The Extensive Guide to Creating Streams in RxJS",
    "link": "https://blog.angularindepth.com/how-to-unit-test-angular-components-with-fake-ngrx-teststore-f0500cc5fc26",
    "text": "For most developers the first contact with RxJS is established by libraries, like Angular. Some functions return streams and to make use of them the focus naturally is on operators.",
  },
  {
    "title": "RxJS: Avoiding Unbound Methods",
    "link": "https://blog.angularindepth.com/rxjs-avoiding-unbound-methods-fcf2648a805",
    "text": "When unbound methods are passed to RxJS, they will be invoked with an unexpected context for this. If the method implementations don’t use this, they will behave as you would expect.",
  },
  {
    "title": "Angular Elements: how does this magic work under the hood?",
    "link": "https://blog.angularindepth.com/angular-elements-how-does-this-magic-work-under-the-hood-3684a0b2be95",
    "text": "The Angular Elements project is generating lots of hype in the community right now, and rightly so! Angular Elements provides a wealth of awesome features out of the box.",
  },
  {
    "title": "RxJS: Testing with Fake Time",
    "link": "https://blog.angularindepth.com/rxjs-testing-with-fake-time-94114271eed2",
    "text": "Angular, Jasmine, Jest and Sinon.JS all provide APIs for running tests with fake time. Their APIs differ, but they are broadly similar. Running tests with fake time avoids having to wait for actual time to elapse and it also makes the tests much simpler, as they run synchronously. So what does this have to do with RxJS?",
  },
  {
    "title": "How do CDK Portals work?",
    "link": "https://blog.angularindepth.com/how-do-cdk-portals-work-7c097c14a494",
    "text": "In the last article we were exploring how to leverage the Angular Material CDK portals for placing some piece of template from a component to some other location within our app. CDK portals make this a no-brainer. Wondering how they work? In this article we dive deeper to uncover how its internals work and how we could simply implement it by ourselves.",
  },
  {
    "title": "How I test my NgRx selectors",
    "link": "https://blog.angularindepth.com/how-i-test-my-ngrx-selectors-c50b1dc556bc",
    "text": "In this post I’m going to show you how I test my selectors by putting the selectors from a previous post “Clean NgRx reducers using Immer”, where we created a small shopping cart application, under test. In the application there is a collection of products (the catalog) and the cart items, together they form the state of the application.",
  },
  {
    "title": "Angular 5 or Angular 6? Yes please!",
    "link": "https://blog.angularindepth.com/angular-5-or-angular-6-yes-please-d71b08b5e59b",
    "text": "And, I’m glad you asked: YES, you should move all your projects to Angular 6 now or sooner! But … and it is a big but. Like me, you may be in the situation where you are working on multiple projects and many of them are going to be stuck in Angular 5 for a while. So, you need to support a development environment where you can work on and even create new Angular applications in both Angular 5 and Angular 6.",
  },
  {
    "title": "Total Guide To Dynamic Angular Animations That Can Be Customized At Runtime",
    "link": "https://blog.angularindepth.com/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a",
    "text": "From route transitions to small details like feedback when clicking on a button or displaying a tooltip, animations give your project that nice sleek look. Well crafted animations communicate that you or your organization care enough to put effort into details and create best possible experience for your users.",
  },
  {
    "title": "RxJS: How to Observe an Object",
    "link": "https://blog.angularindepth.com/rxjs-how-to-observe-an-object-20c47cf51571",
    "text": "A while ago, John Lindquist published a package named rx-handler. With it, you can create event handler functions that are also observables. When it was published, I noticed a few queries about whether something similar could be done with Angular’s Input properties — so that they, too, could be treated as observables.",
  },
  {
    "title": "A curious case of the @Host decorator and Element Injectors in Angular",
    "link": "https://blog.angularindepth.com/a-curios-case-of-the-host-decorator-and-element-injectors-in-angular-582562abcf0a",
    "text": "As you know, Angular’s dependency injection mechanism includes a bunch of decorators like @Optional and @Self which impact the way dependencies are resolved. And while most of them are pretty straightforward and self-explanatory, the @Host decorator has puzzled me for a long time.",
  },
  {
    "title": "Simple state mutations in NGXS with Immer",
    "link": "https://blog.angularindepth.com/simple-state-mutations-in-ngxs-with-immer-48b908874a5e",
    "text": "NGXS is a state management pattern + library for Angular. Just like Redux and NgRx it’s modeled after the CQRS pattern. NGXS uses TypeScript functionality to its fullest extent and because of this it may feel more Angular-y.",
  },
  {
    "title": "Upgrading a project without CLI to Angular 6",
    "link": "https://blog.angularindepth.com/upgrading-a-project-without-cli-to-angular-6-b07b105adc02",
    "text": "In the following article, I’m going to describe the challenging process of updating an Angular application with custom Webpack configuration, which our team had to pull through 3 weeks ago. I guess our experience would be useful for those who use Angular with acustom Webpack config. For others, it is an illustration of where modern front-end could lead us and how to live with that.",
  },
  {
    "title": "Power of RxJS when using exponential backoff",
    "link": "https://blog.angularindepth.com/power-of-rxjs-when-using-exponential-backoff-a4b8bde276b0",
    "text": "Most of the modern-day Angular web apps make Ajax requests to the servers. These requests involve multiple network components (such as routers, switches, etc) as well as servers’ state and everything has to go just right for them to succeed. However, sometimes it doesn’t.",
  },
  {
    "title": "Clean NgRx reducers using Immer",
    "link": "https://blog.angularindepth.com/clean-ngrx-reducers-using-immer-7fe4a0d43508",
    "text": "This weeks post is inspired by another great This Dot Media event and the topic this time was state management. There was a small segment about Immer which I found interesting (video is linked at the bottom of this post), so I decided to give it a shot with NgRx.",
  },
  {
    "title": "The Angular Library Series - Creating a Library with the Angular CLI",
    "link": "https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5",
    "text": "Angular 6 was just released. Many of the improvements were to the Angular CLI. The one I have really been looking forward to is the integration of the Angular CLI with ng-packagr to generate and build Angular libraries. ng-packagr is a fantastic tool created by David Herges that transpiles your library to the Angular Package Format.",
  },
  {
    "title": "RxJS: Avoiding takeUntil Leaks",
    "link": "https://blog.angularindepth.com/rxjs-avoiding-takeuntil-leaks-fb5182d047ef",
    "text": "Using the takeUntil operator to automatically unsubscribe from an observable is a mechanism that’s explained in Ben Lesh’s Don’t Unsubscribe article. It’s also the basis of a generally-accepted pattern for unsubscribing upon an Angular component’s destruction.",
  },
  {
    "title": "Use <ng-template>",
    "link": "https://blog.angularindepth.com/use-ng-template-c72852c37fba",
    "text": "Render Props have been making waves in the React community recently, but the corresponding pattern in the Angular world hasn’t been getting nearly as much press. I’ve written before that TemplateRefs are Angular’s Render Props and I hope to give you a good simple example of that here.",
  },
  {
    "title": "RxJS: Improving the Static pipe Function",
    "link": "https://blog.angularindepth.com/rxjs-improving-the-static-pipe-function-81146fbb14b6",
    "text": "My previous article looked at using the static pipe function to compose reusable combinations of operators. Most of the time, the pipe function’s TypeScript overload signatures will infer the desired type for the returned function. However, sometimes it’s desirable to have a generic type inferred and the current overload signatures will not do that.",
  },
  {
    "title": "Angular Ivy change detection execution: are you prepared?",
    "link": "https://blog.angularindepth.com/angular-ivy-change-detection-execution-are-you-prepared-ab68d4231f2c",
    "text": "While new Ivy renderer is not feature completely yet, many people wonder how it will work and what changes it prepares for us. In this article I am going to visualize Ivy change detection mechanism, show some things I am really excited about and also build simple app based on instructions, similar to angular Ivy instructions, from scratch.",
  },
  {
    "title": "Ivy engine in Angular: first in-depth look at compilation, runtime and change detection",
    "link": "https://blog.angularindepth.com/ivy-engine-in-angular-first-in-depth-look-at-compilation-runtime-and-change-detection-876751edd9fd",
    "text": "I usually finish my talks with the philosophical phrase that nothing stays the same. And as you probably know it’s more then true with Angular. The current rendering engine is being rewritten with the new much enhanced version called Ivy. The current status of Ivy can be tracked here.",
  },
  {
    "title": "RxJS: Combining Operators",
    "link": "https://blog.angularindepth.com/rxjs-combining-operators-397bad0628d0",
    "text": "In version 5.5, pipeable operators were added to RxJS. And in version 6, their non-pipeable namesakes were removed. Pipeable operators have numerous advantages. The most obvious is that they are easier to write. A less obvious advantage is that they can be composed into reusable combinations.",
  },
  {
    "title": "A modern solution to lazy loading images using Intersection Observer",
    "link": "https://blog.angularindepth.com/a-modern-solution-to-lazy-loading-using-intersection-observer-9280c149bbc",
    "text": "Performance of a web application has become a key factor in deciding conversion rates for e-commerce websites. The faster a page loads, the better the conversion rate. According to the recent mobile page speed benchmarks released by Google, the bounce probability increases as page load time increases.",
  },
  {
    "title": "Working with DOM in Angular: unexpected consequences and optimization techniques",
    "link": "https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866",
    "text": "I recently gave a talk on advanced DOM manipulations in Angular in a form of a workshop at NgConf. I went from the basics like using template references and DOM queries to access DOM elements to using a view container to render templates and components dynamically.",
  },
  {
    "title": "The benefits of application state normalization in Angular",
    "link": "https://blog.angularindepth.com/the-benefits-of-application-state-normalization-in-angular-f93392ca9f44",
    "text": "Imagine we have a recursive data structure in the store, let us say, information about a product’s category in an e-commerce application. Category is the classification of which type of product it is. For example, Mobile Phones category can have subcategories such as Google, Apple, Samsung and so on and each subcategory can in turn have further subcategories...",
  },
  {
    "title": "RxJS: TSLint Rules for Version 6",
    "link": "https://blog.angularindepth.com/rxjs-tslint-rules-for-version-6-d10e2482292d",
    "text": "Earlier this week, RxJS version 6 was released and, with its release, managing RxJS imports has become much, much easier. Last year, I wrote a bunch of TSLint rules for managing RxJS imports. They’re distributed in the rxjs-tslint-rules package.",
  },
  {
    "title": "Angular Universal & Firebase functions: The missing guide",
    "link": "https://blog.angularindepth.com/angular-5-universal-firebase-4c85a7d00862",
    "text": "Lucky you, I’ve written this simplified guide to configure Angular 5 Universal in your Angular project. Moreover, I’m gonna give you also a bonus track on how to run Universal in a serverless environment like Firebase Cloud Functions.",
  },
  {
    "title": "Angular and Internet Explorer",
    "link": "https://blog.angularindepth.com/angular-and-internet-explorer-5e59bb6fb4e9",
    "text": "You installed the Angular CLI and used it to generate your new application. But, when you try to view it in Internet Explorer (IE), you see nothing. Now what? The bad news: Angular CLI applications require a few more steps in order to support Internet Explorer.",
  },
  {
    "title": "Gestures in an Angular Application",
    "link": "https://blog.angularindepth.com/gestures-in-an-angular-application-dde71804c0d0",
    "text": "In this post I will attempt to explain how to use hammerjs gesture recognizers provided by the @angular/platform-browser package. I’ll be referencing @angular/platform-browser@5.2.0 within my code samples, but there are some changes coming to 6.0.0 that will be discussed later.",
  },
  {
    "title": "Deploy an Angular Application to IIS",
    "link": "https://blog.angularindepth.com/deploy-an-angular-application-to-iis-60a0897742e7",
    "text": "The Angular Router is a fantastic module for Single Page Apps. However, to deploy it in a Production scenario you will typically need to do some configuration to make it work. This article details the steps necessary to deploy an Angular Router application anywhere on Internet Information Services (IIS).",
  },
  {
    "title": "Super Charging an Angular CLI App",
    "link": "https://blog.angularindepth.com/super-charging-an-angular-cli-app-fc496a6c100",
    "text": "A standard Angular CLI application comes with a terrific set of of tooling to prepare you to get developing quickly. However, there’s a few additional steps you should take to really prepare your project for success. In this article I’ll break down all the additional features you can add to your project without ejecting (exporting the WebPack Config).",
  },
  {
    "title": "What you always wanted to know about Angular Dependency Injection tree",
    "link": "https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d",
    "text": "If you didn’t dive deep into angular dependency injection mechanism, your mental model should be that in angular application we have some root injector with all merged providers, every component has its own injector and lazy loaded module introduces new injector.",
  },
  {
    "title": "RxJS: When to Use switchMap",
    "link": "https://blog.angularindepth.com/when-to-use-switchmap-dfe84ac5a1ff",
    "text": "In a response to RxJS: Avoiding switchMap-Related Bugs, Martin Hochel mentioned a classic use case for switchMap. For the use case to which he referred, switchMap is not only valid; it’s optimal. And it’s worth looking at why.",
  },
  {
    "title": "RxJS: Understanding Expand",
    "link": "https://blog.angularindepth.com/rxjs-understanding-expand-a5f8b41a3602",
    "text": "RxJS has a lot of operators. Lots and lots of them. It takes time to learn what they all do and how they can be used. Some operators are straightforward; others, less so. One operator that developers often find confusing is expand.",
  },
  {
    "title": "RxJS: Composing Subscriptions",
    "link": "https://blog.angularindepth.com/rxjs-composing-subscriptions-b53ab22f1fd5",
    "text": "RxJS code involves making subscriptions to observables. Lots of subscriptions. If each subscription is assigned to its own variable or property, the situation can be difficult to manage.",
  },
  {
    "title": "Handle Template Reference Variables with Directives",
    "link": "https://blog.angularindepth.com/handle-template-reference-variables-with-directives-223081bc70c2",
    "text": "I’ve been using template reference variables pretty liberally in my examples so far, and it’s high time I dive in a bit into how to use them to reference specific directives.",
  },
  {
    "title": "Avoid Namespace Clashes with Directives",
    "link": "https://blog.angularindepth.com/avoid-namespace-clashes-with-directives-1f00d62de445",
    "text": "Not only can the selector for a directive clash with another directive, but Inputs and Outputs for those directives can clash with each other. When they have the same name, Angular doesn’t complain — it just applies the logic to both directives. In some cases, this is exactly what we want. However, sometimes it can cause unexpected behavior.",
  },
  {
    "title": "Dynamically Loading Components with Angular CLI",
    "link": "https://blog.angularindepth.com/dynamically-loading-components-with-angular-cli-92a3c69bcd28",
    "text": "When moving from a multi-page application to a SPA, one of the problems that presents itself is the payload size upon initial load. By default, in an Angular application everything is bundled into one payload, which means as the application grows, so does the time that it takes to load.",
  },
  {
    "title": "Insider’s guide into interceptors and HttpClient mechanics in Angular",
    "link": "https://blog.angularindepth.com/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf",
    "text": "You probably know that Angular introduced a new powerful HTTP client in version 4.3. One of its major features was request interception — the ability to declare interceptors which sit in between your application and the backend.",
  },
  {
    "title": "Enhance Components with Directives",
    "link": "https://blog.angularindepth.com/enhance-components-with-directives-58f16c4ca1f",
    "text": "One element of part 4 of Kent C. Dodds’ series that I didn’t touch on in the previous article is the fact that the withToggle higher order component is able to pull common logic out of the <toggle-on>, <toggle-off>, and <toggle-button> components. There wasn’t very much logic happening in those components in the last article, but what if there were?",
  },
  {
    "title": "Communicate Between Components Using Dependency Injection",
    "link": "https://blog.angularindepth.com/communicate-between-components-using-dependency-injection-d7280567faa7",
    "text": "There is another problem we’ve found with our <toggle> component. We can’t have more than one <toggle-on> or <toggle-button> component in the same <toggle> and a <toggle-on> that is inside of another custom component won’t be picked up by the @ContentChild decorator.",
  },
  {
    "title": "Build a Toggle Component",
    "link": "https://blog.angularindepth.com/build-a-toggle-component-6e8f44889c2c",
    "text": "Just like in Kent C. Dodds’ Advanced React Component Patterns, we will use a relatively simple <toggle> component to illustrate these patterns. The <toggle> component is responsible for managing a singleboolean property: on.",
  },
  {
    "title": "Introducing Advanced Angular Component Patterns",
    "link": "https://blog.angularindepth.com/introducing-advanced-angular-component-patterns-13e102e6bbfc",
    "text": "This series of posts is my small attempt to broaden my own view by providing a translation of Kent C. Dodds’ Advanced React Patterns in Angular. My goal is to foster learning and sharing rather than criticism.",
  },
  {
    "title": "Top 10 Angular articles in 2017 from Angular-In-Depth you really want to read",
    "link": "https://blog.angularindepth.com/top-10-angular-articles-in-2017-from-angularindepth-you-really-want-to-read-153ae6e497d4",
    "text": "Almost one year ago I started Angular-In-Depth medium publication with the goal to become the largest and most technical Angular publication on medium. I was lucky to get on board very talented and knowledgeable guys Uri Shaked, Nicholas Jamieson and Chaz Gatian.",
  },
  {
    "title": "Practical RxJS In The Wild 🦁— Requests with concatMap() vs mergeMap() vs forkJoin() 🥊",
    "link": "https://blog.angularindepth.com/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293",
    "text": "I would like to share with you experience acquired by working on a yet another Hacker News client (code name HAKAFAKA 😂 still in alpha). I have been on the road for couple months now and realized that a small coding project wouldn’t hurt.",
  },
  {
    "title": "He who thinks change detection is depth-first and he who thinks it’s breadth-first are both usually right",
    "link": "https://blog.angularindepth.com/he-who-thinks-change-detection-is-depth-first-and-he-who-thinks-its-breadth-first-are-both-usually-8b6bf24a63e6",
    "text": "I was once asked if change detection in Angular is depth or breadth first. This basically means whether Angular first checks siblings of the current component (breadth-first) or its children (depth-first). I hadn’t given any prior thought to this question so I just went with my gut and the knowledge of internals.",
  },
  {
    "title": "Learn to combine RxJs sequences with super intuitive interactive diagrams",
    "link": "https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511",
    "text": "When working on a sufficiently complex application you usually have data coming from more than one data source. It can be some multiple external data points like Firebase or several UI widgets interacting with a user. Sequence composition is a technique that enables you to create complex queries.",
  },
  {
    "title": "React Call Return in Angular",
    "link": "https://blog.angularindepth.com/react-call-return-in-angular-32a1c9751d6",
    "text": "This article continues in the theme of taking React articles and reimagining them in Angular. See TemplateRefs are Angular’s Render Props and Content Directives Are Angular’s Prop Getters.",
  },
  {
    "title": "Do you really know what unidirectional data flow means in Angular",
    "link": "https://blog.angularindepth.com/do-you-really-know-what-unidirectional-data-flow-means-in-angular-a6f55cefdc63",
    "text": "Most architectural patterns are not easy to grasp especially when the information that describes them is scarce. One of such patterns in Angular is unidirectional data flow. There’s no clear explanation of what that means in the official documentation and it’s only briefly mentioned in the expression guidelines and template statements sections.",
  },
  {
    "title": "How to Reduce Action Boilerplate",
    "link": "https://blog.angularindepth.com/how-to-reduce-action-boilerplate-90dc3d389e2b",
    "text": "I use Redux for my application development and, to take advantage of RxJS, I use NgRx in Angular projects and redux-observable in React projects. I also use TypeScript.",
  },
  {
    "title": "These 5 articles will make you an Angular Change Detection expert",
    "link": "https://blog.angularindepth.com/these-5-articles-will-make-you-an-angular-change-detection-expert-ed530d28930",
    "text": "In the last 8 months I’ve spent most of my free time reverse-engineering Angular. The topic that fascinated me the most was change detection. I’d argue that it’s the most important part of the framework since it’s responsible for the “visible” job like DOM updates, input bindings and query list updates.",
  },
  {
    "title": "Angular CDK Portals",
    "link": "https://blog.angularindepth.com/angular-cdk-portals-b02f66dd020c",
    "text": "The @angular/cdk contains a concept called portals. In this post I’ll attempt to explain the concepts of a Portal, and when they should be applied. The example code in this post is referencing @angular/cdk@2.0.0-beta.12.",
  },
  {
    "title": "Content Directives Are Angular’s Prop Getters",
    "link": "https://blog.angularindepth.com/content-directives-are-angulars-prop-getters-360fdae60576",
    "text": "Kent C. Dodds wrote a piece about using prop getters in React. Along with render props (see TemplateRefs Are Angular’s Render Props), prop getters allow component library authors to give users as much control of the rendering as possible — the component only needs to do its job.",
  },
  {
    "title": "Using TransferState API in an Angular v5 Universal App",
    "link": "https://blog.angularindepth.com/using-transferstate-api-in-an-angular-5-universal-app-130f3ada9e5b",
    "text": "You can get a more up-to-date version at https://leanpub.com/angular-universal. Let’s illustrate this article with a concrete example. We have a weather app, displaying a list of cities in its sidebar. When you click on a city name, the app displays the current weather in this city.",
  },
  {
    "title": "Do you still think that NgZone (zone.js) is required for change detection in Angular?",
    "link": "https://blog.angularindepth.com/do-you-still-think-that-ngzone-zone-js-is-required-for-change-detection-in-angular-16f7a575afef",
    "text": "Most articles I have seen strongly associate Zone(zone.js) and NgZone with change detection in Angular. And although they are definitely related, technically they are not part of one whole. Yes, Zone and NgZone is used to automatically trigger change detection as a result of async operations.",
  },
  {
    "title": "As busy as a bee — lazy loading in the Angular CLI",
    "link": "https://blog.angularindepth.com/as-busy-as-a-bee-lazy-loading-in-the-angular-cli-d2812141637f",
    "text": "Angular has a programmatic API for lazy loading NgModule’s. In the Angular CLI, it has a direct dependency upon webpack’s underlying toolchain for chunk splitting and lazy loading. It’s thus (almost) impossible to use it outside of an ordinary router set-up. Custom lazy loading strategies need to use SystemJS.",
  },
  {
    "title": "TemplateRefs are Angular’s Render Props",
    "link": "https://blog.angularindepth.com/templaterefs-are-angulars-render-props-a2b97cbcc362",
    "text": "As a developer that spends most of my time building Angular apps, I still love reading about what the React community is doing. We’re generally solving the same problems and innovation in one community can be leveraged in another.",
  },
  {
    "title": "RxJS: How to Use Lettable Operators with Promises",
    "link": "https://blog.angularindepth.com/rxjs-how-to-use-lettable-operators-and-promises-2e717313bf76",
    "text": "Converting observables to promises is an antipattern. Unless you are integrating observables with a promise-based API, there is no reason to convert an observable into a promise.",
  },
  {
    "title": "RxJS: Pipelining Lettable Operators",
    "link": "https://blog.angularindepth.com/rxjs-pipelining-lettable-operators-f92f6843d817",
    "text": "Earlier this week, a TC39 proposal for a pipeline operator moved to stage-1. If the proposal is eventually accepted and included in the ECMAScript standard — it has a long way to go — it will offer a new syntax for lettable operators.",
  },
  {
    "title": "I reverse-engineered Zones (zone.js) and here is what I’ve found",
    "link": "https://blog.angularindepth.com/i-reverse-engineered-zones-zone-js-and-here-is-what-ive-found-1f48dc87659b",
    "text": "Zones is a new mechanism that helps developers work with multiple logically-connected async operations. Zones work by associating each async operation with a zone.",
  },
  {
    "title": "RxJS: Understanding Lettable Operators",
    "link": "https://blog.angularindepth.com/rxjs-understanding-lettable-operators-fe74dda186d3",
    "text": "Lettable operators offer a new way of composing observable chains and they have advantages for both application developers and library authors. Let’s look briefly at the existing composition mechanisms in RxJS and then look at lettable operators in more detail.",
  },
  {
    "title": "The essential difference between Constructor and ngOnInit in Angular",
    "link": "https://blog.angularindepth.com/the-essential-difference-between-constructor-and-ngoninit-in-angular-c9930c209a42",
    "text": "One of the most popular Angular questions on stackoverflow is Difference between Constructor and ngOnInit with over 100k views. I gave my answer to this question there but also decided to expand on it in this article.",
  },
  {
    "title": "RxJS: How to Use refCount",
    "link": "https://blog.angularindepth.com/rxjs-how-to-use-refcount-73a0c6619a4e",
    "text": "My previous article — Understanding the publish and share Operators — looked only briefly at the refCount method. Let’s look at it more closely here.",
  },
  {
    "title": "The essential difference between pure and impure pipes in Angular and why that matters",
    "link": "https://blog.angularindepth.com/the-essential-difference-between-pure-and-impure-pipes-and-why-that-matters-999818aa068",
    "text": "When writing a custom pipe in Angular you can specify whether you define a pure or an impure pipe. Angular has a pretty good documentation on pipes that you can find here. But as it often happens with documentation the clearly reasoning for division is missing.",
  },
  {
    "title": "RxJS: Understanding the publish and share Operators",
    "link": "https://blog.angularindepth.com/rxjs-understanding-the-publish-and-share-operators-16ea2f446635",
    "text": "I’m often asked questions that relate to the publish operator: What’s the difference between publish and share? How do I import the refCount operator? When should I use an AsyncSubject? Let’s answer these questions — and more — by starting with the basics.",
  },
  {
    "title": "If you think `ngDoCheck` means your component is being checked — read this article",
    "link": "https://blog.angularindepth.com/if-you-think-ngdocheck-means-your-component-is-being-checked-read-this-article-36ce63a3f3e5",
    "text": "There’s one question that comes up again and again on stackoverflow. The question is about ngDoCheck lifecycle hook that is triggered for a component that implements OnPush change detection strategy.",
  },
];
