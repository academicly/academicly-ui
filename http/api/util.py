from flask import json
import bcrypt


def json_response(payload, status=200):
    return json.dumps(payload), status, {'content-type': 'application/json'}


def error_response(message):
    return json_response({'error': message}, 404)


def gen_hash(val):
    return bcrypt.hashpw(val, bcrypt.gensalt())


def cmp_pass_with_hash(pw, hsh):
    hsh2 = gen_hash(pw)
    return hsh == bcrypt.hashpw(pw, hsh2)
