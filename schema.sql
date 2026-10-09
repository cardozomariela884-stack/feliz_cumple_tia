-- Estructura de base de datos para guardar saludos de cumpleaños

CREATE TABLE IF NOT EXISTS felicitaciones (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    mensaje TEXT NOT NULL,
    relacion VARCHAR(50) DEFAULT 'Familiar',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Registros iniciales por defecto (ejemplo)
INSERT INTO felicitaciones (nombre, mensaje, relacion) 
VALUES 
('Mateo', '¡Feliz cumple, mami! Sos mi persona favorita en este mundo. Te amo un montón.', 'Hijo'),
('Alejandro', '¡Feliz cumpleaños a mi segunda mamá! Gracias por recibirme siempre y cuidarme tanto.', 'Sobrino');