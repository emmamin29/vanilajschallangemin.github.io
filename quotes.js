const quotes = [
    {
        quote:"doing me regardless",
        author:"aespa- life is too short",
    },
    {
        quote:"gold dust up my sea",
        author:"NCT127 - GOLD DUST",
    },
    {
        quote:"no there ain't no problem for love with you and I tonight",
        author:"NAYEON - no problem",
    },
    {
        quote:"니 사랑은 최소한의 숨",
        author:"BAEKHYUN - UNDERWATER",
    },
    {
        quote:"꿈에서도 꿈인걸 알면서도 I still love you",
        author:"RED VELVET - IN MY DREAM",
    },
    {
        quote:"Rhythm and the flow makes the 궁합",
        author:"NCT DREAM - BEATBOX(ENG.VER)",
    },
    {
        quote:"I'm your figure you could play me naked",
        author:"TEN - PAINT ME NAKED",
    },
    {
        quote:"I WISH YOU WERE HERE",
        author:"SuperM - WISH YOU WERE HERE",
    },
    {
        quote:"BABY WE CAN STAY UP ",
        author:"BAEKHYUN - STAY UP ",
    },
    {
        quote:"OUR RUNNING TIME IS 9 TO 5",
        author:"JUNNY - MOVIE",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;