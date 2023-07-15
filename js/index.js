// document.getElementById("hOne").innerHTML="Quote of the Day";

document.getElementById("h-one").innerHTML = "Quote of the Day"

// document.getElementsByTagName("h1").item(0).innerHTML = "Quote of the Day";

document.getElementById('p1').innerHTML = "Press the button below to recieve a random quote!";
// document.getElementsByTagName("p").item(0).innerHTML = "Press the button below to recieve a random quote!";

var generateBtn = document.getElementById('generate');
generateBtn.innerHTML = 'New Quote';
// document.getElementsByTagName("button").item(0).innerText = 'press me'

// document.getElementsByTagName("button").item(0).onclick = generateQuote;
generateBtn.addEventListener('click', generateQuote);


var displayQuote = document.getElementById('display-quote');
var nameAuthor = document.getElementById('author-name');

window.addEventListener('load',generateQuote);

var arrayQuotes = [
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        authorName: "Oscar Wilde"

    },
    {
        quote: "That it will never come again is what makes life so sweet.",
        authorName: "Emily Dickinson"

    },
    {
        quote: "It is never too late to be what you might have been.",
        authorName: "George Eliot"

    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        authorName: "Ralph Waldo Emerson"

    },
    {
        quote: "Pain is inevitable. Suffering is optional.",
        authorName: "Haruki Murakami"

    },
    {
        quote: "All the world's a stage, and all the men and women merely players.",
        authorName: "William Shakespeare"

    },
    {
        quote: "Be kind, for everyone you meet is fighting a hard battle.",
        authorName: "Plato"

    },
    {
        quote: "Unable are the loved to die for love is immortality.",
        authorName: "Emily Dickinson"

    },
    {
        quote: "Let me live, love, and say it well in good sentences.",
        authorName: "Sylvia Plath"

    },
    {
        quote: "Don't let your happiness depend on something you may lose.",
        authorName: "C.S. Lewis"

    },
    {
        quote: "We are all broken, that's how the light gets in.",
        authorName: "Ernest Hemingway"

    },
    {
        quote: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
        authorName: "Voltaire"

    },
    {
        quote: "Life is tough my darling, but so are you.",
        authorName: "Stephanie Bennett Henry"

    },
    {
        quote: "Self-awareness and self-love matter. Who we are is how we lead.",
        authorName: "Brene Brown"

    },
    {
        quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        authorName: "Stephen King"

    },
    {
        quote: 'You cannot find peace by avoiding life',
        authorName: ' Virginia Woolf'
    },
    {
        quote: 'The strongest principle of growth lies in the human choice',
        authorName: 'George Eliot'
    },
    {
        quote: 'Focus more on your desire than on your doubt, and the dream will take care of itself.',
        authorName: 'Mark Twain'
    },
    {
        quote: 'We have to continually be jumping off cliffs and developing our wings on the way down.',
        authorName: 'Kurt Vonnegut'
    },
    {
        quote: ' One day I will find the right words, and they will be simple.',
        authorName: 'Jack Kerouac'
    },
    {
        quote: 'I can be changed by what happens to me. But I refuse to be reduced by it.',
        authorName: 'Maya Angelou'
    },
    {
        quote: 'The most common way people give up their power is by thinking they don\'t have any.',
        authorName: 'Alice Walker'
    },

    {
        quote: 'I want to taste and glory in each day, and never be afraid to experience pain.',
        authorName: 'Sylvia Plath'
    },

    {
        quote: " If I waited for perfection, I would never write a word.",
        authorName: 'Margaret Atwood'
    },
    {
        quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
        authorName: 'Anne Frank'
    },
    {
        quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
        authorName: 'Aristotle'
    }

]

function generateQuote() {

    var maxNum = arrayQuotes.length;
    var randomNumber = Math.floor(Math.random() * maxNum);
    // console.log(arrayQuotes[randomNumber]);
    if (maxNum == 0) {
        alert("Reload Page To Generate The Quotes Again")
    }
    displayQuote.innerHTML = arrayQuotes[randomNumber].quote;
    nameAuthor.innerHTML = arrayQuotes[randomNumber].authorName;

    arrayQuotes.splice(randomNumber, 1);


}









// var numbers = []; // this array will store the available numbers..

//         function generateNumbers()
//         {
//             // populate the available numbers however you need to..
//             for(var i=0; i<360; i+=30)
//             {
//                 numbers.push(i);
//             }
//         }




// function spin()
//         {
//             if(numbers.length==0)
//             {
//                 // then we've used  up all available numbers..start new game or whatever you need to do..
//                 alert("starting again");
//                 generateNumbers();
//             }
//             var rand = Math.floor(Math.random()*numbers.length);
//              // select an index randomly based on the number of remaining available numbers..
//             var num = numbers[rand];
//             numbers.splice(rand,1);
//              // remove the number we selected so it can't be selected next time..
//             document.getElementById("number").innerHTML = num;
//         }







