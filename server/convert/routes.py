
from flask import jsonify, request, make_response

from server.convert import convert_bp

@convert_bp.route('/url/convert_url')
def convert_url():
    return "hello"