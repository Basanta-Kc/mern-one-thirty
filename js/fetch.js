 // const internPromise = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve("No Intern.");
      //   }, 3000);
      // });

      // console.log(internPromise);
      // internPromise.then((value) => {
      //   console.log(value)
      // }).catch((err) => {
      //   console.log(err)
      // })

      internPromise.then((value) => {
        console.log(value)
      }, (err) => {
        console.log(err)
      })


      // console.log("fdafasfd")

      // function getUser() {
      //   const user = { name: "basanta", age: 10 };
      //   return new Promise((resolve, reject) => {
      //     resolve(user);
      //   });
      // }

      // const basantaPromise = getUser(); // Promis()
      // console.log(basantaPromise);
      // basantaPromise
      //   .then((value) => {
      //     return value.name;
      //   }) // new Promise((resolve) => resovle(value.name))
      //   .then((name) => console.log(name));

      // fetch("https://randomuser.me/api/").then((res) => {
      //   res.json().then((data) => {
      //     console.log(data.results[0].name.first);
      //   });
      // });

      // fetch("https://randomuser.me/api/")
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((data) => {
      //     console.log(data.results[0].name.first);
      //   });

      const getRandomUser = async () => {
        const res =  await fetch("https://randomuser.me/api/")
        const user = await res.json()
        console.log(user)
      };

      const getUseDetailByGithubUserName = async (githubUserName) => {
        const res = await fetch(
          `https://api.github.com/users/${githubUserName}`
        );
        const user = await res.json();
        console.log(user);
      };

      const githubUserName = prompt("Enter Github Username:");
      getUseDetailByGithubUserName(githubUserName);

      async function getUser() {
        return { name: "ujjwal" };
      }

      console.log(getUser()); // Promise

      const getUserAndWeather(githubUsername){

        // Hello ${username}, Wearther at your location right now is ${temp}
      }