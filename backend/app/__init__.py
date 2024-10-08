from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_pyfile('config.py')

db = SQLAlchemy(app)

from app import routes, models

if __name__ == "__main__":
    app.run(debug=True)
