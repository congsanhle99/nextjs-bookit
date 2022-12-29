/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   env: {
//     DB_LOCAL_URI: "mongodb://localhost:27017/bookit",
//   },
// };

module.exports = {
  env: {
    DB_LOCAL_URI:
      "mongodb://lcsanh:12345678xX@ac-ap8pcsn-shard-00-00.x1sjnsc.mongodb.net:27017,ac-ap8pcsn-shard-00-01.x1sjnsc.mongodb.net:27017,ac-ap8pcsn-shard-00-02.x1sjnsc.mongodb.net:27017/?ssl=true&replicaSet=atlas-2c3cea-shard-0&authSource=admin&retryWrites=true&w=majority",
  },
};
