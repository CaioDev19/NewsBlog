CREATE TABLE admin(
  id SERIAL PRIMARY KEY,
  password TEXT NOT NULL,
  email VARCHAR(255) NOT NULL,
);

CREATE TABLE category(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
);

CREATE TABLE post(
  id SERIAL PRIMARY KEY,
  image_name TEXT NOT NULL,
  image_url TEXT NOT NULL,
  title VARCHAR(100) NOT NULL,
  summary VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  category_id INT NOT NULL,
  "date" DATE DEFAULT NOW(),
  CONSTRAINT fk_category
		FOREIGN KEY(category_id)
			REFERENCES category(id),
);

CREATE TABLE advertising(
  id SERIAL PRIMARY KEY,
  image TEXT NOT NULL,
);

INSERT INTO category(name)
VALUES 
('Local'),
('Bahia')
('Brasil'),
('Esporte'),
('Internacional')
('Famosos');