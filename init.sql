CREATE TABLE IF NOT EXISTS profesores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    departamento VARCHAR(100)
);


CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    codigo VARCHAR(20),
    id_profesor INT REFERENCES profesores(id) ON DELETE CASCADE
);

CREATE TABLE evaluaciones (
    id SERIAL PRIMARY KEY,
    id_curso INT REFERENCES cursos(id) ON DELETE CASCADE,
    claridad INT CHECK (claridad BETWEEN 1 AND 10),
    puntualidad INT CHECK (puntualidad BETWEEN 1 AND 10),
    conocimiento INT CHECK (conocimiento BETWEEN 1 AND 10),
    comentario TEXT,
    fecha TIMESTAMP DEFAULT NOW()
);
