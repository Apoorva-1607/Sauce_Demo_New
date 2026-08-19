import dotenv from 'dotenv';

const envName = process.env.TEST_ENV || 'qa';

dotenv.config({path : `./env/${envName}.env`, override : true});

module.exports =
{
    BASE_URI : process.env.BASE_URI,
    USERNAME : process.env.USERNAME,
    PASSWORD : process.env.PASSWORD
}