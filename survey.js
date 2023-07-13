const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileGenerator = () => {
  const profile = {};

  rl.question("What's your name? ", (name) => {
    profile.name = name;

    rl.question("What's an activity you like doing? ", (activity) => {
      profile.activity = activity;

      rl.question("What do you listen to while doing that? ", (music) => {
        profile.music = music;

        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
          profile.meal = meal;

          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            profile.food = food;

            rl.question("Which sport is your absolute favourite? ", (sport) => {
              profile.sport = sport;
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                profile.superpower = superpower;

                generateProfileDescription(profile);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
};

const generateProfileDescription = (profile) => {
  const { name, activity, music, meal, food, sport, superpower } = profile;

  console.log(`\nProfile Description:\n`);
  console.log(`Name: ${name}`);
  console.log(`Activity: ${activity}`);
  console.log(`Music: ${music}`);
  console.log(`Meal: ${meal}`);
  console.log(`Food: ${food}`);
  console.log(`Sport: ${sport}`);
  console.log(`Superpower: ${superpower}`);
};

profileGenerator();
