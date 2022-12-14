import { connection, connections, connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const variableAmbientMongo: string = process.env.MONGODB || "";

export function mongoConnect() {
  connection
    .on("error", (error) => {
      console.log("ERROR: Falha na conexao com o MongoDB", error);
    })

    .on("close", () => {
      console.log("Connection to MongoDB ended");
      process.exit(1);
    })

    .once("open", () => {
      const infos = connections;

      infos.map((info) =>
        console.log(
          `Parabens voce esta logado ${info.host}:${info.port}/${info.name} seja bem-vindo ao banco do mongo-db`
        )
      );
    });

  connect(variableAmbientMongo);
}

 

export function mongoDisconnect() {
  connection.close();
}
