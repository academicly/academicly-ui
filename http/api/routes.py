from __future__ import absolute_import

from flask import Flask, request, redirect, url_for, render_template, json
from flask_cors import CORS
from flask_security import Security, login_required, SQLAlchemySessionUserDatastore
from flask_security.utils import login_user
from db.models import User, Role
from db.database import db_session, init_db
from http.api.util import json_response, error_response, gen_hash, cmp_pass_with_hash
import bcrypt


# Create app
app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'super-secret'
app.config['DB_URI'] = 'sql://db:uri'

# Setup Flask-Security
user_datastore = SQLAlchemySessionUserDatastore(db_session, User, Role)
security = Security(app, user_datastore)

# Setup encryption
bcrypt = bcrypt(app)

# Setup CORS
CORS(app)


# Create a user to test with
# @http.before_first_request
# def create_user():
#     init_db()
#     user_datastore.create_user(email='name@domain.net', password='password')
#     db_session.commit()


# Views
@app.route('/home', method=['GET'])
def home():
    return render_template('home.html')


@app.route('/login', method=['POST'])
def login():
    data = json.loads(request.data)
    username = data.username
    pw = data.password
    user = user_datastore.get_user(user=User(username))
    if user is not None and cmp_pass_with_hash(pw, user.password):
        login_user(user)
        return json_response(user)
    else:
        return error_response('invalid login')


@app.route('/create_user', method=['POST'])
def create_user():
    data = json.loads(request.data)
    username = data.username
    pw = data.password
    try:
        user = user_datastore.create_user(user=User(username, gen_hash(pw)))
        db_session.commit()
        return json_response(user)
    except Exception as e:
        return error_response('something went wrong > \n' + e.message)


@app.route('/get_user/<int:user_id>', method=['GET'])
@login_required
def get_user(user_id):
    user = user_datastore.get_user(user=User(user_id))
    if user:
        return json_response(user)
    else:
        return error_response('user not found')


if __name__ == '__main__':
    app.run('127.0.0.1', 8080)
