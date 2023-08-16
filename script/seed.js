const { db, GameDetail, PathOption, StoryPrompt } = require("../server/db")

console.log('Beginning seed...🌱')

const seed = async () => {
  const GameDetails = await Promise.all([
    GameDetail.create({
      title: "Llama Drama",
      author: "Eston Junior"
    })
  ]);

  const StoryPrompts = await Promise.all([
    StoryPrompt.create({
      plotPoint: "You are a Llama. Living in the wilderness of Peru, you are gracing a peaceful field with your herd. Living among the mountains of Machu Pichu, your heard and its ancestors have experienced a life many can only dream of. Being a Llama not even you can truly appreciate this fascinating reality. What you can appreciate is the luscious greens that fill the scenery. The herd is traveling to one of its favorite foraging spots when you notice a bush teeming with berries,they look ripe for the picking."
    }),
    StoryPrompt.create({
      plotPoint: "You head to the bush and figure, I know the way to the foraging spot so whats the harm in some extra treats? You take a slight detour and reach the berry bush and boy oh boy, they're as sweet as you imagined! You get so distracted by snacks that you don't realize how much time as passed until you start to hear calls from the herd. They're looking for you. Oh no, you don't want to be the reason we don't make it to the spot, so you take one more bite and head back towards the calls. You make it through the clearing and realize before it's too late that you don't recognize this Llama's tune. When you reach to the clearing where the cries were coming from it's empty. There are no Llama's to be found, what was calling you? In that moment a terrifyingly loud bang sounds off and everything goes black. You can't see anything but can feel something wrestling you to the ground. You try to cry for help but it's been so long your herd is nowhere near and whatever is attacking you has subdued you roughly. You can't move and can only sit still. You pass out after a few minutes from the panic.When you awake, you feel groggy and sore but you can see again. There's something on your face preventing you from being able to eat or bite anything and at the base of your neck something heavy sits. You're in some sort of lab and surrounded by humans in white lab coats. They're making all sorts of sounds and scaring you when a new human barges in. He's also wearing a white lab coat but has a sickly crazed look and is attacking everything in his path. He tosses the other humans aside and lunges for you, sinking his teeth into your neck."
    }),
    StoryPrompt.create({
      plotPoint: "Those berries are nothing compared to the luxurious of your secret foraging Oasis. Sticking with the herd is best, you hate to get lost in the forest by yourself. Jeepers Creepers! The journey takes most of the day but you know when you arrive because you can hear the waterfall behind the statue gaurding the secret entrance. A statue of Jose Llama, the first llama to ever find this haven was erected here to commemorate one of the best of your ancestors. It brings you so much joy to be greeted by the history of your Llamas, you spit in Jose's face as you pass, emotion taking over."
    })
  ]);

  const PathOptions = await Promise.all([
    PathOption.create({
      Option: "Head to that bush, there's no way you're gonna miss out on some sweet sweet berries.",
      StoryPromptId: 1,
      NextPromptId: 2,
    }),
    PathOption.create({
      Option: "Stay with the pack and head to your favorite foraging spot.",
      StoryPromptId: 1,
      NextPromptId: 3
    })
  ])

}

db.sync({ force: true }).then(seed).then(() => { console.log("done seeding🌳") })
