DROP TABLE IF EXISTS todos;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	category text NOT NULL
);

CREATE TABLE todos(
	id SERIAL PRIMARY KEY,
	todo text NOT NULL,
	category_id INTEGER NOT NULL,
	status varchar(100) NOT NULL,
	created_at text,
	completed_at text,
	
	CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (category) VALUES ('class');
INSERT INTO categories (category) VALUES ('chore');
INSERT INTO categories (category) VALUES ('hobby');

INSERT INTO todos (todo, category_id, status, created_at) 
VALUES ('finish final exam', 1, 'pending', '12/14/2023');
INSERT INTO todos (todo, category_id, status, created_at) 
VALUES ('do the dishes', 2, 'pending', '12/14/2023');
INSERT INTO todos (todo, category_id, status, created_at, completed_at) 
VALUES ('beat Elden Ring', 3, 'completed', '2/05/2022', '2/15/2022');