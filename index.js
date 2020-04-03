var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const { pool } = require('./config')

const { Pool } = require('pg');
const pool = new Pool({
    connectionString : process.env.DATABASE_URL,
    ssl: false
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(cors());

const getIPs = (request, response) => {
    pool.query("SELECT * FROM ips", (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getLocations = (request, response) => {
    pool.query("SELECT * FROM locations", (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.row)
    })
}

const getEntries = (request, response) => {
    pool.query("SELECT * FROM entries", (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const addIP = (request, response) => {
    pool.query("INSERT INTO ips (ip_address,timestamp,entry_id,public_computer) VALUES ($1, $2, $3, $4)", [ip_address,timestamp,entry_id,public_computer],
            error => {
                if(error){
                    throw error
                }
                response.status(201).json({status : 'success', message : 'IP added'})
            }
    )
}

const addLocation = (request, response) => {
    pool.query("INSERT INTO locations (entry_id, lat_long) VALUES ($1, $2)", [entry_id, lat_long],
            error => {
                if(error){
                    throw error
                }
                response.status(201).json({status : 'success', message : 'Location added'})
            }
    )
}

const addEntry = (request, response) => {
    pool.query("INSERT INTO entries (entry_id,entry_type,household_size,age,fever,temp,cough,nasal_congestion,respiratory_problems,digestive_problems,muscular_soreness,fatigue,sore_throat,other_symptoms,underlying_health_conditions,isolation_level,recent_travel_destination,recent_travel_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)", [entry_id, lat_long],
            error => {
                if(error){
                    throw error
                }
                response.status(201).json({status : 'success', message : 'Location added'})
            }
    )
}

app.route('/ips').get(getIPs).post(addIP)
app.route('/locations').get(getLocations).post(addLocation)
app.route('/entry').get(getEntries).post(addEntry)

app.listen(process.env.PORT || 5000, () => {
    console.log('Listening')
})
