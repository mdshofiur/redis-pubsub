import redis, { createClient } from "redis";

interface RedisOptions {
  port: number;
  host: string;
  legacyMode: boolean;
}

const options: RedisOptions = {
  port: 6379,
  host: "127.0.0.1",
  legacyMode: true,
};

export const publisher = createClient(options);


publisher.connect().then(() => {
  console.log("Publisher Connected to Redis");
});


process.on("SIGINT", async () => {
  publisher.quit();
});
