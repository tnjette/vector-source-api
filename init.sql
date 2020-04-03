CREATE TABLE ips (
    ID SERIAL PRIMARY KEY,
    ip_address VARCHAR(50),
    timestamp VARCHAR(50),
    entry_id VARCHAR(100),
    public_computer BOOLEAN
);

CREATE TABLE locations (
    entry_id VARCHAR(100),
    lat_long VARCHAR(50)
);

CREATE TABLE entries (
    entry_id VARCHAR(100),
    entry_type VARCHAR(1),
    household_size VARCHAR(3),
    age VARCHAR(3),
    fever VARCHAR(1),
    temp VARCHAR(3),
    cough BOOLEAN,
    nasal_congestion BOOLEAN,
    respiratory_problems BOOLEAN,
    digestive_problems BOOLEAN,
    muscular_soreness BOOLEAN,
    fatigue BOOLEAN,
    sore_throat BOOLEAN,
    other_symptoms VARCHAR(300),
    underlying_health_conditions VARCHAR(300),
    isolation_level VARCHAR(1),
    recent_travel_destination VARCHAR(100),
    recent_travel_date VARCHAR(50)
);

INSERT INTO ips (ip_address,timestamp,entry_id,public_computer) VALUES ('65.130.72.214', '1585325334', '65.130.72.214_1585325334', FALSE);

INSERT INTO locations (entry_id, lat_long) VALUES ('65.130.72.214_1585325334', '40.7549, -111.8649');

INSERT INTO entries (entry_id, entry_type, household_size, age, fever, temp, cough, nasal_congestion, respiratory_problems, digestive_problems, muscular_soreness, fatigue, sore_throat, other_symptoms, underlying_health_conditions, isolation_level, recent_travel_destination, recent_travel_date) VALUES ('65.130.72.214_1585325334', '1', '1', '33', '1', '102', TRUE, TRUE, FALSE, FALSE, TRUE, TRUE, TRUE, '', '', '1', '32.77, 96.79', '03-12-2020 00:00:00');
