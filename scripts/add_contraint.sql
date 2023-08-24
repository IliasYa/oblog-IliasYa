BEGIN;

CREATE DOMAIN route_validation as TEXT CHECK (VALUE ~ '^\/.+');
ALTER TABLE category ALTER COLUMN "route" TYPE route_validation;

COMMIT;