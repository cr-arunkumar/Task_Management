const redis = require('redis');

// Create a client and connect to Redis
const client = redis.createClient({
  host: '127.0.0.1', // Your Redis server address
  port: 6379,        // Default Redis port
  password: 'your_redis_password', // Set if Redis is password-protected
});

// Event listeners
client.on('connect', function() {
  console.log('Connected to Redis server');
});

client.on('error', function(err) {
  console.error('Redis error: ', err);
});

// Example command
client.set('key', 'value', redis.print);
client.get('key', function(err, result) {
  if (err) {
    console.error('Error retrieving key: ', err);
  } else {
    console.log('Value: ', result);
  }
});

// Close the connection when done
client.quit();
