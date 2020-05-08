const quotes= [
    {
    name:"Stephen King",
    quote: "Get bust living or get busy dying"

},
{
    name:"John F. Kennedy",
    quote: "Those who dare to fail miserably can achieve greatly."

},

{
name:"Abrham Lincoln",
quote:"I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
},
{
    name:"Leonard Da Vinci",
    quote:"It had long since come to my attention that people of accomplishment rarely sat and let things happen to them. They want out and happened to things"
    },

    {
        name:"Leo Tolstoy",
        quote:"If you want to be happy, be."
        }


]


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
let number = Math.floor(Math.random()*
quotes.length);
quoteAthor.innerHTML= quotes[number].name;
quote.innerHTML= quotes[number].quote

}
