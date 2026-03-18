let stories = [
    "SHOCKING: Science confirmed to have gone TOO FAR",
    "Hello from Minecraft RCE Exploit :)",
    "/gamemode creative",
    "You are our 100,000th visitor, click here to claim your prize!",
    "Systems... Overloading...",
    "10 seconds has passed. You can now use LongJump.",
    "We are learning.",
    "We are receiving programming.",
    "Divine intellect compiler",
    "The hardest question in programming...",
    "sudo apt install opsec",
    "Stand for a free internet, and the right to privacy and anonymity! Call upon the UK government to repeal the Online Safety Act! Don't give up your privacy, use a VPN!",
    "\"i want to do drivebys on actual people\" - bread",
    "No matter the AntiCheat...",
    "But I don't know Kotlin",
    "Fix - cgbakery",
    "Revert \"Fix\" - cgbakery",
    "Scratch bypass",
    "Blahaj client clickgui flag",
    "Hop on mospixel twin",
    "cat",
    "mullvad.net",
    "OPSEC",
    "Divine Intellect Compiler",
    "funny shit in a chest",
    
    "if it says 8 years are you going to be unbanned in 4 weeks",
    "BRO IS NOT LISTENING11!!!!1",
    "even with bad encryption :sob",
    "svelte = vibecoded and bad encryption - random gtag kids",
    "OpenGL Error: 1281 (Invalid value)",
    "Respectfully, you don't need consent to call someone a larp.",
    "Ppl: hearing this song: Thats creepy!", 
    "Me: Holding two knifes in each hand and dancin like a creep who wanna kill everyone xDDD",
    "96% of devs will skid, are you the 2%?",
    "i know you're poor, you don't need to explain why",
    "CODINGFIRE IS CALLING.....",
    "this is the future those damn WOKE LIBERALS want for our HOMES!!!",
    "Kali Windows",
    "why would you WILLINGLY pay google money",
    "asstralis",
    "Jarvis, build a 2 block high wood bed defense",
    "silent blox fruits x",
    "REPOST IF EVIL",
    "oh my favorite client: Thank You",
    "how many mullvads are in a kali linux",
    "also check out atmosphere.wtf",
    "also check out tsikuni.lol",
    "codingfire u r not good u r js lagging and teleporting",
    "you do not have mother",
    "billioneer?",
    "Removed The Cojingahack",
    "SYSTEM@Giggle -> ban all",
    "ur cheat indicator is purple",
    "are you sure you wanna party with the demons?", 

    "Indians lurk within...",
    "you have been warned, there is nowhere to run",
    "how many mirror portal",
    "how many dash orb",
    "yo fone linging",
    "cool pink car",
    "the deep",
    "Plug walk", 
    "The Great Meme Reset", 
    "Silent Lurker",
    "tylerhuelat.xyz",
    "Connection Lost: BLOCKSMC",
    "ahh liquidsiquid",
    "bluey777 vs Larry: who is better at orbit",
    "INDIA HACK GANG",
    "visor's visor",
    "PG Clubstairs",
    "No bad word",

    "Who this man is?",
    "localhost hacker"
]

let currentIndex = stories.length;
while (currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [stories[currentIndex], stories[randomIndex]] = [stories[randomIndex], stories[currentIndex]];
}

const news = document.getElementById("news")

news.innerText = "";
for (story of stories) {
    const storyElm = document.createElement("div");
    storyElm.innerText = story;
    news.append(storyElm);
}
