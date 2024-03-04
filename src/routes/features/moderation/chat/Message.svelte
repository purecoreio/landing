<script lang="ts">
  function randomString(length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  function randomText() {
    let msg = [];
    for (let i = 0; i < 4 + Math.floor(Math.random() * 3); i++) {
      msg.push(randomString(Math.floor(Math.random() * 7) + 2));
    }
    return msg.join(" ");
  }

  function getRandomPadding() {
    return Math.trunc(Math.random() * 30);
  }

  let flagged: boolean = false;

  setInterval(
    () => {
      flagged = true;
      setTimeout(() => {
        flagged = false;
      }, 2000);
    },
    4000 + Math.random() * 1000 * 10,
  );
</script>

<div
  class:text-right={Math.random() >= 0.5}
  style:padding-inline={`${getRandomPadding()}%`}
>
  <div
    class:bg-red-600={flagged}
    class:scale-110={flagged}
    class:border-red-600={flagged}
    class:border-opacity-20={flagged}
    class:text-red-600={flagged}
    class:bg-white={!flagged}
    class:dark:bg-black={!flagged}
    class="rounded p-3 shadow-md border flex-row gap-3 items-center inline-flex transition bg-opacity-30 backdrop-blur-lg"
  >
    <span class="redacted opacity-30">
      {randomText()}
    </span>
  </div>
</div>

<style>
  .redacted {
    font-family: "Flow Circular", system-ui;
    font-weight: 400;
    font-style: normal;
  }
</style>
