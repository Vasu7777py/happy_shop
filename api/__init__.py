
from flask import Flask, Blueprint, jsonify, request
from flask_cors import CORS

from items import Items, items

app = Flask(__name__)
CORS(app)
cors = CORS(app, resourses={
    r"/*":{
        "origins":"*"
    }
})

app.register_blueprint(Items)

if __name__ == "__main__":
    app.run(debug=True, host="192.168.29.73", port=5000)

