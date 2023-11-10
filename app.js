// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{

    quote: `"Your website is the center of your digital ecosystem, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door."`,
    person: `Leland Dieno`
}, {
    quote: `"A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away"`,
    person: `Antonie De-Saint Exupery`
}, {
    quote: `"Website without visitors is like a ship lost in the horizon."`,
    person: `Dr. Christopher Dayagdag`
}, {
    quote: `"Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."`,
    person: `Bill Gates`
}, {
    quote: `"A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or products you offer. Collect Contact details for future ongoing relation."`,
    person: `Mohamed Saad.`
}, {
    quote: `"Responsive Web Design always plays an important role whenever going to promote your website."`,
    person: `Josh Wilson`
}, {
    quote: `"If You Think Math is Hard Try Web Design."`,
    person: `Pixxelznet`
}, {
    quote: `"The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring."`,
    person: `Paul Rand`
}, {
    quote: `"There are three responses to a piece of design - yes, no, and WOW! Wow is the one to aim for"`,
    person: `Milton Glaser`
}, {
    quote: `"Learning to code is useful no matter what your career ambitions are."`,
    person: `Arianna Huffington`
}, {
    quote: `"Whether we’re fighting climate change or going to space, everything is moved forward by computers, and we don’t have enough people who can code. Teaching young people to code early on can help build skills and confidence and energize the classroom with learning-by-doing opportunities."`,
    person: `Richard Branson, Founder, Virgin Group`
}, {
    quote: `"Reusability is key in reducing bugs and coding quickly. The more I use a piece of code, the more confident and familiar I become with it, which in turn significantly speeds up my development time."`,
    person: `Robert Duchnik`
}, {
    quote: `"With the support of our vibrant web developer community and dedicated partners, our goal is to level the playing field and usher in an explosion of content and services that will meet the diverse needs of the next two billion people online."`,
    person: `Gary Kovacs`
}, {
    quote: `"A good standalone plugin can also make you a fair amount of money. Many developers make a decent living by simply maintaining and updating one or two crucial plugins that are far better than anything available for free."`,
    person: `Robert Duchnik`
}, {
    quote: `"It’s not a bug. It’s an undocumented feature!"`,
    person: `Ojei Kelvin`
}, {
    quote: `"Talk is cheap. Show me the code."`,
    person: `Linus Torvalds`
}, {
    quote: `"Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time."`,
    person: `N.J. Rubenking`
}, {
    quote: `"As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow."`,
    person: `Doug McIlroy`
}, {
    quote: `"Don't comment bad code - rewrite it."`,
    person: `Brian Kernighan`
}, {
    quote: `"Most sites need to prevent breadth - many many pages that are organized cohesively. A site that presents a single webpage is unlikely to present sufficient depth of content to justify extensive SEO."`,
    person: `Harold Davis`
}, {
    quote: `"If you want a great site, you’ve got to test. After you’ve worked on a site for even a few weeks, you can’t see it fresh anymore. You know too much. The only way to find out if it really works is to test it."`,
    person: `Steve Krug`
}, {
    quote: `"The problem is there are no simple ‘right’ answers for most Web design questions (at least not for the important ones). What works is good, integrated design that fills a need - carefully thought out, well-executed, and tested."`,
    person: `Steve Krug`
}, {
    quote: `"To become successful online, you only need to remember the following : Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success"`,
    person: `Dr. Christopher Dayagdag`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; // Corrected this line
})


