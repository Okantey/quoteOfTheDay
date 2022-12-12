let changeBackgroundImage = document.getElementsByTagName('body');
let quote = document.querySelector('.text');
let person = document.querySelector('.person');
let newQuote = document.getElementById('new-quote');



const swiper = () => {
  const quotes = [
    {
      quote: '"Sometimes life happens"',
      person: 'Katie Mcgray',
      
    },

    {
      quote: '"A journey of a thousand miles begins with a step"',
      person: 'Lao Tzu',
    },

    {
      quote: '"Our lives begin to end, the day we become silent about the things that matter"',
      person: 'Martin Luther King Jnr',
    },

    {
      quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck"',
      person: 'Dalai Lama',
    },

  ]

  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;




};

newQuote.addEventListener('click', swiper);