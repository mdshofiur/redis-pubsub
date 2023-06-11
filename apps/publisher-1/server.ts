import app from "./app";

async function main() {
  try {
    // app listen
    app.listen(9080, () => {
      console.log(`Example app listening on port 9080`);
    });

  } catch (error) {
    console.log("Database connect error", error);
  }
}

main();
