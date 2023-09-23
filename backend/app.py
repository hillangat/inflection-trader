from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
import os
import bcrypt
from bson.json_util import dumps


app = Flask(__name__)

# MongoDB Configuration
app.config["MONGO_URI"] = f"mongodb://{os.getenv('MONGO_USERNAME')}:{os.getenv('MONGO_PASSWORD')}@mongo:27017/admin"

mongo = PyMongo(app)


@app.route('/user', methods=['POST'])
def add_user():
    users = mongo.db.users  # Accessing the 'users' collection
    
    username = request.json['username']
    email = request.json['email']
    name = request.json['name']
    password = request.json['password']
    
    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    
    # Insert the user into the 'users' collection
    result = users.insert_one({
        "username": username,
        "password": hashed_password,
        "email": email,
        "name": name
    })
    
    return jsonify(str(result.inserted_id))


@app.route('/user/<username>', methods=['GET'])
def get_user(username):
    try:
        user = mongo.db.users.find_one({'username': username})
        if user:
            response = dumps(user)
        else:
            response = jsonify({"error": "User not found"})
            response.status_code = 404
        return response
    except Exception as e:
        print(e)
        return jsonify({'error': 'Could not retrieve profile'}), 500


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)