const express = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost:27017/shop", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        	.use(express.json());

		app.listen(5000, () => {
			console.log("Server has started!")
		});
	})
    .catch((error: Error) => {
        console.error(error);
    });

// postgress - реляционная БД
// схема базы, валидация записей, отношения между таблицами получаем из коробки, не нужно сложных
// настроек для небольших проектов

// mongodb - документоориентированная БД
// нет точной схемы базы данных, можем связывать поля как угодно, это не всегда может быть валидно ?