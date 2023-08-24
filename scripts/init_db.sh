sudo -u postgres psql -f ./scripts/init_db.sql

export PGUSER=oblog
export PGPASSWORD=oblogpass
export PGDATABASE=oblogbase

psql -f ./scripts/create_table.sql

psql -f ./scripts/add_contraint.sql

node ./scripts/feed_oblogbase.js