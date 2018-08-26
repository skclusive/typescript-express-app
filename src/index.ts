import main from "./main";

(async () => {
  try {
    await main();
  } catch (ex) {
    console.error(ex);
  }
})();
